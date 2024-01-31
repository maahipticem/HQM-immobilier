const jwt = require("jsonwebtoken");

const createToken = (payload) => {
  return jwt.sign(payload, "gfsdgfdghg@fdsfsd");
};

const verifyToken = (token) => {
  return jwt.verify(token, "gfsdgfdghg@fdsfsd");
};
module.exports = { createToken, verifyToken };
