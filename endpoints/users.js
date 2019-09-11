const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../queries');
const config = require('../config');

create = (request, response) => {
    if (!request.body.username) {
        response.status(400).json({"err": "Missing username field."}).end();
    } else if (!request.body.password) {
        response.status(400).json({"err": "Missing password field."}).end();
    } else if (request.body.username.length < 5){
        response.status(400).json({"err": "Username must be 5 or more characters."}).end();
    } else {
        bcrypt.hash(request.body.password, 10, function(err, hash) {
            if (err) {
                response.status(500).end();
            }
            db.insertUser(request.body.username, hash, (err, res) => {
                if (err && err.code == '23505') {
                    response.status(400).json({"err": "Username has already been taken"});
                } else {
                    response.status(201).json(res.rows[0]);//changes
                }
            });
        });
    }
};

del = (request, response) => {
    if (!request.user) {
        response.status(400).json({"err": "Authorization required"});
    }

    db.deleteUser(request.user, (err, res) => {
        if (err) {
            response.status(500).end();
        } else {
            response.status(200).end();
        }
    });
}

change = (request, response) => {
    if (!request.user) {
        response.status(400).json({"err": "Authorization required"});
    }
   
    bcrypt.hash(request.body.password, 10, function(err, hash) {
        if (err){
            response.status(500).end();
        }

        db.changePassword(request.body.username, hash, (err, res)=> {
            if (err) {
                response.status(500).end();
            } else {
                response.status(200).end();
            }
        }); 



    });
};

auth = (request, response) => {
    db.getUser(request.body.username, (err, res) => {
        if (err) {
            response.status(500).end();
        } else if (!res.rows.length) {
            response.status(400).json({"err": "No user by that username."});
        } else {
            bcrypt.compare(request.body.password, res.rows[0].password, (err, res) => {
                if (res) {
                    token = jwt.sign({
                        "user": request.body.username
                    }, config.secretKey, { expiresIn: '3h' });
                    response.status(200).json({"token": token});
                } else {
                    response.status(400).json({"err": "Invalid password"});
                }
            });
        }
    });
};

stats = (request, response) => {
    db.getStats(request.params.uid, (err, res) => {
        if (err) {
            response.status(500).end();
        } else if (!res.rows.length) {
            response.status(400).json({"err": "No user by that id."});
        } else {
            response.status(200).json(res.rows[0]);
        }
    });
}

module.exports = {
    post: create,
    delete: del,
    '/auth': {
        post: auth
    },
    '/change': {
        post: change
    },
    '/:uid': {
        "/stats": {
            get: stats
        }
    }
};
