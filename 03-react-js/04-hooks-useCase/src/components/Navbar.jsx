import React, { useEffect } from 'react'

const Navbar = ({ color }) => {

    useEffect(() => {
        alert("color changed")
    }, [color])

    return (
        <div>
            I am a Navbar jejejheheh. and i am {color} in color
        </div>
    )
}

export default Navbar
