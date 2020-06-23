const db = require('../database/dbConfig');

module.exports = {
  insert,
  findUsername
};

function insert(user) {
  return db('users')
    .insert(user)
    .returning(['id', 'firstname', 'lastname', 'username', 'email']);
}

function findUsername(username) {
  return db('users')
    .where({ username: username });    
}
