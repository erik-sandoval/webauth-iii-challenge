const express = require('express');
const router = express.Router();
const verifyLogin = require('../auth/verifyLogin')

const Users = require('./users-model');

router.get('/', verifyLogin, (req, res) => {
  Users.grab()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
