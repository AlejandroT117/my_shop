import { useEffect } from "react";

import {Contenedor} from '../Container/Container'


export const ItemDetail = ({id, nombre, img, desc, precio, stock, categoria}) => {

    
  useEffect(() => {
    console.log(img)
  });

  return (
    <Contenedor>
      <div className='imgDetail'>
          <h3>{nombre}</h3>
          <img src={require(`../../img/${img}`)} alt={nombre} height='600'/>
          <p>DESCUENTO {desc}%</p>
          <h5>Precio: ${precio}</h5>
      </div>
    </Contenedor>
  )
}