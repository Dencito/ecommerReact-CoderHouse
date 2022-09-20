import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({data=[]}) => {
    const onAdd = (qty)=> {
        console.log(`compraste ${qty} unicades`)
    }
  return (
    <div className='container mt-5 pt-5 mb-5 pb-5'>
        <div className="row mt-5 pt-4">
            <h1 className='pt-5 text-center mb-5'>Detalle</h1>
        </div>
        <div className="row mx-auto d-flex flex-wrap">
            <div className="col-1 mx-auto">
                <img src={data.img} alt="" />
            </div>
            <div className="col-6 d-flex flex-column">
                <p className='mb-5'>{data.description}</p>
                <div className="col mx-auto">
                <ItemCount initial={1} stock={data.stock} onAdd={onAdd}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ItemDetail