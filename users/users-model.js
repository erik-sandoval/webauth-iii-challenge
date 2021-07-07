const db = require('../database/knexConfig');

module.exports = {
  createUser,
  grab,
  login
};

function createUser(user) {
  return db('users').insert(user);
}

function grab() {
  return db('users');
}

function login(username) {
  return db('users')
    .where({username})
    .first();
}
