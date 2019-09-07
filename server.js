const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const app = express();
const port = 3000;
const db = require('./queries');

app.use(bodyParser.json()); //for reading requests
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
});

app.post('/users', (request, response) => {
    if (!request.body.username) {
        response.status(400).json({"err": "Missing username field."});
    }
    if (!request.body.password) {
        response.status(400).json({"err": "Missing password field."});
    }

    bcrypt.hash(request.body.password, 10, function(err, hash) {
        if (err) {
            response.status(500).end();
        }
        db.insertUser(request.body.username, hash, (err, res) => {
            if (err && err.code == '23505') {
                response.status(400).json({"err": "Username has already been taken"});
            } else {
                response.status(201).json(res.rows[0]);
            }
        });
    });
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
