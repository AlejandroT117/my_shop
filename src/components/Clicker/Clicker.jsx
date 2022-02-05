import {Button} from '../button/Button'
import {useState, useEffect} from 'react'

export const Clicker =()=>{
  let [clicks, setClicks] = useState(0)

  const aumenta = ()=>{
    setClicks(clicks+1)
    console.log(clicks)
  }  


  useEffect(()=>{
  console.log('Clicker montado')
    
  }, [])

  return (
    <>
      <Button click={aumenta} text='click me!'/>
      <p>Clicks: {clicks}</p>
    </>
  )
}

