import React from 'react'
import "./Card.css"

const Card = (props) => {
    return (
        <div>
        <div className='card'>
            <img src="https://img.freepik.com/free-vector/graident-ai-robot-vectorart_78370-4114.jpg" width={250} alt="" />
            <h1>{props.Title}</h1><hr/><br />
            <p>{props.Description}</p>
        </div>
        </div>

    )
}

export default Card
