import React from 'react'
import ItemCount from './ItemCount'

const ItemDetailsContainer = (props) => {
    const onAdd = (contador)=> {
        console.log('me agregue al carrito')
        if(contador>=1){
          contador === 1 ? alert(`${contador} producto añadido del juego ${props.name}, precio Total: $${contador*props.precio}`) : alert(`${contador} productos añadidos del juego ${props.name}, precio Total: $${contador*props.precio}`)
        }
        }
  return (
    <>
        <h1>Detalles prueba</h1>
        
        <div className="col-12 col-sm-8 col-md-4 col-lg-4 col-xl-3 col-xxl-2 d-flex flex-column p-5 mx-auto item">
            <img src={props.img} alt=""  className="w-100 mx-auto d-block h-100 shadow"/>
            <span className='fs-4 text-center'>{props.name}</span>
            <span className='text-end fs-5'>${props.precio}</span>
            <ItemCount stock={15} initial={0} onAdd={onAdd}/>
            <a href='/prueba' className='btn btn-success fw-bold'>Comprar</a>
        </div>
    </>
  )
}

export default ItemDetailsContainer