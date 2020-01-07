INSERT INTO users (name, email, password, location, phone) VALUES ( 'Fred' , 'the@email.com', 'password', 'M6H0C2', '6477848430'),
( 'Matt' , 'user@email.com', 'password', 'M3H4D3', '4167778800'),
( 'Stewart' , 'dude@email.com', 'password', 'M2D7A4', '4169993321');

INSERT INTO cars (condition, type, seller_type, exterior_colour, year, make, model, location) VALUES ( 'Used', 'Car', 'Private', 'Silver', '2000', 'Honda', 'S2000', 'M6H0C2'), ( 'New', 'Car', 'Dealer', 'Red', '2020', 'Ferrari', '488', 'M9T8H1'), ( 'Used', 'Crossover', 'Private', 'White', '2017', 'Toyota', 'Venza', 'M4D7P1');

INSERT INTO car_images (car_id, image) VALUES ( 1, 's2000_image.jpg'), ( 2, '488_image.jpg'), ( 3, 'venza_image.jpg');

INSERT INTO listing (car_id, user_id, image_id, is_sold, price, kms, body_type, drivetrain, transmission, engine_size, engine_aspiration, engine_cylinders, doors, with_photos, other_options) VALUES ( 1, 1, 1, FALSE, 1500000, 150000, 'Convertible', 'FR', '6-speed Manual', '2.0L', 'NA', '4-inline', 2, TRUE, 'Crappy car, don''t buy it!!'), ( 2, 3, 2, FALSE, 40000000, 50, 'Supercar', 'MR', '7-speed Automatic', '3.9L', 'Twin-Turbo', 'V8', 2, TRUE, 'It will get you ladies, or break your wallet. Probably both!!'), ( 3, 2, 3, FALSE, 2300000, 80750, 'Crossover', 'AWD', '6-speed Automatic', '2.7L', 'NA', '4-inline', 5, TRUE, 'It drifts in the snow!!');

INSERT INTO ratings (user_id, rating, comment) VALUES ( 1, 3, 'He looks weird, but alright seller'), ( 2, 5, 'Good buyer, great experience.'), ( 3, 4, 'Great salesperson, but doesn''t speak italian...');

INSERT INTO messages (user_id, seller_id, message) VALUES ( 1, 3, 'Get off this website, my car is better than yours.'), ( 3, 1, 'This town isn''t big enough for the both of us'), ( 2, 3, 'Can I take that car for a ride?');
