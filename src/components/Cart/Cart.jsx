import React from 'react'
import ItemCart from './ItemCart'
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, totalP, clear } = useCartContext();
  if (cart.length === 0) {
    return (
      <>
        <h3 className='mt-5 pt-5 text-center'>No hay Juegos para comprar 😭</h3>
        <Link to='/' className='text-center text-decoration-underline fs-4 text-dark d-block'>Comprar juegos</Link>
      </>
    )
  }
  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product= {product}/>)
      }
      <div className="d-flex justify-content-center align-items-center">
      <p className='fw-bold fs-2 text-center'>Total: ${totalP()}</p>
      <button onClick={()=>clear()} className='btn btn-danger fw-bold fs-5 text-center mb-3 py-1 ms-2'>Eliminar todo</button>
      </div>
    </>
  )
}

export default Cart