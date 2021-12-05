const { Pool } = require("pg");

const pool = new Pool({
  user: "kimhonrada",
  host: "localhost",
  database: "fridge",
  port: 5432,
});

pool.connect();

const getFood = () => {
  return pool.query(
    `SELECT *
      FROM food
      ORDER BY RANDOM()
      LIMIT 9;`
  );
};

const addFood = ({ name, picture }) => {
  if (name === null || picture === null) {
    return new Promise((resolve, reject) => {
      throw new Error();
    });
  }
  return pool.query(
    `INSERT INTO
      food(name, picture)
    VALUES
      ('${name}', '${picture}')
    `
  );
};

const eatFood = ({ name }) => {
  return pool.query(
    `DELETE FROM
    food
    WHERE
    name='${name}'
    `
  );
};

const addPlayer = ({ name }) => {
  if (name === null) {
    return new Promise((resolve, reject) => {
      throw new Error();
    });
  } else {
    return pool.query(
      `INSERT INTO
        player(name)
       VALUES
        ('${name}')
        RETURNING name, points
      `
    );
  }
};

module.exports = {
  getFood,
  addFood,
  eatFood,
  addPlayer,
};
