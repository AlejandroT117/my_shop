import {Contenedor} from '../Container/Container'
import { Item } from '../Item/Item'


export const ItemDetail = ({id, nombre, img, desc, precio, stock, categoria}) => {

    

  return (
      <div className='imgDetail'>
          <h3>{nombre}</h3>
          <img src={img} alt={nombre}/>
          <p>DESCUENTO {desc}%</p>
          <h5>Precio: ${precio}</h5>
      </div>
  )
}