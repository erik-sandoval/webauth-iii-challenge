const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../secret/secretKey');

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
      res.status(200).json({ message: 'user successfully created' });
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post('/login', (req, res) => {
  User.login(req.body.username)
    .then(user => {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ message: `welcome ${user.username}`, token });
      } else {
        res.status(400).json({ message: 'invalid credentials' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

function generateToken(user) {
  const payload = {
    id: user.id,
    username: user.username,
    department: user.department
  };

  const options = {
    expiresIn: '1d'
  };

  return jwt.sign(payload, secret.secretKey, options);
}

module.exports = router;
