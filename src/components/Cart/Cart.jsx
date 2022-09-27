import React from 'react'
import ItemCart from './ItemCart'
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, totalP } = useCartContext();
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
      <p>Total: ${totalP()}</p>
    </>
  )
}

export default Cart