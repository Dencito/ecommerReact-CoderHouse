import React from 'react'

const cartWidget = () => {
  return (
    <>
      <a className='ms-2 d-flex text-decoration-none text-success' href='.'>
          <i className='fa fa-shopping-bag fs-2  me-1'></i>
          <span className="fs-5 fw-bold me-2">0</span>
      </a>
    </>
  )
}

export default cartWidget