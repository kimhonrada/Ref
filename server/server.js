const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});

app.use(express.json());

// get food
app.get("/food", (req, res) => {
  res.send("this is your food endpoint");
});
