
import React from 'react'
import { useState, useEffect } from "react"

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(parseInt(initial));

    const Add = ()=>{
        setCount(count+1)
    }

    const Reduce = ()=> {
        setCount(count-1)
    }

    useEffect(()=> {
        setCount(parseInt(initial))
    },[initial])
    if(stock>0){
        return (
            <>
                <div className="d-flex justify-content-center align-items-center mb-2">
                    <button disabled={count>=stock} onClick={()=>{Add()}} className='btn btn-primary mx-auto'>+</button>
                    <span className='bg-dark text-white px-2 btn d-inline-block'>{count}</span>
                    <button disabled={count===0} onClick={()=>{Reduce()}} className='btn btn-danger mx-auto'>-</button>
                </div>
                <button disabled={count===0} onClick={()=>{onAdd(count)}} className='btn btn-success d-inline-block mx-auto'>agregarAlCarrito</button>
            </>
          )
    }


}

export default ItemCount