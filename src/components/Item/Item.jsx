import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({games}) => {
  return (
    <>
        <div className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3 col-xxl-2 d-flex flex-column p-5 mx-auto item text-decoration-none">
            <img src={games.img} alt=""  className="w-100 mx-auto d-block h-100 shadow"/>
            <span className='fs-4 text-center text-dark'>{games.name}</span>
            <span className='text-end fs-5 mb-2'>${games.price}</span>
            <Link to={`/detail/${games.id}`} className='btn btn-success fw-bold'>Comprar</Link>
        </div>
    </>
  )
}

export default Item