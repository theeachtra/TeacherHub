const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);

//this sends default page if above route doesn't hit
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../Client/build", "index.html"))
);

module.exports = router;
