import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const {categoryId} = useParams();

    
  useEffect(()=>{
    const queryDb = getFirestore();
    const queryCollection = collection(queryDb, 'Products');
    if(categoryId){
      const queryFilter = query(queryCollection,where('category', '==', categoryId))
      getDocs(queryFilter)
        .then(res => setData(res.docs.map(prod => ({id: prod.id, ...prod.data()}) )/* {id: res.id, ...res.data()} */))
    } else {
      getDocs(queryCollection)
        .then(res => setData(res.docs.map(prod => ({id: prod.id, ...prod.data()}) )/* {id: res.id, ...res.data()} */))
    }
  },[categoryId])
/*     useEffect(()=>{
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
    },[categoryId]) */

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