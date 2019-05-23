
const db = require('../models/message');


module.export = {
    create: function(req, res) {
        db.Message
            .create(req.body)
            .then(dbMessage => res.json(dbMessage))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Message
            .findById(req.params.id)
            .then(dbMessage => res.json(dbMessage))
            .catch(err => status(422).json(err));
    }
};