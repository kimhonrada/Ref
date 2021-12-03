const { Pool } = require("pg");

const pool = new Pool({
  user: "kimhonrada",
  host: "localhost",
  database: "fridge",
  port: 5432,
});

pool.connect();

const getFood = () => {
  return pool.query();
};

const addFood = ({ name, picture }) => {
  console.log(name, picture);
  return pool.query(
    `INSERT INTO
      food(name, picture)
    VALUES
      ('${name}', '${picture}')
    `
  );
};

module.exports = {
  getFood,
  addFood,
};
