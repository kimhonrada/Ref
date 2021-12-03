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
  return pool.query(
    `INSERT INTO
      food(id, name, picture)
    VALUES
      (nextval('food_id_seq'), ${name}, ${picture})
    `
  );
};

module.exports = {
  getFood,
  addFood,
};
