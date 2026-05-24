import React,{memo} from 'react'

const Navbar = ({adjective, getAdjective}) => {
    console.log("Navbar rerendered")
  return (
    <div>
      i am a {adjective} Navbar.
      <button onClick={()=>{getAdjective()}}>{getAdjective()}</button>
    </div>
  )
}

export default memo(Navbar)
