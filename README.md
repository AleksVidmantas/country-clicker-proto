# country-clicker-proto
### This readme will eventually contain the full list of steps to start developing locally.
Required apt packages 

1. Node - `sudo apt-get install curl`
`curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -`
`sudo apt-get install nodejssudo apt-get install nodejs`
run `node -v` and `npm -v ` to verify installation
2. postgres - `sudo apt update` and `sudo apt install postgresql postgresql-contrib` then
`sudo -u postgres psql` to access psql shell.  Run the following code in that shell:
`CREATE DATABASE country-game; ` forms the database
`\c country_game;` connects to the newly formed database `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";CREATE TABLE regions (id uuid DEFAULT uuid_generate_v4(), click_count INT DEFAULT 0, is_parent BOOL DEFAULT FALSE);CREATE TABLE faction (id uuid DEFAULT uuid_generate_v4(), name VARCHAR(20));CREATE TABLE user_performance (id uuid DEFAULT uuid_generate_v4(), clicks_attk INT DEFAULT 0, clicks_dfnd INT DEFAULT 0);
`    
    1. The tables section by section are  
        1. regions - `CREATE TABLE regions (id uuid DEFAULT uuid_generate_v4(), click_count INT DEFAULT 0, is_parent BOOL DEFAULT FALSE);`
        2. faction - `CREATE TABLE faction (id uuid DEFAULT uuid_generate_v4(), name VARCHAR(20));`
        3. user_performance `CREATE TABLE user_performance (id uuid DEFAULT uuid_generate_v4(), clicks_attk INT DEFAULT 0, clicks_dfnd INT DEFAULT 0);`
        
        
### Setting up
`npm i express pg` installs express and postgres plugins

 sudo -u postgres psql -c "ALTER USER postgres WITH PASSWORD 'aem6443'" -d country_game
