// implement your API here
const express = require("express");
const server = express();
const Db = require("./data/db");

server.use(express.json());

server.get("/", (req, res) => {
  Db.find()
    .then(data => {
      console.log("happy path");
      res.status(200).json(data);
    })
    .catch(error => {
      res.json(error);
    });
});

server.listen(5000, () => {
  console.log("listening on 5000");
});
