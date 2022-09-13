import React from 'react';
import NavBar from '../components/nav/NavBar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
/* import ItemDetailsContainer from '../components/main/ItemDetailsContainer'; */
import ItemListContainer from '../components/main/ItemListContainer';

const Home = () => {
  return (
    <>
    <BrowserRouter>
        <NavBar/>
        <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/categorias/:id" element={<ItemListContainer/>} />
{/*             <Route path="/categorias/aventuras" element={<ItemList title="Aventuras"/>} />
            <Route path="/categorias/accion" element={<ItemList title="Accion"/>} />
            <Route path="/categorias/un_jugador" element={<ItemList title="Solo un jugador"/>} /> */}
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Home