import { useContext, useState } from "react"
import { Navigate } from "react-router-dom";
import { CartContext } from "../../context/MiContext"
import { collection, addDoc, Timestamp, updateDoc, doc, getDoc, writeBatch, query, where, documentId, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { Thankyou } from "./Thankyou";
import { validar } from "./Validate";



export const Checkout =()=>{

  const {cart, totalCart, cantidadCart, vaciarCarrito} = useContext(CartContext)

  const [orderId, setOrderId] = useState(null)

  const [values, setValues] = useState({
    nombre: "",
    email: "",
    tel: ''
  });

  const generarOrden = async ()=>{
    const order = {
      comprador:values,
      items: cart,
      total: totalCart(), 
      fyh: Timestamp.fromDate(new Date())
    }

    const batch = writeBatch(db)
    const ordersRef = collection(db, 'orders')
    const productosRef = collection(db, 'productos')

    const q = query(productosRef, where(documentId(), 'in', cart.map((el)=> el.id)))

    const productos = await getDocs(q)
    const outOfStock = []

    productos.docs.forEach((dbDoc)=>{
      const item = cart.find((el)=> el.id === dbDoc.id)
            
      if(dbDoc.data().stock >= item.cantidad){
        batch.update(dbDoc.ref, {
          stock:dbDoc.data().stock - item.cantidad
        })
      }else{
        outOfStock.push(item)
      }
    })

    if(outOfStock.length ===0){
      addDoc(ordersRef, order)
        .then((res)=>{
          setOrderId(res.id)
          vaciarCarrito()
        })
      batch.commit()
    }else{

      alert('Hay items sin stock')
    }

  }

  const handleInputChange =(e)=>{
    setValues({
      ...values,
      [e.target.name]:e.target.value
    })

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    validar(values) && generarOrden()

  };

  if(orderId){
    return <Thankyou order={orderId}/>
  }

  if(cantidadCart() == 0){
    return <Navigate to="/" />
  }


  return (
    <div className="container my-5">
      <h4>CheckOut</h4>

      
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          onChange={handleInputChange}
          className="form-control my-2"
          placeholder="Tu nombre"
          value={values.nombre}
        />
        <input
          type="email"
          name="email"
          onChange={handleInputChange}
          className="form-control my-2"
          placeholder="Tu email"
          value={values.email}
        />
        <input
          type="tel"
          name="tel"
          onChange={handleInputChange}
          className="form-control my-2"
          placeholder="Tu teléfono"
          value={values.tel}
        />
        <input type="submit" value="Enviar" className="btn btn-primary" />
      </form>
    </div>
  )
}


//ad doc

/*
addDoc(ordersRef, order)
.then((res)=> {

  cart.forEach((item)=>{
    const docRef = doc(db, 'productos', item.id)
    getDoc(docRef)
      .then((dbDoc)=>{
        dbDoc.data()
        
        if(dbDoc.data.stock >= item.cantidad){
          updateDoc(docRef, {stock: dbDoc.data().stock - item.cantidad})
        }else{
          alert('Producto sin stock')
        }
      })
  })

  setOrderId(res.id)
  vaciarCarrito()
})
.catch((req)=> console.log(req))*/