import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const {categoryId} = useParams();
    const [loading, setLoading] = useState(true)
    
  useEffect(()=>{
    const queryDb = getFirestore();
    const queryCollection = collection(queryDb, 'Products');
    if(categoryId){
      const queryFilter = query(queryCollection,where('category', '==', categoryId))
      getDocs(queryFilter)
        .then(res => setData(res.docs.map(prod => ({id: prod.id, ...prod.data()}) )/* {id: res.id, ...res.data()} */))
        .then(res => setLoading(false))
    } else {
      getDocs(queryCollection)
        .then(res => setData(res.docs.map(prod => ({id: prod.id, ...prod.data()}) )/* {id: res.id, ...res.data()} */))
        .then(res => setLoading(false))
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

      {
        loading ?
         <h3 className='ms-3'>Cargando juegos...</h3>
         :
         <ItemList data={data} />
      }
    </>
  );
}

export default ItemListContainer;