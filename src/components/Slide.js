import React from 'react'
import './Slide.css'

function Slide({src, text }) {


    return (
        <div className="slide">
            <img src={src} alt={text}/>
            <p>{text}</p>  
        </div>
    )
}

export default Slide
