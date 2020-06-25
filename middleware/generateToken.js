const jwt = require('jsonwebtoken');


require('dotenv').config();

const jwtKey = process.env.JWT_SECRET;

function generateToken(user) {
    console.log({"user": user});
    console.log({"KEY": jwtKey});
    console.log({"User Id": user.user})
    
    
  const payload = {
    id: user.user,
    username: user.username,
    email: user.email
  };
  const options = {
    expiresIn: '1d'
  };

  return jwt.sign(payload, jwtKey, options);
}

module.exports = generateToken;
