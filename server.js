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

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});

