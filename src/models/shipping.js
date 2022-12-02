const mongoose = require('mongoose');

const shippingSchema = mongoose.Schema({
  NamaPenerima: String,
  nomorTelp: String,
  Provinsi: String,
  Kota: String,
  Kecamatan: String,
  kodePos: String,
  Alamat: String,
  //tag: {type: String, possibleValues: ['Rumah','Kantor','Lainnya']},
  //payment: {type: String, possibleValues: ['BCA','Mandiri','BNI','Alfamart','Indomaret']},
});

module.exports = mongoose.model('Shipping', shippingSchema);