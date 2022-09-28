import React from 'react'
import { useCartContext } from '../../context/CartContext'
import '../../App.css'

const ItemCart = ({ product }) => {
    const { removeGame } = useCartContext();
  return (
    <div className='container-fluid'>
        <div className="row mt-5 pt-5 d-flex">
            <div className="col-8 col-sm-4 col-md-3 col-lg-2 col-xl-1 mx-auto mx-sm-0">
                <img src={product.img} alt="" className='w-100 mx-auto'/>
            </div>
            <div className="col-12 col-sm-8 col-md-8 col-lg-9 col-xl-10 mx-auto mx-sm-0 mt-3">
                <h2>Titulo: {product.name}</h2>
                <span className='fs-5'>Cantidad: {product.qty}</span>
                <p className='fs-5'>Precio c/u: ${product.price}</p>
                <h5 className='fs-4'>SubTotal: ${product.qty * product.price}</h5>
                <button onClick={()=>removeGame(product.id)} className='border-circle-btn'>❌</button>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default ItemCart