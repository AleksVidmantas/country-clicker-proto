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
    bcrypt.hash(request.body.password, 10, function(err, hash) {
        if (err) {
            response.status(500).end();
        }
        db.insertUser(request.body.username, hash);
    });
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
