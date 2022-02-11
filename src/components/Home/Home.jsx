import {Button} from "react-bootstrap"
import { Link } from "react-router-dom"


export const Home = ({nombre})=>{
  
  return (
    <main className="inner cover">
      <h1 className="cover-heading">Bicicletas para todos</h1>
      <p className="lead">Productos de ciclismo para todos los niveles y presupuestos</p>
      <p className="lead">
        <Link to={`/productos`}>
          <Button className="btn btn-lg btn-secondary">Ver todos los productos</Button>
        </Link>
      </p>
    </main>


  )
}