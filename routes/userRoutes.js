const router = require('express').Router();
const User = require('../models/User');

router.get('/', (req, res)=> {
    User.findById()
        .then(users => res.json(users))
        .catch(err=> res.status(400).json(`Error: ${err}`));
});

router.post('/add', (req, res)=> {
    const userName = req.body.username;
    const password = req.body.password;

    const userNew = new User({
        username: userName,
        password: password 
    });

    userNew.save()
        .then(()=> res.json('User added'))
        .catch(err => res.status(400).json('Error:'+err));
})


module.exports = router