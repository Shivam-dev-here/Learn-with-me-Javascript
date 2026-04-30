import React, { useEffect } from 'react'

const Navbar = ({ color }) => {


    useEffect(() => {
        alert("Everytime render")
    })

  useEffect(() => {
    alert("You will see me each time App.jsx renders");
  }, [])

  useEffect(() => {
    alert("color changed");
  }, [color])

  useEffect(() => {
    alert("new first render of Navbar for cleanup ")
  
    return () => {
      alert("Component was unmounted")
    }
  })
  


    return (
        <div>
            I am a Navbar jejejheheh. and i am {color} in color
        </div>
    )
}

export default Navbar
