import './Button.scss'

export const Button = ({click, text})=>{
  return <button className="buttonBlue" onClick={click}>{text}</button>
}
