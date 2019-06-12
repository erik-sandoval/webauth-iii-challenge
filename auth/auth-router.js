const express = require('express');
const router = express.Router();

const User = require('');

router.post('/register', (req, res) => {

  User.createUser(req.body)
    .then(user => {
      res.status(200).json({ message: 'user successfully created' });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post('/login', (req,res) => {

})

module.exports = router;
