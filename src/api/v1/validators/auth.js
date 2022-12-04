const joi = require('joi');

module.exports = {
  register: {
    body: {
      email: joi.string().email().required(),
      full_name: joi.string().min(1).max(100).required(),
      user_name: joi.string().min(1).max(15).required(),
      phone_no: joi.string().required(),
      password: joi.string().min(3).max(32).required(),
    },
  },

  login: {
    body: {
      email: joi.string().email().required(),
      password: joi.string().required(),
    },
  },

  Shipping: {
    body: {
      NamaPenerima: joi.string().min(1).max(32).required(),
      nomorTelp: joi.string().min(1).max(32).required(),
      Provinsi: joi.string().min(1).max(32).required(),
      Kota: joi.string().min(1).max(32).required(),
      Kecamatan: joi.string().min(1).max(32).required(),
      kodePos: joi.string().min(1).max(32),
      Alamat: joi.string().min(1).max(32).required(),
    },
  },

  reset: {
    body: {
      resetEmail: joi.string().email().required(),
    },
  },
};
