import React from 'react'
/* import ItemCount from './ItemCount' */

const Item = (props) => {
  return (
    <>
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-2 d-flex flex-column p-5 mx-auto item">
            <img src={props.img} alt=""  className="w-100 mx-auto d-block h-100 shadow"/>
            <span className='fs-4 text-center'>{props.name}</span>
            <span className='text-end fs-5 mb-2'>${props.precio}</span>
            <a href='/prueba' className='btn btn-success fw-bold'>Comprar</a>
        </div>
    </>
  )
}

export default Item