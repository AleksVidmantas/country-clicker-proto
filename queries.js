const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'country_game',
    password: 'aem6443',
    port: 5432,
});

const insertUser = (username, encryptedPass, callback) => {
    pool.query("INSERT INTO users (username, password) VALUES ($1, $2)",
        [username, encryptedPass], callback);
}

module.exports = {
    insertUser
}
