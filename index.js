// implement your API here
const express = require("express");
const server = express();
const Db = require("./data/db");

server.use(express.json());

server.get("/api/users", (req, res) => {
  Db.find()
    .then(data => {
      console.log("happy path");
      res.json(data);
    })
    .catch(error => {
      res.json(error);
    });
});

server.get("/api/users/:id", (req, res) => {
  const id = req.body.id;
  Db.findById(id)
    .then(res => {
      console.log(res.name, res.bio);
    })
    .catch(err => {
      console.log(err);
    });
});

server.post("/api/users", (req, res) => {
  const name = req.body.name;
  const bio = req.body.bio;
  const user = { name: name, bio: bio };
  Db.insert(user)
    .then(res => {
      console.log(res.status);
    })
    .catch(err => {
      console.log(err);
    });
});

server.put("/api/users/:id", (req, res) => {
  const id = req.body.id;
  const updatedName = req.body.name;
  const updatedBio = req.body.bio;
  const user = { name: updatedName, bio: updatedBio };
  Db.update(id, user)
    .then(user => {
      user.name = updatedName;
      user.bio = updatedBio;
    })
    .catch(err => {
      console.log(err);
    });
});

server.delete("/api/users/:id", (req, res) => {
  const id = req.body.id;
  Db.remove(id)
    .then(() => {
      console.log(`deleted users with id of ${id}`);
    })
    .catch(err => {
      console.log(err);
    });
});

server.listen(5000, () => {
  console.log("listening on 5000");
});
