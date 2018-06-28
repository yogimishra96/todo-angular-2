let express = require('express');
let app = express();
let jwt = require('jsonwebtoken');


app.post('/api/login', (req, res) => {

    // insert code here to actually authenticate, or fake it
    const user = { id: 3 };
    // then return a token, secret key should be an env variable
    const token = jwt.sign({ user }, 'secret_key_goes_here');
    res.json({
        message: 'Authenticated! Use this token in the "Authorization" header',
        token: token
    });
})

app.get('/api/protected', ensureToken, (req, res) => {
    // console.log(req.body.token);
    jwt.verify(req.headers['authorization'], 'secret_key_goes_here', function(err, data) {
        if (err) {
            res.send(err);
        } else res.json({
            description: 'Protected information. Congrats!'
        });
    });
})

function ensureToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    // console.log(bearerHeader);
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
}

app.listen(7898, function () {
    return console.log('this is the code here');
});