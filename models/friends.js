const mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "FriendFinder_db"
});

function friends(userData, cb) {
    connection.query(
        "INSERT INTO friends SET ?",
        {
            friend_name: userData.name,
            friend_img: userData.photo,
            score: userData.score,
        },
        function (err, result) {
            if (err) return cb(err);
            cb(null, true);
        }
    );
}

module.exports = { friends }