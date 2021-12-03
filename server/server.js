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

// add food
app.post("/food", (req, res) => {
  addFood(req.body)
    .then((result) => {
      res.status(201).send("got it");
    })
    .catch((err) => {
      res.status(500).send("what did you do?!");
    });
});

// MOCK DATA

// const food = [
//   {
//     id: 1,
//     name: "cheese",
//     picture:
//       "https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-cheese-icon-png-image_4002572.jpg",
//   },
//   {
//     id: 2,
//     name: "milk",
//     picture:
//       "https://www.vhv.rs/dpng/d/4-40732_cute-milk-carton-png-transparent-png.png",
//   },
//   {
//     id: 3,
//     name: "meat",
//     picture:
//       "https://www.clipartmax.com/png/full/132-1322825_adventurer-meat-cartoon-meat-png.png",
//   },
//   {
//     id: 4,
//     name: "apple",
//     picture:
//       "https://png.pngtree.com/png-vector/20210522/ourmid/pngtree-apple-is-naturally-thirsty-and-healthy-png-image_3323218.jpg",
//   },
//   {
//     id: 5,
//     name: "bread",
//     picture:
//       "https://www.pikpng.com/pngl/m/219-2192327_toast-sliced-bread-breakfast-bakery-vector-bread-png.png",
//   },
//   {
//     id: 6,
//     name: "coffe",
//     picture:
//       "https://www.pikpng.com/pngl/m/65-654214_900-x-862-2-0-cup-of-coffee.png",
//   },
//   {
//     id: 7,
//     name: "wine",
//     picture:
//       "https://www.pikpng.com/pngl/m/44-447051_wine-bottle-and-glass-bottled-wine-png-clipart.png",
//   },
//   {
//     id: 8,
//     name: "eggs",
//     picture:
//       "https://www.pikpng.com/pngl/m/33-332722_free-range-eggs-free-range-eggs-png-clipart.png",
//   },
//   {
//     id: 9,
//     name: "water",
//     picture: "https://www.pikpng.com/pngl/m/474-4740655_prestige-clipart.png",
//   },
//   {
//     id: 10,
//     name: "beer",
//     picture:
//       "https://www.pikpng.com/pngl/m/77-772310_beer-cans-png-transparent-beer-can-clipart.png",
//   },
//   {
//     id: 11,
//     name: "soda",
//     picture:
//       "https://www.pikpng.com/pngl/m/297-2975367_free-png-soda-png-images-transparent-clipart-soda.png",
//   },
//   {
//     id: 12,
//     name: "potato",
//     picture:
//       "https://www.pikpng.com/pngl/m/55-556696_mr-potato-png-mr-potato-head-hash-browns.png",
//   },
// ];
