const router = require('express').Router()
const Reservation = require('../models/Reservation')

// Create reservation
router.post('/', async (req, res) => {
  try {
    const reservation = await Reservation.create(req.body)
    res.json(reservation)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Get all reservations (admin)
router.get('/', async (req, res) => {
  try {
    const reservations = await Reservation.find().sort({ createdAt: -1 })
    res.json(reservations)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router