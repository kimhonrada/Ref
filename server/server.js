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
  res.send("this is your food endpoint");
});
