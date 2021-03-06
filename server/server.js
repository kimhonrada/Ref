const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const {
  getFood,
  addFood,
  eatFood,
  loginPlayer,
  updatePoints,
  addPlayer,
} = require("../database/index.js");

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});

app.use(express.json());
app.use(express.static("dist"));

// get food
app.get("/food", (req, res) => {
  getFood()
    .then((result) => {
      res.status(200).send(result.rows);
    })
    .catch((err) => {
      console.log(err);
      res
        .status(404)
        .send(`stop, youre breaking it! you got this error ${err}`);
    });
});

// add food
app.post("/food", (req, res) => {
  addFood(req.body)
    .then((result) => {
      console.log(result);
      res.status(201).send("got it");
    })
    .catch((err) => {
      res.status(500).send("what did you do?!");
    });
});

// eat food
app.delete("/food", (req, res) => {
  eatFood(req.body)
    .then((result) => {
      res.status(204).send("eaten");
    })
    .catch((err) => {
      res.status(500).send("cant eat it sorry");
    });
});

// login player
app.get("/player", (req, res) => {
  loginPlayer(req.query)
    .then((result) => {
      res.status(200).send(result.rows[0]);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

// add player
app.post("/player", (req, res) => {
  addPlayer(req.body)
    .then((result) => {
      res.status(201).send();
    })
    .catch((err) => {
      res.status(500).send();
    });
});

// update score
app.put("/player", (req, res) => {
  updatePoints(req.body)
    .then((result) => {
      res.status(201).send();
    })
    .catch((err) => {
      res.status(500).send();
    });
});
