CREATE TABLE IF NOT EXISTS food (
  id SERIAL PRIMARY KEY,
  name varchar(256) NOT NULL UNIQUE,
  picture varchar NOT NULL
);

CREATE TABLE IF NOT EXISTS player (
  id serial PRIMARY KEY,
  name varchar(69) NOT NULL UNIQUE,
  points integer default 0 NOT NULL
);