const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'country_game',
    password: 'aem6443',
    port: 5432,
});

const insertUser = (username, encryptedPass, callback) => {
    pool.query("INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username",
        [username, encryptedPass], callback);
};

const getUser = (username, callback) => {
    pool.query("SELECT * FROM users WHERE username=$1", [username], callback);
};

const deleteUser = (username, callback) => {
    pool.query("DELETE FROM users WHERE username=$1", [username], callback);
}

module.exports = {
    insertUser,
    getUser,
    deleteUser
};
