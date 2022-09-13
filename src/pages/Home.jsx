import React from 'react'
import NavBar from '../components/nav/NavBar'
import ItemListContainer from '../components/main/ItemListContainer'
import { BrowserRouter, Routes, Route} from "react-router-dom"

const Home = () => {
  return (
    <>
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<ItemListContainer title="Juegos"/>} />
            <Route path="/categorias" element={<ItemListContainer title="Juegos"/>} />
            <Route path="/categorias/carreras" element={<ItemListContainer title="Carreras"/>} />
            <Route path="/categorias/accion" element={<ItemListContainer title="Accion"/>} />
            <Route path="/categorias/aventuras" element={<ItemListContainer title="Aventuras"/>} />
            <Route path="/categorias/un_jugador" element={<ItemListContainer title="Solo un jugador"/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Home