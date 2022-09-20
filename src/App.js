import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react';
import NavBar from './components/nav/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/detail/:detailId' element={<ItemDetailContainer/>}/>
        </Routes>
        
        
      </BrowserRouter>
    </>
  )
}

export default App