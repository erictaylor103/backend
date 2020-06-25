const bcrypt = require('bcryptjs');
const { insert, findUsername } = require('../models/users');
const generateToken = require('../middleware/generateToken');

module.exports = {
  register,
  login
};

async function register(req, res) {
  try {
    const { firstname, lastname, username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const [user] = await insert({
      firstname,
      lastname,
      email,
      username,
      password: hashedPassword
    });
    const token = generateToken({
      user,
      username,
      email
    });
    return res.status(201).json({
      message: 'user created successfully',
      user,
      username,
      firstname,
      lastname,
      email,
      token

    });
  } catch (error) {
    if (error.code === '23505' && error.detail.includes('email')) {
      return res
        .status(400)
        .json({ error: 'email has already been registered' });
    }
    if (error.code === '23505' && error.detail.includes('username')) {
      return res
        .status(400)
        .json({
          error: 'username is not available, please use a different username'
        });
    }
    res.status(500).json({
      error: 'could not create user'
    });
  }
}

async function login(req, res) {
  try {
    let { username, password } = req.body;
    const user = await findUsername(username).first();
    
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      delete user.password
      res.status(200).json({
        message: `Welcome ${user.username}`,
        user,
        token
      });
    } else {
      res
        .status(400)
        .json({ message: 'Invalid details, please input a username or email' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
