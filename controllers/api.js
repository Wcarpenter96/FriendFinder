const model = require('../models/api');

function match(req, result) {
    let userData = req.body;
    model.find(userData, function (err, data) {
        if (err) throw err;
        result.json(data);
    });
};

function friends(req, result) {
    model.get(function (err, data) {
        if (err) throw err;
        result.send(data);
    });
}

module.exports = { match , friends };

