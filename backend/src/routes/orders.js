const router = require('express').Router()
const Order = require('../models/Order')
const auth = require('../middleware/auth')

// Place order
router.post('/', async (req, res) => {
  try {
    const { items, total } = req.body
    const order = await Order.create({ items, total })
    res.json(order)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Get all orders (admin)
router.get('/', auth, async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 })
    res.json(orders)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router