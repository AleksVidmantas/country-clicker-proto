# country-clicker-proto 

### Installing required packages 

1. Node - `sudo apt-get install curl`<br />`curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -`<br />`sudo apt-get install nodejs`<br />
run `node -v` and `npm -v ` to verify installation
2. postgres - `sudo apt update` and<br />
`sudo apt install postgresql postgresql-contrib`

### Setting up
1. Clone this repo
2. Run `npm install` in the folder with `package.json`
3. `sudo -u postgres psql -f schema.sql -f seed.sql` to setup the tables and fill with initial values
4. `sudo -u postgres psql -c "ALTER USER postgres WITH PASSWORD 'aem6443'" -d country_game` - In order to allow querries.js to properly access the postgres database. 
5. `node server.js` in the folder with server.js to start the server
6. To test, access `yourip:3000/test` to test the sample `GET` method. E.G `localhost:3000/test` if hosted locally.
 
       

### POSTGRES cheat sheet
1. `\l` list databases
2. `\c database` connect to database
3. `\dt` lists all tables
4. `\d+ table` list table column information
5. `sudo psql -U postgres` login as user postgres
6. `\q` to quit
### References
1. https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8/
2. https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04
3. http://www.postgresqltutorial.com/postgresql-cheat-sheet/
 

