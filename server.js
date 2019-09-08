const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const users = require('./endpoints/users');

app.use(bodyParser.json()); //for reading requests
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

verbose = true;


app.map = (a, route) => {
    route = route || '';
    for (var key in a) {
        switch (typeof a[key]) {
            // { '/path': { ... }}
            case 'object':
                app.map(a[key], route + key);
                break;
            // get: function(){ ... }
            case 'function':
                if (verbose) console.log('%s %s', key, route);
                app[key](route, a[key]);
                break;
        }
    }
};

app.map({
    '/users': users
});

app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
