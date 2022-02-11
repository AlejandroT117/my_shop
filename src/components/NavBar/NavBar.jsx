import CartWidget from '../CartWidget'
import bike from '../../bike.svg';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <div className='masthead mb-auto'>
      <div className='mainHeader'>
        <img src={bike} alt="BikeLogo" srcSet="" className='mainLogo'/>

        <CartWidget height='50' className='cartLogo'/>
      </div>

      <div className='menuBar'>
        <ul >
          <li><Link to="./">Inicio</Link></li>
          <li><Link to="./productos">Todo</Link></li>
          <li><Link to="./productos/Bikes">Bicicletas</Link></li>
          <li><Link to="./productos/Training">Entrenamiento</Link></li>
          <li><Link to="./productos/Maintenance">Mantenimiento</Link></li>
          <li><Link to="./productos/Spares">Refacciones</Link></li>
          <li><Link to="./contacto">Contacto</Link></li>
        </ul>
      </div>

    </div>
  )
}

export default NavBar;