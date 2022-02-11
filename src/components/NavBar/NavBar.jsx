import CartWidget from '../CartWidget'
import bike from '../../bike.svg';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <>
      <div className='mainHeader'>
        <img src={bike} alt="BikeLogo" srcSet="" className='mainLogo'/>

        <CartWidget height='50' className='cartLogo'/>
      </div>

      <div className='menuBar'>
        <ul >
          <li><Link to="./">Inicio</Link></li>
          <li><Link to="./productos">Productos</Link></li>
          <li><Link to="./productos/Geeks">Geeks</Link></li>
          <li><Link to="./productos/Audio">Audio</Link></li>
          <li><Link to="./poke-api">Pokemon-Api</Link></li>
          <li><Link to="./contacto">Contacto</Link></li>
        </ul>
      </div>

    </>
  )
}

export default NavBar;