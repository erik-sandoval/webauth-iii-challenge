const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const User = require('../users/users-model');

router.post('/register', (req, res) => {
  const hash = bcrypt.hashSync(req.body.password, 8);

  req.body = {
    username: req.body.username,
    password: hash,
    department: 'student'
  };

  User.createUser(req.body)
    .then(user => {
      res.status(200).json({ message: 'user successfully created', user });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
  User.login(req.body.username)
    .then(user => {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.status(200).json({ message: `welcome ${user.username}` });
      } else {
        res.status(400).json({ message: 'invalid credentials' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
