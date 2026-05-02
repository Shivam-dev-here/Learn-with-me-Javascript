import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Shivam-dev-here")

  const handleClick = () => {
    alert("Got YOu!!!")
  }

  const handleHover = () => {
    console.log("Dont try again!!!")
  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <>

      <div className="btn1">
        <button onClick={handleClick} >Click mE</button>
      </div>

      <div className="btn2">
        <button onMouseOver={handleHover} >! HOVER &gt; Console</button>
      </div>
      {/* <input type="text" onChange={(e) => console.log(e.target.value)} /> */}

      <div className="box">
        <input type="text" value={name} onChange={handleChange}  />
      </div>

    </>
  )
}

export default App
