const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const { getFood, addFood } = require("../database/index.js");

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});

app.use(express.json());
app.use(express.static("dist"));

// get food
app.get("/food", (req, res) => {
  res.send(food);
});

// MOCK DATA

const food = [
  {
    id: 1,
    name: "cheese",
    picture:
      "https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-cheese-icon-png-image_4002572.jpg",
  },
  {
    id: 2,
    name: "milk",
    picture:
      "https://www.vhv.rs/dpng/d/4-40732_cute-milk-carton-png-transparent-png.png",
  },
  {
    id: 3,
    name: "meat",
    picture:
      "https://www.clipartmax.com/png/full/132-1322825_adventurer-meat-cartoon-meat-png.png",
  },
  {
    id: 4,
    name: "apple",
    picture:
      "https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-cheese-icon-png-image_4002572.jpg",
  },
  {
    id: 5,
    name: "bread",
    picture:
      "https://www.vhv.rs/dpng/d/4-40732_cute-milk-carton-png-transparent-png.png",
  },
  {
    id: 6,
    name: "coffe",
    picture:
      "https://www.clipartmax.com/png/full/132-1322825_adventurer-meat-cartoon-meat-png.png",
  },
  {
    id: 7,
    name: "wine",
    picture:
      "https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-cheese-icon-png-image_4002572.jpg",
  },
  {
    id: 8,
    name: "eggs",
    picture:
      "https://www.vhv.rs/dpng/d/4-40732_cute-milk-carton-png-transparent-png.png",
  },
  {
    id: 9,
    name: "water",
    picture:
      "https://www.clipartmax.com/png/full/132-1322825_adventurer-meat-cartoon-meat-png.png",
  },
  {
    id: 10,
    name: "beer",
    picture:
      "https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-cheese-icon-png-image_4002572.jpg",
  },
  {
    id: 11,
    name: "coke",
    picture:
      "https://www.vhv.rs/dpng/d/4-40732_cute-milk-carton-png-transparent-png.png",
  },
  {
    id: 12,
    name: "potatoes",
    picture:
      "https://www.clipartmax.com/png/full/132-1322825_adventurer-meat-cartoon-meat-png.png",
  },
];
