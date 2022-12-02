/* eslint-disable max-len */
const jwt = require('jsonwebtoken');

const config = require('../../../core/config')
const { Users,shipping } = require('../../../models')
const { hashPassword, comparePassword } = require('../../../helpers/crypto');

async function createUser(
  email, fullName, userName, phoneNo, password
  ) {
  const hashedPassword = await hashPassword(password);
  const newUser = new Users({
    email,
    full_name: fullName,
    user_name: userName,
    phone_no: phoneNo,
    password: hashedPassword,
      
  // password plaintext = not secure. kalau program kena hack (database bocor) 
  // passwordnya akan kebaca jelas
  });

  return newUser.save();

}

async function createShipping(
  NamaPenerima, nomorTelp, Provinsi, Kota, Kecamatan, kodePos, Alamat,
) {
  const newShipping = new shipping({
    NamaPenerima: NamaPenerima,
    nomorTelp: nomorTelp,
    Provinsi: Provinsi,
    Kota: Kota,
    Kecamatan: Kecamatan,
    kodePos: kodePos,
    Alamat: Alamat,
    //tag: tag ,
    //payment: payment,
  });

  return newShipping.save();
}

async function findByEmail(email) {
  return Users.findOne({ email }).exec();
};

async function login(email, password) {
  const user = await findByEmail(email);
  if (!user) {
    return null;
  }

  const passwordMatched = await comparePassword(password, user.password);
  return passwordMatched ? user : null;
}

async function generateToken(id) {
  const payload = { id };
  return jwt.sign(payload, config.jwtSecretKey);
}

async function findById(id) {
  return Users.findById(id);
}

module.exports = {
  createUser,
  createShipping,
  findByEmail,
  login,
  generateToken,
  findById,
};
