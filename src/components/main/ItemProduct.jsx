import React from 'react'
import ItemCount from './ItemCount'

const ItemProduct = (props) => {
    const onAdd = (contador)=> {
        console.log('me agregue al carrito')
        if(contador>=1){
          contador === 1 ? alert(`${contador} producto añadido del juego ${props.name}, precio Total: $${contador*props.precio}`) : alert(`${contador} productos añadidos del juego ${props.name}, precio Total: $${contador*props.precio}`)
        }
        }
  return (
    <>
        <div className="col-10 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-2 d-flex flex-column px-5 my-3 mx-auto">
            <img src={props.img} alt=""  className="w-100 mx-auto d-block h-100 shadow"/>
            <span className='fs-4 text-center'>{props.name}</span>
            <span className='text-end fs-5'>${props.precio}</span>
            <ItemCount stock={15} initial={0} onAdd={onAdd}/>
        </div>
    </>
  )
}

export default ItemProduct