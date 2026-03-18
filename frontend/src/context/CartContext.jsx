import { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.name === item.name)
      if (existing) {
        return prev.map(i => i.name === item.name ? { ...i, qty: i.qty + 1 } : i)
      }
      return [...prev, { ...item, qty: 1, id: Date.now() }]
    })
  }

  const updateQty = (id, delta) => {
    setCartItems(prev =>
      prev.map(item => item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item)
         .filter(item => item.qty > 0)
    )
  }

  const clearCart = () => setCartItems([])

  const totalItems = cartItems.reduce((sum, item) => sum + item.qty, 0)

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQty, clearCart, totalItems }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}