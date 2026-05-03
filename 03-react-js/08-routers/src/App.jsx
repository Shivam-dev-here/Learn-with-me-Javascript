import './App.css'

import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Contact from './components/Contact'
import About from './components/About'
import User from './components/User'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Navbar /><Home/></>
    },
    {
      path:"/Login",
      element: <><Navbar /><Login/></>
    },
    {
      path:"/About",
      element: <><Navbar /><About/></>
    },
    {
      path:"/Contact",
      element: <><Navbar /><Contact/></>
    },
    {
      path:"/User/:username",
      element: <><Navbar /><User/></>
    }
  ])

  return (
    
    <><RouterProvider router={router}/></>

  )
}

export default App
