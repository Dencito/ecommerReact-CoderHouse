import React from 'react'
import { useCartContext } from '../../context/CartContext'

const ItemCart = ({ product }) => {
    const { removeGame } = useCartContext();
  return (
    <div className='container-fluid'>
        <div className="row mt-5 pt-5">
            <div className="col-1 mx-auto">
                <img src={product.img} alt="" className='w-100'/>
            </div>
            <div className="col-10">
                <h2>Titulo: {product.name}</h2>
                <span>Cantidad: {product.qty}</span>
                <p>Precio c/u: ${product.price}</p>
                <h5>SubTotal: ${product.qty * product.price}</h5>
                <button onClick={()=>removeGame(product.id)}>Eliminar</button>
            </div>
        </div>
    </div>
  )
}

export default ItemCart