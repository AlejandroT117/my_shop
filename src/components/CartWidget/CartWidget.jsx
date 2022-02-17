import { useContext } from 'react'
import { AiOutlineShoppingCart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { CartProvider } from '../../context/MiContext'
import { CartContext } from "../../context/MiContext";

export const CartWidget =()=>{

  
  const {cantidadCart} = useContext(CartContext)

  return (
    <>
      <Link cart='cart-widget' to='/cart'>
        <AiOutlineShoppingCart/>{cantidadCart()}
      </Link>
    </>
  )

}