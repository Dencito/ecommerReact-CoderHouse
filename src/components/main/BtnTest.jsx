import React from 'react'

const BtnTest = (props) => {
    function saludar(nombre){
        alert(`Hola ${nombre}`)
    }
  return (
    <>  
        <button onClick={()=>{saludar(props.nombre)}}>Saludar</button>
    </>
  )
}

export default BtnTest