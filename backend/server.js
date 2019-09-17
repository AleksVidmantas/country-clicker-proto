const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3000;
const config = require('./config');

const users = require('./endpoints/users');

app.use(bodyParser.json()); //for reading requests
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

/*
 * JWT authorization middleware
 *
 * If the JWT is present in the headers, this middleware will decode the JWT
 * and set req.user accordingly
 */
app.use((req, res, next) => {
    token = req.get("authorization");
    jwt.verify(token, config.secretKey, function(err, decoded) {
        if (decoded) {req.user = decoded.user};
    });
    next();
});

verbose = true;


app.map = (a, route) => {
    route = route || '';
    for (var key in a) {
        if (typeof a[key] == "object" && !Array.isArray(a[key])) {
            app.map(a[key], route + key);
        } else {
            if (verbose) console.log('%s %s', key, route);
            app[key](route, a[key]);
        }
    }
};


// url map
app.map({
    '/users': users
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
