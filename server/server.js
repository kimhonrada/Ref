const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});

app.use(express.json());
app.use(express.static("dist"));

// get food
app.get("/food", (req, res) => {
  console.log(req.body);
  res.send(food);
});

// MOCK DATA

const food = [
  {
    id: 1,
    food: "cheese",
    picture:
      "https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-cheese-icon-png-image_4002572.jpg",
  },
  {
    id: 2,
    food: "milk",
    picture:
      "https://www.vhv.rs/dpng/d/4-40732_cute-milk-carton-png-transparent-png.png",
  },
  {
    id: 3,
    food: "meat",
    picture:
      "https://www.clipartmax.com/png/full/132-1322825_adventurer-meat-cartoon-meat-png.png",
  },
];
