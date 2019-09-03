# country-clicker-proto
### This readme will eventually contain the full list of steps to start developing locally.
Required apt packages 

1. Node - `sudo apt-get install curl`
`curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -`
`sudo apt-get install nodejssudo apt-get install nodejs`
run `node -v` and `npm -v ` to verify installation
2. postgres - `sudo apt update` and `sudo apt install postgresql postgresql-contrib` then
`sudo -u postgres psql` to access psql shell.  Run the following code in that shell:
`CREATE DATABASE country-game; \c country_game;CREATE EXTENSION IF NOT EXISTS "uuid-ossp";CREATE TABLE regions (id uuid DEFAULT uuid_generate_v4(), click_count INT DEFAULT 0, is_parent BOOL DEFAULT FALSE);CREATE TABLE faction (id uuid DEFAULT uuid_generate_v4(), name VARCHAR(20));`    
    1. The tables section by section are  
        1. regions - `CREATE TABLE regions (id uuid DEFAULT uuid_generate_v4(), click_count INT DEFAULT 0, is_parent BOOL DEFAULT FALSE);`
        2. faction - `CREATE TABLE faction (id uuid DEFAULT uuid_generate_v4(), name VARCHAR(20));`
IGNORE ANYTHING AFTER WIP
Node, postgres, npm 



`    sudo apt update
    sudo apt install postgresql postgresql-contrib
`   
sudo -u postgres psql to access psql shell
 sudo -u postgres createdb country
 
 in postgres shell
 `CREATE DATABASE country_game;
 \c country_game;
 CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE regions (id uuid DEFAULT uuid_generate_v4(), click_count INT DEFAULT 0, is_parent BOOL DEFAULT FALSE); 

\`

CREATE TABLE faction (id uuid DEFAULT uuid_generate_v4(), name VARCHAR(20));
1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.
