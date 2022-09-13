import Item from "./Item";
import { Products } from "./Products";
import { useEffect, useState } from "react";

function ItemList() {
    const [productos, setProductos] = useState([]);

    const promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(Products);
        }, 2000);
    })

    useEffect(()=>{
        promesa.then(resultado=>{setProductos(resultado)})
    })

    console.log('productos', productos)
  
    return (
    <>
      <div className="container-fluid mt-5 pt-lg-0">
        <h1 className="text-center mt-5 pt-5">Juegos</h1>
        <div className="row mx-auto">
          {productos.map((item) => (
            <Item key={item.key} name={item.name} img={item.img} precio={item.precio}/>
          ))}
        </div>
      </div>
    </>
    );
  }
  
  export default ItemList;