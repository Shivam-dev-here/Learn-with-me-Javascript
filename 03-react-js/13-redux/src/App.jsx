import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from "./components/Navbar"

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/counter/counterSlice'

function App() {
  const count = useSelector(state => state.counter.value) //take the count value herer
  const dispatch = useDispatch()
  return (
    <>
    <Navbar />
    <div>
      <button onClick={()=>{dispatch(decrement())}}>-</button>
      Current Count is {count}
      <button onClick={()=>dispatch(increment())}>+</button>
      <button onClick={()=>dispatch(incrementByAmount(6))}>+6</button>
    </div>
    </>
  )
}

export default App
