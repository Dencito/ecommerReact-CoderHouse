import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'

import NavBar from './components/nav/NavBar';
import CartProvider from './context/CartContext';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/detail/:detailId' element={<ItemDetailContainer/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App