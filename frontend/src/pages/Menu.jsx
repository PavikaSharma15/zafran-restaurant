import { useState } from 'react'
import './Menu.css'

const menuData = {
  Indian: [
    { name: 'Dal Makhani', desc: 'Black lentils slow-cooked overnight with cream and butter', price: '₹850', img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80' },
    { name: 'Lamb Rogan Josh', desc: 'Kashmiri braised lamb in aromatic whole spices', price: '₹1,450', img: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&q=80' },
    { name: 'Paneer Makhani', desc: 'Cottage cheese in velvety tomato and cashew gravy', price: '₹750', img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80' },
    { name: 'Biryani Nizami', desc: 'Aged basmati layered with slow-cooked meat and saffron', price: '₹1,200', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80' },
  ],
  Continental: [
    { name: 'Truffle Risotto', desc: 'Arborio rice with black truffle, aged parmesan and dry white wine', price: '₹1,600', img: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80' },
    { name: 'Wild Mushroom Wellington', desc: 'Portobello and mixed wild mushrooms in golden puff pastry', price: '₹1,800', img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80' },
    { name: 'French Onion Soup', desc: 'Slow-caramelised onions in rich broth, topped with gruyère crouton', price: '₹850', img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80' },
    { name: 'Spinach & Ricotta Cannelloni', desc: 'Hand-rolled pasta filled with ricotta, spinach and pine nuts', price: '₹1,200', img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80' },
  ],
  Vegetarian: [
    { name: 'Mushroom Truffle Tart', desc: 'Wild mushrooms and black truffle in a buttery shortcrust pastry shell', price: '₹1,100', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80' },
    { name: 'Burrata & Heirloom Tomato', desc: 'Fresh burrata with heirloom tomatoes, aged balsamic and micro basil', price: '₹950', img: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=600&q=80' },
    { name: 'Saag Paneer Royal', desc: 'Fresh cottage cheese in velvety spinach gravy with fenugreek and cream', price: '₹750', img: 'https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?w=600&q=80' },
    { name: 'Mezze Platter', desc: 'Smoked hummus, baba ganoush, stuffed grape leaves and warm pita', price: '₹850', img: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?w=600&q=80' },
  ]
}

function Menu() {
  const [activeTab, setActiveTab] = useState('Indian')

  return (
    <div className="menu-page">
      <div className="menu-header">
        <p className="eyebrow">Our Offerings</p>
        <h1 className="menu-title">The Menu</h1>
        <div className="gold-line center" />
        <p className="menu-subtitle">A curated selection celebrating three great culinary traditions</p>
      </div>

      <div className="menu-tabs">
        {Object.keys(menuData).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`menu-tab ${activeTab === tab ? 'active' : 'inactive'}`}
          >{tab}</button>
        ))}
      </div>

      <div className="menu-grid">
        {menuData[activeTab].map((item, i) => (
          <div key={i} className="menu-card">
            <div className="menu-card-img-wrap">
              <img src={item.img} alt={item.name} className="menu-card-img" />
              <div className="menu-card-img-overlay" />
            </div>
            <div className="menu-card-body">
              <div className="menu-card-top">
                <h3 className="menu-item-name">{item.name}</h3>
                <span className="menu-item-price">{item.price}</span>
              </div>
              <p className="menu-item-desc">{item.desc}</p>
              <button className="menu-add-btn">Add to Order</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu