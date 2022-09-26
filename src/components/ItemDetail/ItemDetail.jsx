import React, { useState } from 'react'

import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'

import { useCartContext } from '../../context/CartContext';
const ItemDetail = ({data=[]}) => {
    const [viewCart, setViewCart] = useState(false);

    const {addGame} = useCartContext();

    
    const onAdd = (qty)=> {
        console.log(parseInt(qty)=== 1 ? `compraste ${qty} unidad de ${data.name}, Su total es: $${qty*data.price}`: `compraste ${qty} unidades de ${data.name}, Su total es: $${qty*data.price}`)
        setViewCart(true);
        addGame(data, qty)
    }
  return (
    <div className='container pt-5 mb-5 pb-5'>
        <div className="row mt-5 pt-4">
            <h1 className='pt-5 text-center mb-5'>Detalle</h1>
        </div>
        <div className="row mx-auto d-flex flex-wrap">
            <div className="col-1 mx-auto">
                <img src={data.img} alt="" />
            </div>
            <div className="col-6 d-flex flex-column mx-auto p-5">
                <p>{data.description}</p>
                <p className='mb-5 fs-4'>${data.price}</p>
                <span>Tiene {data.stock} productos disponibles</span>
                <div className="col mx-auto">
                {
                    viewCart
                    ? <Link to='/cart' className='btn btn-success'>Ver tu carrito</Link>
                    : <ItemCount initial={1} stock={data.stock} onAdd={onAdd}/>
                }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail