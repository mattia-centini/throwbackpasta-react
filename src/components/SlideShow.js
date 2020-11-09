import React, {useEffect, useState} from 'react'
import './SlideShow.css'
import Slide from "./Slide"


function SlideShow() {

    const [index, setIndex] = useState(0);

    // useEffect(() => {
    //   console.log('started')
    //   const interval = setInterval(() => {
    //     setIndex(index => index + 1)
    //     if(index === slides.length - 1){
    //       console.log('ended')
    //       setIndex(index => index === 0)
    //     }
        
    //   }, 1000);
      
    //   return () => clearInterval(interval)
    // },[])


    //  useEffect(() => {
    //     console.log('you are slideshow')
    //    const interval =  setInterval(() => {
    //     if(index !== slides.length - 1)  {
    //       setIndex(index => index + 1)
    //     }else{ setIndex(0) } 
    //   }, 3000);
    //   return () => clearInterval(interval)
    //   },[])


    const slides = [
        {
          img: "https://cdn.pixabay.com/photo/2016/12/26/17/28/food-1932466_1280.jpg",
          text: "Creative workshops for all of those who are into cooking",
        },
        {
          img: "https://cdn.pixabay.com/photo/2019/05/24/22/01/pasta-4227341_1280.jpg",
          text: "Learn the techniques to become an excellent pasta maker",
        },
        {
          img: "https://images.unsplash.com/photo-1465911817134-741b5e473a1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80",
          text: "Master the art of making Ravioli",
        },
      
      ];

   

     
      

    return    (
    
        <div className="slideshow">
                    <Slide 
                    src={slides[index].img}
                    text={slides[index].text}
                    slides={slides}
                    
                /> 
                
                <button 
                
      
                
                onClick={() => {
                    if(index !== slides.length - 1)  {
                      setIndex(index => index + 1)
                    }else{ setIndex(0) }                    
                    }}
                    >+
                    </button>
              
        
        </div>
    )
}

export default SlideShow
