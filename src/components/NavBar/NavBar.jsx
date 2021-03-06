/* import CartWidget from '../CartWidget' */
import bike from '../../bike.svg';
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Offcanvas from 'react-bootstrap/Offcanvas';

export const NavBar = () => {
  return (
    

    <Navbar bg="dark" expand={false} variant='dark'>
      <Container fluid>
        <Navbar.Brand href="./"><img src={bike} alt="BikeLogo" className='mainLogo' width={'50px'}/></Navbar.Brand>
          <CartWidget/>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas 
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          bg='dark'
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">BikesForEveryone</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link to="./">Inicio</Link>
              <Link to='/productos'>Todo</Link>
              <Link to='/productos/Bikes'>Bicicletas</Link>
              <Link to='/productos/Training'>Entrenamiento</Link>
              <Link to='/productos/Maintenance'>Mantenimiento</Link>
              <Link to='/productos/Spares'>Refacciones</Link>
              <Link to='/contacto'>Contacto</Link>
              <Link to='/form'>Login</Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>

  )
}


{/* <div className='masthead mb-auto'>

      <div className='menuBar'>
        <ul >
          <img src={bike} alt="BikeLogo" srcSet="" className='mainLogo' width={'50px'}/>
          <li><Link to="./">Inicio</Link></li>
          <li><Link to="./productos">Todo</Link></li>
          <li><Link to="./productos/Bikes">Bicicletas</Link></li>
          <li><Link to="./productos/Training">Entrenamiento</Link></li>
          <li><Link to="./productos/Maintenance">Mantenimiento</Link></li>
          <li><Link to="./productos/Spares">Refacciones</Link></li>
          <li><Link to="./contacto">Contacto</Link></li>
          <li><Link to="./form">Login</Link></li>
          {// <li><Link to="./poke-api">Poke API</Link></li> 
          }
          <CartWidget/>
        </ul>
      </div>

    </div> */}