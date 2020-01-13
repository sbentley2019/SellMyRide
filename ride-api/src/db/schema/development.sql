INSERT INTO
  users (name, email, password, location, phone)
VALUES
  (
    'Fred',
    'the@email.com',
    'password',
    'M6H0C2',
    '6477848430'
  ),
  (
    'Matt',
    'user@email.com',
    'password',
    'M3H4D3',
    '4167778800'
  ),
  (
    'Stewart',
    'dude@email.com',
    'password',
    'M2D7A4',
    '4169993321'
  );

INSERT INTO
  listing (
    make,
    model,
    year,
    user_id,
    listing_image,
    is_sold,
    price,
    kms,
    city,
    description,
    exterior_colour
  )
VALUES
  (
    'Honda',
    'S2000',
    '2000',
    1,
    'https://cdn.bringatrailer.com/wp-content/uploads/2017/07/59889719ec2fa_IMG_5020-1-940x607.jpg',
    FALSE,
    15000,
    200000,
    'Toronto',
    'AP1 S2000, rides like a dream! Bone stock, clean condition',
    'Silver'
  ),
  (
    'Honda',
    'S2000',
    '2002',
    1,
    'https://drive.google.com/file/d/17uUgSFrR8Oj_NFyXfp6EkmJmcaRsNYbK/view?usp=sharing',
    FALSE,
    22000,
    135000,
    'Toronto',
    'Never winter driven, comes with BBS and stock rims',
    'Silver'
  ),
  (
    'Honda',
    'Civic Type R',
    '2019',
    1,
    'https://drive.google.com/file/d/1bKJbV9L6USEwh0bC2xVs-ZMeMHjRJ5gl/view',
    FALSE,
    37550,
    31958,
    'Toronto',
    'Like new 2019 Type R. Bone stock, accident free, highway driven. Come on down to Atlas Skyholder Honda for a test drive!',
    'White'
  ),
  (
    'Honda',
    'Civic Type R',
    '2017',
    1,
    'https://drive.google.com/file/d/17I5pXtLVua3uTSuoHsI4kk5YVVkO-Pes/view',
    FALSE,
    29997,
    57200,
    'Toronto',
    'Like new 2017 Type R. Bone stock, all service records available. Safetied and certified. Come on down to Atlas Skyholder Honda for a test drive!',
    'Black'
  ),
  (
    'Honda',
    'Accord',
    '2019',
    1,
    'https://drive.google.com/file/d/1x6fohYQWsMT3UGjccxg7vzFdcC0Q-9iz/view',
    FALSE,
    37876,
    25,
    'Toronto',
    'BRAND NEW Accord 1.5T Touring!! Come on down to Atlas Skyholder Honda for a test drive!',
    'Black'
  ),
    (
    'Honda',
    'Accord',
    '2019',
    1,
    'https://drive.google.com/file/d/1vYi7BVz8xM4JxMDOe8Fx6RrF8EWAa598/view',
    FALSE,
    32245,
    15,
    'Toronto',
    'BRAND NEW Accord 1.5T Sport!! Rare 6-speed manual! Come on down to Atlas Skyholder Honda for a test drive!',
    'Black'
  ),
      (
    'Honda',
    'Accord',
    '2019',
    1,
    'https://drive.google.com/file/d/1yCDiwitpJW8KUiS1-5SmnsMJK1Qht2kr/view',
    FALSE,
    34965,
    28,
    'Toronto',
    'BRAND NEW! Come on down to Atlas Skyholder Honda for a test drive!',
    'Blue'
  ),
        (
    'Honda',
    'Accord',
    '2019',
    1,
    'https://drive.google.com/file/d/1yCDiwitpJW8KUiS1-5SmnsMJK1Qht2kr/view',
    FALSE,
    35265,
    15,
    'Toronto',
    'BRAND NEW! Come on down to Atlas Skyholder Honda for a test drive!',
    'Red'
  ),
        (
    'Honda',
    'Accord',
    '2019',
    1,
    'https://drive.google.com/file/d/1yCDiwitpJW8KUiS1-5SmnsMJK1Qht2kr/view',
    FALSE,
    12,
    32245,
    'Toronto',
    'BRAND NEW! Come on down to Atlas Skyholder Honda for a test drive!',
    'Silver'
  ),
  (
    'Ferrari',
    '488',
    '2020',
    2,
    'https://cdn.motor1.com/images/mgl/qjRQq/s1/ferrari-488-gtb-profile.jpg',
    FALSE,
    300000,
    10,
    'Vancouver',
    'BIG BALLERS CHECK THIS OUT!',
    'Red'
  ),
  (
    'Toyota',
    'Venza',
    '2017',
    3,
    'https://cars.usnews.com/static/images/Auto/izmo/i5049/2015_toyota_venza_angularfront.jpg',
    FALSE,
    10000,
    200000,
    'Toronto',
    'immaculate condition, perfect grocery getter for you and your family!',
    'White'
  ),
  (
    'Subaru',
    'Impreza WRX STi',
    '2020',
    3,
    'https://drive.google.com/file/d/1FXOMQyzAdC9K7hF2piheOXugOe2nkSpc/view',
    FALSE,
    49424,
    45,
    'Oakville',
    'Brand new 2020 STI in crystal white pearl! Come see it now!',
    'White'
  ),
  (
    'Subaru',
    'Impreza WRX',
    '2006',
    3,
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2F7zJF_arEix0%2Fmaxresdefault.jpg&f=1&nofb=1',
    FALSE,
    6000,
    140000,
    'Barrie',
    'Hawkeye WRX in world rally blue. Tasteful mods, never winter driven.',
    'Blue'
  ),
  (
    'Ford',
    'Focus',
    '2015',
    2,
    'http://st.motortrend.com/uploads/sites/5/2015/12/2015-Ford-Focus-ST-with-Mountune-Modifications-front-three-quarters.jpg',
    FALSE,
    25000,
    60000,
    'Vancouver',
    'nicely modded Focus ST. A true garage queen.',
    'Black'
  ),
  (
    'Porsche',
    '911',
    '1986',
    1,
    'http://www.sloancars.com/new/wp-content/uploads/2016/03/2400_1986_911_carrera_coupe_black_black__36000miles_web1.jpg',
    FALSE,
    20000,
    132000,
    'Oshawa',
    'Mint condition 930 911! Showroom condition, great collectors car!',
    'Black'
  ),
  (
    'Audi',
    'RS 4',
    '2012',
    1,
    'http://machinespider.com/wp-content/uploads/2012/02/2012-Audi-RS4-Avant-3.jpg',
    FALSE,
    17000,
    89000,
    'Toronto',
    'Anyone fancy sport wagons? ULTRA RARE red RS4. Only $17,000! All service records available, imported from Germany.',
    'Red'
  ),
  (
    'Mitsubishi',
    'Lancer',
    '2002',
    2,
    'https://vignette.wikia.nocookie.net/fastandfurious/images/6/66/2002_EVO_Lancer_-_Front_Side.JPG/revision/latest?cb=20151229185210',
    FALSE,
    9000,
    119000,
    'Mississauga',
    'Cant decide between an EVO and STi? Take this tastefully modded Evo out for a test drive! Service records and mod list available upon request.',
    'Yellow'
  ),
  (
    'Volkswagen',
    'GTI',
    '2016',
    3,
    'http://s3.caradvice.com.au/wp-content/uploads/2016/07/Golf-GTI_07_M.jpg',
    FALSE,
    23000,
    34000,
    'Hamilton',
    'Clean car',
    'White'
  );

INSERT INTO ratings (user_id, rating, comment) VALUES ( 1, 3, 'He looks weird, but alright seller'), ( 2, 5, 'Good buyer, great experience.'), ( 3, 4, 'Great salesperson, but doesn''t speak italian...');

INSERT INTO messages (user_id, seller_id, message) VALUES ( 1, 3, 'Get off this website, my car is better than yours.'), ( 3, 1, 'This town isn''t big enough for the both of us'), ( 2, 3, 'Can I take that car for a ride?');

INSERT INTO makes (make) VALUES ('Acura'), ('Alfa Romeo'), ('Aston Martin'), ('Audi'), ('Bentley'), ('BMW'), ('Buick'), ('Cadillac'), ('Caterham'), ('Chevrolet'), ('Chrysler'), ('Dodge'), ('Ferrari'), ('Fiat'), ('Ford'), ('Genesis'), ('GMC'), ('Honda'), ('Hummer'), ('Hyundai'), ('Infiniti'), ('Jaguar'), ('Jeep'), ('Kia'), ('Lamborghini'), ('Land Rover'), ('Lexus'), ('Mazda'), ('Mercedes-Benz'), ('MINI'), ('Mitsubishi'), ('Nissan'), ('Porsche'), ('smart'), ('Subaru'), ('Tesla'), ('Toyota'), ('Volkswagen'), ('Volvo');

INSERT INTO models (make_id, model) VALUES (1,'CL'), (1, 'CSX'), (1,'EL'), (1,'ILX'), (1, 'Integra'), (1,'MDX'), (1,'NSX'), (1,'RDX'), (1,'RL'), (1,'RLX'), (1,'TL'), (1,'TLX'), (1,'TSX'), (1,'ZDX'), (2, '164'), (2, '4C Coupe'), (2, '4c Spider'), (2, 'Giulia'), (2, 'Giulia Quadrifoglio'), (2, 'Giulietta'), (2, 'GTV'), (2, 'Spider'), (2, 'Stelvio'), (2, 'SZ'), (3, 'DB11'),  (3, 'DB7'), (3, 'DB7 Vantage Volante'), (3, 'DB9'), (3, 'DBS'), (3, 'Rapide'), (3, 'Rapide S'), (3, 'V12 Vantage'), (3, 'V8 Vantage'), (3, 'Vanquish'), (3, 'Vanquish S'), (3, 'Vantage'), (3, 'Vantage S'), (4, 'A3'), (4, 'A3 Cabriolet'), (4, 'A3 e-Tron'), (4, 'A3 Sportback e-Tron'), (4, 'A4'), (4, 'A4 allroad'), (4, 'A5'), (4, 'A5 Coupe'), (4, 'A6'), (4, 'A7'), (4, 'A7 Sportback'), (4, 'A8'), (4, 'Q3'), (4, 'Q5'), (4, 'Q7'), (4, 'Q8'), (4, 'R8'), (4, 'R8 Coupe'), (4, 'RS 3'), (4, 'RS 4'), (4, 'RS 5'), (4, 'RS 5 Coupe'), (4, 'RS 5 Sportback'), (4, 'RS 6'), (4, 'RS 7'), (4, 'RS 7 Sportback'), (4, 'S3'), (4, 'S3 Sedan'), (4, 'S4'), (4, 'S5'), (4, 'S6'), (4, 'S7'), (4, 'S7 Sportback'), (4, 'S8'), (4, 'S8 plus'), (4, 'SQ5'), (4, 'TT'), (4, 'TT RS'), (4, 'TT RS Coupe'), (4, 'TTS'), (5, 'Arnage'), (5, 'Azure'), (5, 'Continental'), (5, 'Continental Flying Spur'), (5, 'Continental GT'), (5, 'Continental Supersports'), (5, 'Turbo R'), (6, '1600'), (6, '2002'), (6, '1 Series'), (6, '2 Series'), (6, '3 Series'), (6, '4 Series'), (6, '5 Series'), (6, '6 Series'), (6, '7 Series'), (6, '8 Series'), (6, 'i3'), (6, 'i8'), (6, 'M'), (6, 'M8'), (6, 'X1'), (6, 'X2'), (6, 'X3'), (6, 'X3 M'), (6, 'X4'), (6, 'X4 M'), (6, 'X5'), (6, 'X5 M'), (6, 'X6'), (6, 'X6 M'), (6, 'X7'), (6, 'Z3'), (6, 'Z3 M'), (6, 'Z4'), (6, 'Z4 M'), (6, 'Z8'), (7, 'Allure'), (7, 'Century'), (7, 'Gran Sport'), (7, 'Grand National'), (7, 'LaCrosse'), (7, 'LeSabre'), (7, 'Lucerne'), (7, 'Regal'), (7, 'Rendezvous'), (7, 'Riviera'), (7, 'Skylark'), (7, 'Special'), (7, 'Wildcat'), (8, 'Allante'), (8, 'ATS'), (8, 'Coupe DeVille'), (8, 'CTS'), (8, 'CTS-V'), (8, 'Deville'), (8, 'DTS'), (8, 'Eldorado'), (8, 'Escalade'), (8, 'Limousine'), (8, 'Seville'), (8, 'SLS'), (8, 'SRX'), (8, 'STS'), (8, 'Superior'), (8, 'XLR'), (8, 'XT4'), (8, 'XT5'), (8, 'XT6'), (8, 'XTS'), (9, 'Super 7'), (10, '1500 Pickup'), (10, '3100 Pickup'), (10, '3500 Pickup'), (10, 'AG Master Deluxe'), (10, 'Astro'), (10, 'Avalanche'), (10, 'Aveo'), (10, 'Aveo 5'), (10, 'Bel Air'), (10, 'Beretta'), (10, 'Biscayne'), (10, 'Blazer'), (10, 'Bolt EV'), (10, 'C1500'), (10, 'Camaro'), (10, 'Caprice'), (10, 'Cavalier'), (10, 'Chevelle'), (10, 'Chevette'), (10, 'Chevy Van'), (10, 'Cheyenne'), (10, 'City Express'), (10, 'Cobalt'), (10, 'Colorado'), (10, 'Corsica'), (10, 'Corvair'), (10, 'Corvette'), (10, 'Cruze'), (10, 'Delray'), (10, 'El Camino'), (10, 'Epica'), (10, 'Equinox'), (10, 'Fleetline'), (10, 'Geo Tracker'), (10, 'HHR'), (10, 'Impala'), (10, 'Lumina'), (10, 'Malibu'), (10, 'Malibu Hybrid'), (10, 'Malibu Maxx'), (10, 'Monte Carlo'), (10, 'Nova'), (10, 'Optra'), (10, 'Optra 5'), (10, 'Optra Wagon'), (10, 'Orlando'), (10, 'Pickup'), (10, 'S10'), (10, 'Silverado'), (10, 'Silverado 1500'), (10, 'Silverado 2500'), (10, 'Silverado 3500'), (10, 'Silverado 3500HD'), (10, 'Sonic'), (10, 'Spark'), (10, 'Spark EV'), (10, 'Sportvan'), (10, 'Sprint'), (10, 'SSR'), (10, 'Stylemaster'), (10, 'Suburban'), (10, 'Superior'), (10, 'Tahoe'), (10, 'Tracker'), (10, 'TrailBlazer'), (10, 'Traverse'), (10, 'Uplander'), (10, 'Venture'), (10, 'Volt'), (10, 'Volt Electric'), (11, '200'), (11, '300'), (11, '200S'), (11, '300SRT8'), (11, 'Concorde'), (11, 'Cordoba'), (11, 'Crossfire'), (11, 'Fifth Avenue'), (11, 'Imperial'), (11, 'Intrepid'), (11, 'LeBaron'), (11, 'Neon'), (11, 'New Yorker'), (11, 'Newport'), (11, 'Pacifica'), (11, 'Pacifica Hybrid'), (11, 'Prowler'), (11, 'PT Cruiser'), (11, 'Saratoga'), (11, 'Sebring'), (11, 'Town & Country'), (11, 'Windsor'), (12, '50'), (12, '100'), (12, '150'), (12, '250'), (12, '350'), (12, '2500'), (12, '3500'), (12, '4500'), (12, '1/2 Ton Trucks'), (12, '300 Pickup'), (12, 'Avenger'), (12, 'Brothers'), (12, 'Caliber'), (12, 'Caravan'), (12, 'Caravan C/V'), (12, 'Challenger'), (12, 'Charger'), (12, 'Colt'), (12, 'Coronet'), (12, 'D Series'), (12, 'Dakota'), (12, 'Dart'), (12, 'Daytona'), (12, 'Deluxe'), (12, 'Durango'), (12, 'Fargo'), (12, 'Grand Caravan'), (12, 'Intrepid'), (12, 'Journey'), (12, 'Magnum'), (12, 'Neon'), (12, 'Nitro'), (12, 'Polara'), (12, 'Ram'), (12, 'RAM 1500 PICKUP'), (12, 'RAM 2500 PICKUP'), (12, 'RAM 3500 PICKUP'), (12, 'Ram Van'), (12, 'Stealth'), (12, 'Viper'), (12, 'W Series'), (13, '250'), (13, '308'), (13, '328'), (13, '348'), (13, '360'), (13, '456'), (13, '458'), (13, '488'), (13, '512'), (13, '550'), (13, '599'), (13, '612'), (13, '458 Italia'), (13, '458 Spider'), (13, '488 GTB'), (13, '488 Spider'), (13, '575M Maranello'), (13, '812 Superfast'), (13, 'California'),  (13, 'F12 Berlinetta'), (13, 'F355'), (13, 'F40'), (13, 'F430'), (13, 'F430 Spider'), (13, 'F512M'), (13, 'FF'), (13, 'GTC4Lusso'), (13, 'Mondial'), (13, 'Mondial T'), (13, 'Portofino'), (13, 'Testarossa'), (14, '500'), (14, '124 Spider'), (14, '131S'), (14, '500 Abarth'), (14, '500E'), (14, '500L'), (14, '500X'), (14, 'Barchetta'), (14, 'Spider'), (15, 'Aerostar Van'), (15, 'Anglia'), (15, 'Aspire'), (15, 'Bronco'), (15, 'Cougar'), (15, 'Coupe'), (15, 'Crown Victoria'), (15, 'Econoline/Club Wagon'), (15, 'Edge'), (15, 'Escape'), (15, 'Escort'), (15, 'E-Series Cargon Van'), (15, 'E-Series Cutaway'), (15, 'Excursion'), (15, 'Exp Sport Coupe'), (15, 'Expedition'), (15, 'Explorer'), (15, 'Explorer Sport Trac'), (15, 'F-1'), (15, 'F-100'), (15, 'F-150'), (15, 'F-250'), (15, 'F-350'), (15, 'F-350 Series'), (15, 'Fiesta'), (15, 'Five Hundred'), (15, 'Flex'), (15, 'Focus'), (15, 'Focus Electric'), (15, 'Freestar'), (15, 'Freestyle'),  (15, 'Fusion'), (15, 'Fusion Energi'), (15, 'Fusion Hybrid'), (15, 'GT'), (15, 'LCF'), (15, 'LTD Crown Victoria'), (15, 'Mustang'), (15, 'Police Interceptor Sedan'), (15, 'Ranger'), (15, 'Super Duty E-450 DRW'), (15, 'Taurus'), (15, 'Taurus Police Pkg'), (15, 'Taurus X'), (15, 'T-bucket'), (15, 'Thunderbird'), (15, 'Torino'), (15, 'Transit Passenger Wagon'), (15, 'Windstar'), (15, 'Windstar Cargo Van'), (16, 'G70'), (16, 'G80'), (16, 'G90'), (17, '910'), (17, '1300'), (17, '150 Pickup'), (17, '1500 Pickup'), (17, '250 Pickup'), (17, '2500 HD Chassis-Cabs'), (17, '2500 Pickup'), (17, '3500 Cab-Chassis'), (17, '3500 Pickup'), (17, '4500 Pickup'), (17, 'Acadia'), (17, 'Acadia Denali'), (17, 'C10 Pickup'), (17, 'Canyon'), (17, 'Denali'), (17, 'Envoy'), (17, 'Jimmy'), (17, 'New Sierra 1500'), (17, 'New Sierra 2500'), (17, 'S15 4WD'), (17, 'S15 Pickup'), (17, 'Safari'), (17, 'Safari Passenger Van'), (17, 'Savana Passenger'), (17, 'Sierra 1500'), (17, 'Sierra 1500 Denali'), (17, 'Sierra 2500'), (17, 'Sierra 2500 Denali HD'), (17, 'Sierra 3500'), (17, 'Sierra 3500HD'), (17, 'Sonoma'), (17, 'Suburban'), (17, 'Terrain'), (17, 'Terrain Denali'), (17, 'Yukon'), (17, 'Yukon Hybrid'), (18, 'Accord'), (18, 'Accord Coupe'), (18, 'Accord Crosstour'), (18, 'Accord Hybrid'), (18, 'Accord Sedan'), (18, 'Accord Wagon'), (18, 'Acty'), (18, 'Civic'), (18, 'Civic Coupe'), (18, 'Civic del Sol'), (18, 'Civic Hatchback'), (18, 'Civic Sedan'), (18, 'Civic Type R'), (18, 'Clarity Plug-In Hybrid'), (18, 'Crosstour'), (18, 'CR-V'), (18, 'CRX'), (18, 'CR-Z'), (18, 'Element'), (18, 'Fit'), (18, 'HR-V'), (18, 'Insight'), (18, 'Odyssey'), (18, 'Passport'), (18, 'Pilot'), (18, 'Prelude'), (18, 'Ridgeline'), (18, 'S2000'), (19, 'H1'), (19, 'H2'), (19, 'H3'), (19, 'H3T'), (19, 'Humvee'), (20, 'Accent'), (20, 'Azera'), (20, 'Elantra'), (20, 'Elantra Coupe'), (20, 'Elantra GT'), (20, 'Elantra Touring'), (20, 'Entourage'), (20, 'Equus'), (20, 'Genesis'), (20, 'Genesis Coupe'), (20, 'Ioniq'), (20, 'Ioniq Electric'), (20, 'Ionic Electric Plus'), (20, 'Ioniq Hybrid'), (20, 'Kona'), (20, 'Kona Electric'), (20, 'Palisade'), (20, 'Pony'), (20, 'Santa Fe'), (20, 'Santa Fe Sport'), (20, 'Santa Fe XL'), (20, 'Sonata'), (20, 'Sonata Hybrid'), (20, 'Tiburon'), (20, 'Tucson'), (20, 'Veloster'), (20, 'Veloster N'), (20, 'Venue'), (20, 'Veracruz'), (20, 'XG350'), (21, 'FX'), (21, 'G'), (21, 'I'), (21, 'IPL'), (21, 'J30'), (21, 'JX35'), (21, 'M'), (21, 'M35h'), (21, 'Q45'), (21, 'Q50'), (21, 'Q60'), (21, 'Q70'), (21, 'Q70L'), (21, 'QX'), (21, 'QX30'), (21, 'QX50'), (21, 'QX56'), (21, 'QX60'), (21, 'QX70'), (21, 'QX80'), (22, 'E-Pace'), (22, 'E-Type'), (22, 'F-Pace'), (22, 'F-Type'), (22, 'F-Type R'), (22, 'S-Type'), (22, 'XJ'), (22, 'XJS'), (23, 'CJ'), (23, 'Compass'), (23, 'Grand Cherokee'), (23, 'Patriot'), (23, 'Wrangler'), (24, 'Forte 5'), (24, 'Niro'), (24, 'Niro EV'), (24, 'Niro Plug-In Hybrid'), (24, 'Optima'), (24, 'Rio'), (24, 'Rondo'), (24, 'Sedona'), (24, 'Soul'), (24, 'Sepctra'), (24, 'Sportage'), (25, 'Aventador'),  (25, 'Countach'), (25, 'Diablo'), (25, 'Gallardo'), (25, 'Huracan'), (25, 'Murcielago'), (25, 'Urus'), (26, 'Defender'), (26, 'Discover'), (26, 'LR2'), (26, 'LR3'), (26, 'LR4'), (26, 'Range Rover'), (26, 'Range Rover Sport'), (27, 'ES'), (27, 'GS'), (27, 'GX'), (27, 'IS 200t'), (27, 'IS C'), (27, 'IS F'), (27, 'LC'), (27, 'LS'), (27, 'NX'), (27, 'RC'), (27, 'RX'), (28, 'CX-3'), (28, 'CX-5'), (28, 'CX-7'), (28, 'Mazda3'), (28, 'Mazda5'), (28, 'Mazda6'), (28, 'Miata MX-5'), (28, 'Protege'), (28, 'RX-7'), (28, 'RX-8'), (28, 'Tribute'), (29, 'B-Class'), (29, 'C-Class'), (29, 'E-Class'), (29, 'CL-Class'), (29, 'CLK-Class'), (29, 'AMG GT'), (29, 'AMG GT R'), (29, 'GLK-Class'), (30, 'Clubman'), (30, 'Convertible'), (30, 'Countryman'), (30, 'Coupe'), (31, '3000GT'), (31, 'Eclipse'), (31, 'Galant'), (31, 'Lancer'), (31, 'Mirage'), (31, 'Outlander'), (31, 'Pajero'), (32, '240SX'), (32, '350Z'), (32, '370Z'), (32, 'Altima'), (32, 'GT-R'), (32, 'Leaf'), (32, 'Maxima'), (32, 'Murano'), (32, 'Pathfinder'), (32, 'Titan'), (33, '911'), (33, '911 GT3'), (33, '911 GT3 RS'), (33, '911T'), (33, 'Boxster'), (33, 'Cayman'), (33, 'Cayenne'), (33, 'Macan'), (33, 'Panamera'), (34, 'fortwo'), (34, 'fortwo electric drive'), (35, 'BRZ'), (35, 'Impreza'), (35, 'Impreza WRX'), (35, 'Impreza WRX STi'), (35, 'Crosstrek'), (35, 'Forester'), (35, 'Legacy'), (35, 'Outback'), (36, 'Model 3'), (36, 'Model S'), (36, 'Model X'), (36, 'Roadster'), (37, '86'), (37, 'Camry'), (37, 'Corolla'), (37, '4Runner'), (37, 'Celica'), (37, 'Echo'), (37, 'Highlander'), (37, 'Matrix'), (37, 'MR2'), (37, 'Prius'), (37, 'RAV4'), (37, 'Sienna'), (37, 'Tacoma'), (37, 'Tundra'), (37, 'Yaris'), (38, 'Beetle'), (38, 'Cabriolet'), (38, 'Golf'), (38, 'GTI'), (38, 'GLI'), (38, 'Eos'), (38, 'Jetta'), (38, 'Passat'), (38, 'Tiguan'), (38, 'Touareg'), (39, '240'), (39, '740'), (39, 'C30'), (39, 'C70'), (39, 'S40'), (39, 'S70'), (39, 'V70'), (39, 'V90');

-- INSERT INTO cars (condition, type, seller_type, exterior_colour, year, make, model, location) VALUES ( 'Used', 'Car', 'Private', 'Silver', '2000', 'Honda', 'S2000', 'M6H0C2'), ( 'New', 'Car', 'Dealer', 'Red', '2020', 'Ferrari', '488', 'M9T8H1'), ( 'Used', 'Crossover', 'Private', 'White', '2017', 'Toyota', 'Venza', 'M4D7P1');

-- INSERT INTO car_images (car_id, image) VALUES ( 1, 's2000_image.jpg'), ( 2, '488_image.jpg'), ( 3, 'venza_image.jpg');

-- INSERT INTO listing (car_id, user_id, image_id, is_sold, price, kms, body_type, drivetrain, transmission, engine_size, engine_aspiration, engine_cylinders, doors, with_photos, other_options) VALUES ( 1, 1, 1, FALSE, 1500000, 150000, 'Convertible', 'FR', '6-speed Manual', '2.0L', 'NA', '4-inline', 2, TRUE, 'Crappy car, don''t buy it!!'), ( 2, 3, 2, FALSE, 40000000, 50, 'Supercar', 'MR', '7-speed Automatic', '3.9L', 'Twin-Turbo', 'V8', 2, TRUE, 'It will get you ladies, or break your wallet. Probably both!!'), ( 3, 2, 3, FALSE, 2300000, 80750, 'Crossover', 'AWD', '6-speed Automatic', '2.7L', 'NA', '4-inline', 5, TRUE, 'It drifts in the snow!!');