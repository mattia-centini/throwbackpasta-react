import React from 'react'
import Header from './Header'
import './PastaWork.css'
import MyCalendar from './MyCalendar'

function PastaWork() {
    return (
        <div className="pastawork">
            <Header />
            <div className="pastawork__container">
                    <div className="pastawork__left">
                        <h3>Pasta Workshop</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making </p>
                    </div>

                    <div className="pastawork__right">
                        <MyCalendar />
                    </div>

            </div>
           

            
        </div>
    )
}

export default PastaWork
