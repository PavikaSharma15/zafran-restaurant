const router = require('express').Router()

const menuItems = {
  Indian: [
    { name: 'Dal Makhani', desc: 'Black lentils slow-cooked overnight', price: 850, cuisine: 'Indian' },
    { name: 'Lamb Rogan Josh', desc: 'Kashmiri braised lamb', price: 1450, cuisine: 'Indian' },
    { name: 'Paneer Makhani', desc: 'Cottage cheese in velvety tomato gravy', price: 750, cuisine: 'Indian' },
    { name: 'Biryani Nizami', desc: 'Aged basmati with saffron', price: 1200, cuisine: 'Indian' },
  ],
  Continental: [
    { name: 'Truffle Risotto', desc: 'Arborio rice with black truffle', price: 1600, cuisine: 'Continental' },
    { name: 'Wild Mushroom Wellington', desc: 'Mushrooms in golden puff pastry', price: 1800, cuisine: 'Continental' },
    { name: 'French Onion Soup', desc: 'Caramelised onions with gruyère', price: 850, cuisine: 'Continental' },
    { name: 'Spinach & Ricotta Cannelloni', desc: 'Hand-rolled pasta with ricotta', price: 1200, cuisine: 'Continental' },
  ],
  Vegetarian: [
    { name: 'Mushroom Truffle Tart', desc: 'Wild mushrooms in buttery pastry', price: 1100, cuisine: 'Vegetarian' },
    { name: 'Burrata & Heirloom Tomato', desc: 'Fresh burrata with aged balsamic', price: 950, cuisine: 'Vegetarian' },
    { name: 'Saag Paneer Royal', desc: 'Cottage cheese in spinach gravy', price: 750, cuisine: 'Vegetarian' },
    { name: 'Mezze Platter', desc: 'Hummus, baba ganoush and warm pita', price: 850, cuisine: 'Vegetarian' },
  ]
}

router.get('/', (req, res) => res.json(menuItems))

module.exports = router