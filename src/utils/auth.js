const jwtDecode = require('jsonwebtoken'); // For token decoding

function verifyAccessToken(accessToken) {
  try {
    const decoded = jwtDecode(accessToken, process.env.JWT_SECRET); // Use your secret key
    return decoded; // Return decoded payload if valid
  } catch (err) {
    throw new Error('Invalid access token');
  }
}

module.exports = {
  verifyAccessToken,
};
