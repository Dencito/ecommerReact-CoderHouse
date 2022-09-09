
import React from 'react'
import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {
    const [contador, setContador] = useState(initial);

    const sumar = ()=>{
        if(contador<stock){
            setContador(contador+1)
        }
        
    }

    const restar = ()=> {
        if(contador>initial){
            setContador(contador-1)
        }
    }

    
  return (
    <>
        <div className="contador d-flex justify-content-evenly align-items-center p-1">
            <button onClick={()=>{sumar()}} className='btn btn-primary '>+</button>
            <span className='bg-dark text-white px-2 btn d-inline-block'>{contador}</span>
            <button onClick={()=>{restar()}} className='btn btn-danger'>-</button>
        </div>
        <button onClick={()=>{onAdd(contador)}} className='btn btn-success d-inline-block mx-auto'>agregarAlCarrito</button>
    </>
  )
}

export default ItemCount