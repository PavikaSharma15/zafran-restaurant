const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  items: [{
    name: String,
    price: Number,
    qty: Number,
    cuisine: String
  }],
  total: { type: Number, required: true },
  status: { type: String, default: 'received', enum: ['received', 'preparing', 'ready', 'delivered'] }
}, { timestamps: true })

module.exports = mongoose.model('Order', orderSchema)