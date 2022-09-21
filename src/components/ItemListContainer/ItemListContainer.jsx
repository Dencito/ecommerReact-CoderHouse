import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import { Products } from '../DataBase/Products';
import { useParams } from 'react-router-dom';


const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const {categoryId} = useParams();
    useEffect(()=>{
        const getData = new Promise(resolve => {
            setTimeout(()=>{
                resolve(Products)
            },2000)
        });
        if(categoryId){
            getData.then(res => setData(res.filter(game => game.category === categoryId)))
        } else {
            getData.then(res => setData(res))
        }
    },[categoryId])

  return (
    <>
      <h1 className='mt-5 text-center pt-5'>
        {(() => {
          switch (categoryId) {
            case "accion":
              return "Juegos de Acción";
            case "carrera":
              return "Juegos de Carreras";
            case "aventura":
            return "Juegos de Aventura";
            case "un_jugador":
                return "Un solo jugador";
            default:
              return "Juegos";
          }
        })()}
      </h1>
      <ItemList data={data} />
    </>
  );
}

export default ItemListContainer;