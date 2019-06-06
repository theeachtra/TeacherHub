const path = require("path");
const router = require("express").Router();
const messageRoutes = require("./messages");

router.use("/messages", messageRoutes);

router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../..Client/build", "index.html"));
});

module.exports = router;
