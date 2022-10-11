import React from 'react'
import ItemCart from './ItemCart'
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { doc, serverTimestamp ,addDoc, collection, getFirestore,updateDoc, increment } from 'firebase/firestore'

const Cart = () => {
  const { cart, totalP, clear } = useCartContext();
  const order = {
    buyer: {
      name: 'Denar',
      email: 'denarpadilla.lionel@gmail.com',
      tel: 1122334455,
      address: 'av siempreviva 7..'
    },
    items: cart.map(product => ({id: product.id, name: product.name, price: product.price, qty: product.qty})),
    date: serverTimestamp(),
    total: totalP()
  }

  const generateOrder = () => {
    /* console.log(order) */
    swal("Orden generada!", "Gracias por su compra!", "success");
    const db = getFirestore()
    const ordersCollection = collection(db, 'orders')
    addDoc(ordersCollection, order)
      /* .then(({id}) => console.log(id)) */

    cart.forEach(async(item) => {
      const shopgames = doc(db, "Products", item.id);
      await updateDoc(shopgames, {
          stock: increment(-item.qty)
      });
      setTimeout(function(){
        window.location.reload ()
        window.location = '/';
    }, 600);

    
  });
  }
  if (cart.length === 0) {
    return (
      <>
        <h3 className='mt-5 pt-5 text-center'>No hay Juegos para comprar 😭</h3>
        <Link to='/' className='text-center text-decoration-underline fs-4 text-dark d-block'>Comprar juegos</Link>
      </>
    )
  }
  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product= {product}/>)
      }
      <div className="d-flex justify-content-center align-items-center">
        <button onClick={()=>generateOrder()} className='btn btn-dark fw-bold fs-5 text-center mb-3 py-1 me-2'>Generar orden</button>
        <p className='fw-bold fs-2 text-center'>Total: ${totalP()}</p>
        <button onClick={()=>clear()} className='btn btn-danger fw-bold fs-5 text-center mb-3 py-1 ms-2'>Eliminar todo</button>
      </div>
      
    </>
  )
}

export default Cart