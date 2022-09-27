import React from 'react';
import { useCartContext } from '../../context/CartContext';

const cartWidget = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks    -- nose pero con esta linea funciona bien ayudaaa ajaja :c
  const {totalProducts} = useCartContext();

  return (
    <>
      <i className='fa fa-shopping-bag fs-2  me-1'></i>
      <span className="fs-5 fw-bold me-2">{totalProducts() || ''}</span>
    </>
  )
}

export default cartWidget