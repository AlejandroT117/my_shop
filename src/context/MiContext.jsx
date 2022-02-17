import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider =({children})=>{
  const [cart, setCart] = useState([]);

  const agregarCarrito = (item) => {
    setCart([...cart, item]);
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const cantidadCart = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const totalCart = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);
  };

  const vaciarCarrito =()=>{
    setCart([])
  }

  const eliminarItem = (id)=>{
    setCart(cart.filter((el)=>el.id!== id))
  }

  return (
    <CartContext.Provider value={{ cart, agregarCarrito, isInCart, cantidadCart, totalCart, vaciarCarrito, eliminarItem }}>
      {children}
      
    </CartContext.Provider>
  )

}