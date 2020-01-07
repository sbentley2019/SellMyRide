# SellMyRide
LHL final project - automotive classifieds app

### Building your database

resources: 

https://linux4one.com/how-to-install-postgresql-on-linux-mint-19/
https://www.tutorialspoint.com/postgresql/postgresql_create_database.htm
https://www.tutorialspoint.com/postgresql/postgresql_drop_database.htm
https://www.tutorialspoint.com/postgresql/postgresql_select_database.htm
https://chartio.com/resources/tutorials/how-to-change-a-user-to-superuser-in-postgresql/


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


CREATE DATABASE dbname;


Here is an example ----


postgres=# CREATE DATABASE testdb;
postgres-# 


If you need to drop the database, here is the command

DROP DATABASE [ IF EXISTS ] name


Here is an example -----


postgres=# DROP DATABASE testdb;
postgres-# 

---------------------------------------------------------------------------------------------------------------------

step 4 - OPTIONAL , if you wish to change user/role from postgres to your terminal user

There are two ways. Through the terminal, or through the psql terminal.

- through the terminal:

  creating a database - >  sudo su - postgres -c "createdb test_db"
  (test_db is a database placeholder)

  creating a user - > sudo su - postgres -c "createuser test_user"
  (test_user is a user placeholder)

  passing all privileges to the new user for the newly created database. Change to psql terminal first:


  sudo -u postgres psql

  then enter the following -> grant all privileges on database test_db to test_user;
  Should see this.

  postgres=# grant all privileges on database test_db to test_user;
  GRANT

- through the psql terminal


  sudo -u postgres psql


  When inside, enter following command for existing users:


  SELECT usename FROM pg_user;


  Create a new user:


  CREATE USER librarian;

  Type this again to see the new user:


  SELECT usename FROM pg_user;


  The command \du will let you see permissions:

   \du


  The basic format of ALTER USER includes the name of the user (or ROLE) followed by a series of options to inform PostgreSQL which permissive alterations to make:


  ->      ALTER USER role_specification WITH OPTION1 OPTION2 OPTION3;


  These options range from CREATEDB, CREATEROLE, CREATEUSER, and even SUPERUSER. Additionally, most options also have a negative counterpart, informing the system that you wish to deny the user that particular permission. These option names are the same as their assignment counterpart, but are prefixed with NO (e.g. NOCREATEDB, NOCREATEROLE, NOSUPERUSER).


  ASSIGNING SUPERUSER PERMISSION

  Now that we understand the basics of creating users and using ALTER USER to modify permissions, we can quite simply use the SUPERUSER option to assign our librarian user SUPERUSER permission:

  ->      ALTER USER librarian WITH SUPERUSER;



----------------------------------------------------------------------------------------------------

  step 5 - loading tables to your database

  to see all databases enter the command \l;

  to select a database enter the command \c testdb;
  (testdb is a placeholder database)


  copy the tables from the schema and paste it into the database terminal, you can find the schema at:
  /SellMyRide/sellmyride_frontend/src/db/migrations/01_schema.sql

  then copy and paste the seeds into the database terminal, you can find the seeds at:
  /SellMyRide/sellmyride_frontend/src/db/seeds/01_seeds.sql
