import CartWidget from '../CartWidget'
import bike from '../../bike.svg';


const NavBar = () => {
  return (
    <>
      <div className='mainHeader'>
        <img src={bike} alt="BikeLogo" srcSet="" className='mainLogo'/>

        <CartWidget height='50' className='cartLogo'/>
      </div>

      <div className='menuBar'>
        <ul >
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Bicicletas de ruta</a></li>
          <li><a href="#">Bicicletas de montaña</a></li>
          <li><a href="#">Bicicletas urbanas</a></li>
          <li><a href="#">Rodillos</a></li>
          <li><a href="#">Refacciones</a></li>
        </ul>
      </div>

    </>
  )
}

export default NavBar;