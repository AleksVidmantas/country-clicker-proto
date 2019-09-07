const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'country_game',
    password: 'aem6443',
    port: 5432,
});

const insertUser = (username, encryptedPass) => {
    pool.query("INSERT INTO users (username, password) VALUES ($1, $2)",
        [username, encryptedPass]);
}

module.exports = {
    insertUser
}
