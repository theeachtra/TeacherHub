const express = require("express");
const routes = require("./routes");
// const path = require('path');

const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("Client/build"));
}

app.use(routes);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactmessages",
  { useCreateIndex: true, useNewUrlParser: true }
);

const connection = mongoose.connection;
connection.once("open", function() {
  console.log("mongoDB connection success");
});

app.listen(PORT, function() {
  console.log("app listening on port 3001");
});
