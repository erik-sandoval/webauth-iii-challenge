const express = require('express');
const router = express.Router();

const Users = require('./auth-model');

router.get('/', (req, res) => {
  Users.grab()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;