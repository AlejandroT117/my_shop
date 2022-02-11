import {Button, Card} from "react-bootstrap"
import { Link } from "react-router-dom"

export const Item =({id, nombre, desc, precio, img, stock})=>{

  return(
    <Card>
      <Card.Img variant="top" src={require(`../../img/${img}`)} alt={nombre}/>
      <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
              Descuento: {desc} %
          </Card.Text>
          <Card.Text>
              Precio: ${precio}
          </Card.Text>
          <Card.Text>
              Stock: {stock}
          </Card.Text>
          <Link to={`/detail/${id}`}>
            <Button variant="primary" >Ver más</Button>
          </Link>
          
      </Card.Body>
    </Card>
  )
}