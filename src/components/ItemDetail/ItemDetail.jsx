import { useState, useContext } from "react";
import { CartContext } from "../../context/MiContext";

import {Contenedor} from '../Container/Container'
import { ItemCount } from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";


export const ItemDetail = ({id, nombre, img, desc, precio, stock, categoria, descri, oferta}) => {

  const [cantidad, setCantidad] = useState(0)
  const {cart, agregarCarrito, isInCart} = useContext(CartContext)
  console.log(cart)
  
  const handleAgregar=()=>{
    if(cantidad===0) return

    if(!isInCart(id)){
      const addItem ={
        id, nombre, precio, stock, cantidad
      }
      agregarCarrito(addItem)
    }
  }

  return (
    <Contenedor>
      <div className='imgDetail'>
          <h3>{nombre}</h3>
          <img src={require(`../../img/${img}`)} alt={nombre} height='600'/>
          { oferta &&
            <p>DESCUENTO {desc}%</p>
          }
          <p>{descri}</p>
          <h5>Precio: ${precio}</h5>
      </div>
      {
        isInCart(id)?
        <>
          <Link to='/cart' className='btn btn-success my-3'> Terminar mi compra</Link>
        </>:
          <>
            <ItemCount max={stock} counter={cantidad} setCounter={setCantidad}/>

            <div>
              <button className='btn btn-success my-2' onClick={handleAgregar}> 
              Agregar al carrito
              </button>
            </div>
          </>
      }
    </Contenedor>
  )
}