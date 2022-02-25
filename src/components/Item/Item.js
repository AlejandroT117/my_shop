import {Button, Card} from "react-bootstrap"
import { Link } from "react-router-dom"

export const Item =({id, nombre, desc, precio, img, stock, oferta})=>{

  return(
    <Card>
      <Card.Img variant="top" src={require(`../../img/${img}`)} alt={nombre}/>
      <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          { oferta && <Card.Text>
              Descuento: {desc} %
          </Card.Text>}
          {
            oferta && 
            <Card.Title> EN OFERTA </Card.Title>
          }

          <Card.Text>
              Precio final: ${oferta?Math.floor(precio*(1-(desc*0.1))):precio}
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