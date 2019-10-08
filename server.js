// Dependencies
// =============================================================
const express = require("express");
const mysql = require("mysql");
const routes = require('./routes');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 1111;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Starts the server to begin listening
// =============================================================

const connection = mysql.createConnection(
    process.env.JAWSDB_URL ||
    {
        host: "localhost",
        port: process.env.PORT || 1111,
        user: "root",
        password: "password",
        database: "FriendFinder_db"
    }
);

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");

});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

