import React, { useState, useContext } from 'react'

const CartContext = React.createContext([]);

export const useCartContext = ()=> useContext(CartContext);


const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);

const addGame = (item, qty) => {
  let newCart;
  let product = cart.find(product => product.id === item.id);
  if(product) {
    product.qty += qty;
    newCart = [...cart];
  } else {
    product = {...item, qty: qty};
    newCart = [...cart, product];
  }
  setCart(newCart);
}

  console.log('carrito', cart)

  const clear = ()=> setCart([]);

  const isInCart = (id) => cart.find(game => game.id === id) ? true : false;

  const removeGame = (id) => setCart(cart.filter(prod => prod.id !== id));

  return (
    <CartContext.Provider value={{clear, isInCart, removeGame, addGame}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider