import React, {useState , useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { Products } from '../DataBase/Products';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const [data, SetData] = useState({});
  const {detailId} = useParams();

  useEffect(()=>{
    const getData = new Promise(resolve => {
      setTimeout(()=>{
        resolve(Products)
      }, 2000)
    });
    getData.then(res => SetData(res.find(game => game.id === parseInt(detailId))));
  }, [detailId])

  return (
    <ItemDetail data={data}/>
  )
}

export default ItemDetailContainer