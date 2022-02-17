import { useState, useEffect } from "react"
import { Button, Span } from "bootstrap"

export const ItemCount= ({max, min=0, counter, setCounter})=>{

  const handleSumar=()=>{
    counter<max && setCounter(counter+1) 
    console.log(counter)
  }
  const handleRestar=()=>{
    counter>min && setCounter(counter-1)
    console.log(counter)
  }

  useEffect(() => {  
    return () => {
      window.removeEventListener('click', handleRestar)
    }
  },)
  

  return(
    <div>
      <button type="" className="btn btn-outline-primary" onClick={handleSumar}>+</button>
      <span className="mx-3">{counter}</span>
      <button className="btn btn-primary" onClick={handleRestar}>-</button>
    </div>
  )
}