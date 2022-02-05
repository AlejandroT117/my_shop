import {Contenedor} from '../Container/Container'
import { Item } from '../Item/Item'

export const ItemList = ({productos}) =>{
  return (
    <Contenedor>
      <h2>Productos</h2>
      <hr/>
      <div className='row ItemList'>
        {productos.map((el)=> <Item key={el.id} {...el}/>)}
      </div>
    </Contenedor>
  )
}