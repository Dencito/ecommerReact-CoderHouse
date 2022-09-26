import React, { useState, useContext } from 'react'

const CartContext = React.createContext([]);

export const useCartContext = ()=> useContext(CartContext);


const CartProvider = ({children}) => {

  const [cart, setCart] = useState([]);

const addGame = (item, qty) => {

  if(isInCart(item.id)){
    setCart(cart.map(product => {
      return product.id === item.id ? {...product, qty: product.qty + qty} : product
    }));
    } else {
      setCart([...cart, {...item, qty}]);
    }
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