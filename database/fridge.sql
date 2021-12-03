CREATE TABLE IF NOT EXISTS food (
  id SERIAL PRIMARY KEY,
  name varchar(256) NOT NULL UNIQUE,
  picture varchar NOT NULL
)
