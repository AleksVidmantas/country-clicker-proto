const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'country_game',
    password: 'aem6443',
    port: 5432,
});

const test = (request, response) => {
    pool.query('SELECT * FROM faction;', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    });
}



module.exports = {
    test
}
