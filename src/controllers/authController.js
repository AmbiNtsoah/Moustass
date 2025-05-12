const crypto = require('crypto');
const User = require('../models/userModel');

// helper hash
function hashPassword(password) {
  return crypto.createHash('sha256').update(password).digest('hex');
}

exports.signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = hashPassword(password);
    await User.create(username, email, hashedPassword);
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Signup failed' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const hashed = hashPassword(password);

  try {
    const user = await User.findByEmail(email);
    if (!user || user.password !== hashed) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    res.status(200).json({ username: user.username });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Login failed' });
  }
};
