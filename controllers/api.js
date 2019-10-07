// const friendsModel = require('../models/friends');
const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "FriendFinder_db"
});

function match (req, result) {
    let userData = req.body;
    connection.query("SELECT * FROM friends", function(err, res) {
        if (err) throw err;
        let totals = [];
        for (let i = 0; i < res.length; i++) {
            let scores = res[i].scores;
            let totalDifference = 0;
            for (let j = 0; j < 10; j++) {
                totalDifference += Math.abs(parseInt(scores[j])-userData.scores[i]);
            }
            totals.push(totalDifference);
        }
        let bestFriend = res[totals.indexOf(Math.min(...totals))];
        result.json(bestFriend);        
      });
}

module.exports = { match };

