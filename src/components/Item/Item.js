import {Button, Card} from "react-bootstrap"

export const Item =({id, nombre, desc, precio, img, stock})=>{

  return(
    <Card style={{with: '30%'}}>
      <Card.Img variant="top" src={img} alt={nombre}/>
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
          <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  )
}