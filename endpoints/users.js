const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../queries');
const config = require('../config');
const { check, validationResult } = require('express-validator');

create = [
    check("username")
    .isLength({ min: 5, max: 30 }).withMessage("Length must be between 5 and 30"),

    check("password")
    .isLength({ min: 10, max: 100 }).withMessage("Length must be between 10 and 100")
    .matches(/\d/).withMessage("Must contain a digit")
    .matches(/[$-/:-?{-~!"^_`\[\]]/).withMessage("Must contain a symbol")
    .not().isLowercase().withMessage("Must contain an uppercase letter"),

    (request, response) => {
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
            return response.status(422).json({ errors: errors.array() });
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
    }
];

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
                    }, config.secretKey, { expiresIn: config.jwtExpiration });
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
