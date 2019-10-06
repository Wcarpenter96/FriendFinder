const path = require("path");

function index(req, res) {
    res.sendFile(path.join(__dirname, "../views/index.html"));
};

function survey(req, res) {
    res.sendFile(path.join(__dirname, "../views/survey.html"));
};

module.exports = {
    index,
    survey,
}