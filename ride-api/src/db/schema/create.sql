DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS cars CASCADE;
DROP TABLE IF EXISTS car_images CASCADE;
DROP TABLE IF EXISTS listing CASCADE;
DROP TABLE IF EXISTS ratings CASCADE;
DROP TABLE IF EXISTS messages CASCADE;
DROP TABLE IF EXISTS makes CASCADE;
DROP TABLE IF EXISTS models CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  location VARCHAR(255),
  phone VARCHAR(255)
);

CREATE TABLE listing (
  id SERIAL PRIMARY KEY NOT NULL,
  make VARCHAR(255) NOT NULL,
  model VARCHAR(255) NOT NULL,
  year VARCHAR(255) NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  listing_image VARCHAR(255) NOT NULL,
  listing_date DATE DEFAULT CURRENT_DATE,
  is_sold BOOLEAN NOT NULL,
  price INTEGER NOT NULL,
  kms INTEGER NOT NULL,
  city VARCHAR(255) NOT NULL
);

-- CREATE TABLE cars (
--   id SERIAL PRIMARY KEY NOT NULL,
--   condition VARCHAR(255) NOT NULL,
--   type VARCHAR(255) NOT NULL,
--   seller_type VARCHAR(255) NOT NULL,  
--   exterior_colour VARCHAR(255) NOT NULL,
--   year INTEGER NOT NULL,
--   make VARCHAR(255) NOT NULL,
--   model VARCHAR(255) NOT NULL,
--   location TEXT NOT NULL
-- );

CREATE TABLE car_images (
  id SERIAL PRIMARY KEY NOT NULL,
  listing_id INTEGER REFERENCES listing(id) ON DELETE CASCADE,
  image TEXT
);

-- CREATE TABLE listing (
--   id SERIAL PRIMARY KEY NOT NULL,
--   car_id INTEGER REFERENCES cars(id) ON DELETE CASCADE,
--   user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
--   image_id INTEGER REFERENCES car_images(id) ON DELETE CASCADE,
--   listing_date DATE NOT NULL DEFAULT CURRENT_DATE,
--   is_sold BOOLEAN NOT NULL,
--   price BIGINT NOT NULL,
--   kms BIGINT NOT NULL,
--   body_type VARCHAR(255),
--   drivetrain VARCHAR(255),
--   transmission VARCHAR(255),
--   engine_size VARCHAR(255),
--   engine_aspiration VARCHAR(255),
--   engine_cylinders VARCHAR(255),
--   doors INTEGER,
--   with_photos BOOLEAN NOT NULL,
--   other_options TEXT
-- );

CREATE TABLE ratings (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  rating INTEGER,
  comment TEXT
);

CREATE TABLE messages (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  seller_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  message TEXT NOT NULL,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE makes (
  id SERIAL PRIMARY KEY NOT NULL,
  make VARCHAR(255) NOT NULL
);

CREATE TABLE models (
  id SERIAL PRIMARY KEY NOT NULL,
  make_id INTEGER REFERENCES makes(id) ON DELETE CASCADE,
  model VARCHAR(255) NOT NULL
);
