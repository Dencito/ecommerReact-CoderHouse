import React, {useState , useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

import { getFirestore, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const {detailId} = useParams();

  useEffect(()=>{
    const queryDb = getFirestore();
    const queryDoc = doc(queryDb, 'Products', detailId );
    getDoc(queryDoc)
    .then(res => setData({id: res.id, ...res.data()}))
  },[detailId])

  /* useEffect(()=>{
    const getData = new Promise(resolve => {
      setTimeout(()=>{
        resolve(Products)
      }, 300)
    });
    getData.then(res => SetData(res.find(game => game.id === parseInt(detailId))));
  }, [detailId]) */

  return (
    <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer