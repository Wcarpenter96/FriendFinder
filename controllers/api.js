const friendsModel = require('../models/friends');

function match(req, res) {
    var userData = req.body;
    friendsModel.create(userData, function (err, result) {
        if (err) throw err;
        res.json({ success: result })
    });
}

module.exports = match;

