const db = require('../database/knexConfig');

module.exports = {
  createUser,
  grab
};

function createUser(user) {
  return db('users').insert(user);
}

function grab() {
  return db('users');
}
