const argon2 = require("argon2");

const options = {
  type: argon2.argon2d,
  memoryCost: 2 ** 16,
  hashlength: 50,
};
const verify = async (hashpassword, hashed) => {
  try {
    return await argon2.verify(hashed, hashpassword, options);
  } catch (error) {
    console.error(error);
    throw new Error("SOMETHING WENT WRONG VERIFYING THE PASSWORD");
  }
};

module.exports = { verify };
