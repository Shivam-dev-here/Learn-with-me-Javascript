import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleClick = () =>{
    alert("Got YOu!!!")
  }
  const handleHover = () =>{
    alert("Dont try again!!!")
  }


  return (
    <>
     
     <div className="btn1">
      <button onClick={handleClick} >Click mE</button>
     </div>

     <div className="btn2">
      <button onMouseOver ={handleHover} >! HOVER</button>
     </div>
     
    </>
  )
}

export default App
