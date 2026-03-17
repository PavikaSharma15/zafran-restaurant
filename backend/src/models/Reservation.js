const mongoose = require('mongoose')

const reservationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  date: { type: String, required: true },
  time: { type: String, required: true },
  guests: { type: Number, required: true },
  occasion: String,
  status: { type: String, default: 'confirmed' }
}, { timestamps: true })

module.exports = mongoose.model('Reservation', reservationSchema)