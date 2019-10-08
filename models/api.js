const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "FriendFinder_db"
});

function find(userData, cb) {
    connection.query("SELECT * FROM friends", function (err, res) {
        if (err) return cb(err);
        let totals = [];
        for (let i = 0; i < res.length; i++) {
            let scores = res[i].scores;
            let totalDifference = 0;
            for (let j = 0; j < 10; j++) {
                totalDifference += Math.abs(parseInt(scores[j]) - userData.scores[i]);
            }
            totals.push(totalDifference);
        }
        let bestFriend = res[totals.indexOf(Math.min(...totals))];
        cb(null, bestFriend);
    });
}

function get(cb) {
    connection.query("SELECT * FROM friends", function (err, res) {
        if (err) return cb(err);
        cb(null,res);
    });
}

module.exports = { find, get }