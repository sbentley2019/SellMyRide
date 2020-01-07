# SellMyRide
LHL final project - automotive classifieds app

### Building your database

resources: 

https://linux4one.com/how-to-install-postgresql-on-linux-mint-19/
https://www.tutorialspoint.com/postgresql/postgresql_create_database.htm
https://www.tutorialspoint.com/postgresql/postgresql_drop_database.htm
https://www.tutorialspoint.com/postgresql/postgresql_select_database.htm
https://chartio.com/resources/tutorials/how-to-change-a-user-to-superuser-in-postgresql/
https://github.com/lighthouse-labs/scheduler-api


--------------------------------------------------------------------------------------------------------------------------

step 1 - install Postgresql in your terminal

First update apt package manager index typing following command:



sudo apt update



Now run following command to install PostgreSQL with -contrib package which adds additional features and functionalities:



sudo apt install postgresql postgresql-contrib

------------------------------------------------------------------------------------------------------------------------------

step 2 - login into Postgresql


You can log in to PostgreSQL using below command:


sudo su - postgres


psql


To exit from here type following in the terminal:


\q

------------------------------------------------------------------------------------------------------------

step 3 - Once logged in, create a database (also drop a database)

command for creating a database:


CREATE DATABASE sellmyride;


Here is an example ----


postgres=# CREATE DATABASE sellmyride;
postgres-# 


If you need to drop the database, here is the command

DROP DATABASE [ IF EXISTS ] name


Here is an example -----


postgres=# DROP DATABASE sellmyride;
postgres-# 

---------------------------------------------------------------------------------------------------------------------

step 4 - While inside the psql terminal, change the password for postgres

\password postgres

then you will be asked to input the new password twice, I recommend using the word password

----------------------------------------------------------------------------------------------------

  step 5 - loading tables to your database

  to see all databases enter the command \l;

  to select a database enter the command \c testdb;
  (testdb is a placeholder database)

  inside the scheduler-api, use the .env.example to create a new .env.development file and copy and paste the following code

  PGHOST=localhost
  PGUSER=postgres
  PGDATABASE=sellmyride
  PGPASSWORD=password
  PGPORT=5432


  start the server ->  npm start 


  now to create the tables and seed them

  terminal:

  curl http://localhost:8001/api/debug/reset

  or website:

  http://localhost:8001/api/debug/reset

