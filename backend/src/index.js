const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/menu', require('./routes/menu'))
app.use('/api/orders', require('./routes/orders'))
app.use('/api/reservations', require('./routes/reservations'))

app.get('/', (req, res) => res.json({ message: 'Zafran API running' }))

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`)
})
mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 60000,
    socketTimeoutMS: 60000,
    connectTimeoutMS: 60000,
  })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB error:', err.message))