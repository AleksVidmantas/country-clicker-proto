# country-clicker-proto 
## TODO reformat bulk code into a file 
### This readme will eventually contain the full list of steps to start developing locally.
Required apt packages 

1. Node - `sudo apt-get install curl`<br />`curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -`<br />`sudo apt-get install nodejs`<br />
run `node -v` and `npm -v ` to verify installation
2. postgres - `sudo apt update` and<br />
`sudo apt install postgresql postgresql-contrib` then <br />`sudo -u postgres psql` to access psql shell.  Run the following code in that shell:<br />
`CREATE DATABASE country-game; ` forms the database <br />
`\c country_game;` connects to the newly formed database, then past the following to make the tables <br /> `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";CREATE TABLE regions (id uuid DEFAULT uuid_generate_v4(), click_count INT DEFAULT 0, is_parent BOOL DEFAULT FALSE);CREATE TABLE faction (id uuid DEFAULT uuid_generate_v4(), name VARCHAR(20));CREATE TABLE user_performance (id uuid DEFAULT uuid_generate_v4(), clicks_attk INT DEFAULT 0, clicks_dfnd INT DEFAULT 0);`
    1. The tables section by section are  
        1. regions - `CREATE TABLE regions (id uuid DEFAULT uuid_generate_v4(), click_count INT DEFAULT 0, is_parent BOOL DEFAULT FALSE);`
        2. faction - `CREATE TABLE faction (id uuid DEFAULT uuid_generate_v4(), name VARCHAR(20));`
        3. user_performance `CREATE TABLE user_performance (id uuid DEFAULT uuid_generate_v4(), clicks_attk INT DEFAULT 0, clicks_dfnd INT DEFAULT 0);`
3. Curl - if you don't have it
        
        
### Setting up
`npm i express pg` installs express and postgres plugins

 sudo -u postgres psql -c "ALTER USER postgres WITH PASSWORD 'aem6443'" -d country_game
 
