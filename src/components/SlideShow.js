import React, {useEffect, useState} from 'react'
import './SlideShow.css'
import Slide from "./Slide"


function SlideShow() {

    const [index, setIndex] = useState(0);
    // useEffect(() => {
    //     setIndex(() => {
    //         if(index === 0){
    //             index++
    //         }if(index === slides.length){
    //             return
    //         }
    //     })
    // })

    const slides = [
        {
          img: "https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466_1280.jpg",
          text: "The sea is blue",
        },
        {
          img: "https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720",
          text: "View over the vineyard",
        },
        {
          img: "https://cdn.pixabay.com/photo/2017/08/02/01/01/living-room-2569325__480.jpg",
          text: "Tuscan hillside",
        },
      
      ];
      

    return    (
    
        <div className="slideshow">
          
                    <Slide 
                    src={slides[index].img}
                    text={slides[index].text}
                    slides={slides}
                    
                /> 
                <p>{index}</p>
                <button onClick={() => {
                    if(index === 0){
                        setIndex(index + 1)
                    }if(index === slides.length){
                        slides[index] = 0
                    }else(setIndex(index + 1))
                    }}>+</button>
              
        
        </div>
    )
}

export default SlideShow