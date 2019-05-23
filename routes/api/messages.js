const router = require("express").Router();
const messageController = require("../../controllers/messageController");
const db = require('../../models');


router
  .route("/")
  // .post(messageController.create);
  .post(function (req, res) {
    db.Message
      .create(req.body)
      .then(dbMessage => res.json(dbMessage))
      .catch(err => res.status(422).json(err));
  });



router
  .route("/:id")
  .get(function (req, res) {
    messageController.findById
  })



module.exports = router;