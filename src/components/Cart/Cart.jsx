import {BsTrash} from 'react-icons/bs'
import { useState, useContext, useEffect } from "react"
import { CartContext } from "../../context/MiContext"
import { Contenedor } from "../Container/Container"
import { Link } from "react-router-dom";


export const Cart =()=>{
  const {cart, totalCart, vaciarCarrito, eliminarItem} = useContext(CartContext)

  if(cart.length === 0){
    return <div className='container my-4'>
      <h2>Tu carrito está vacío</h2>
      <Link to='/' className='btn btn-primary'>Volver</Link>
      
    </div>
  }
  return (
    <Contenedor>
      <h1>Tu compra</h1>
      <hr/>

      {
        cart.map((item)=>(
          <div key={item.id}>
            <h4>Nombre: {item.nombre}</h4>
            <p>Cantidad: {item.cantidad}</p>
            <p>Precio: {item.precio}</p> 
            
            <button onClick={()=> eliminarItem(item.id)} className="btn btn-danger"><BsTrash/></button>           
          </div>
        ))
      }

      <hr/>
      <h2>Total: ${totalCart()}</h2>

      <div className="my-2">
        <button className="btn btn-danger mx-3" onClick={vaciarCarrito}>
          Vaciar Carrito
        </button>
        <Link to='/checkout' className='btn btn-success mx-3'> Comprar
        </Link>

      </div>

    </Contenedor>
  )
}
