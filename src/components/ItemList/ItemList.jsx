import React from 'react'
import Item from '../Item/Item'

const ItemList = ({data=[]}) => {
  return (
    <div className='d-flex flex-wrap'>
        {data.map(game => <Item key={game.id} games={game}/>)}
    </div>
        

  )
}

export default ItemList