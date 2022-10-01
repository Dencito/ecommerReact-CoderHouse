import React, {useState , useEffect} from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

import { getFirestore, doc, getDoc } from 'firebase/firestore'

const ItemDetailContainer = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true)
  const {detailId} = useParams();

  useEffect(()=>{
    const queryDb = getFirestore();
    const queryDoc = doc(queryDb, 'Products', detailId );
    getDoc(queryDoc)
    .then(res => setData({id: res.id, ...res.data()}))
    .then(res => setLoading(false))
  },[detailId])

  return (
      <>
      {
        loading ?
        <h3 className='ms-3 mt-5 pt-5'>Cargando detalles del juego...</h3>
        :
        <ItemDetail data={data}/>
      }
    </>
  )
}

export default ItemDetailContainer