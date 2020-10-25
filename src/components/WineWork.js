import React from 'react'
import Header from './Header'
import './WineWork.css'
import MyCalendar from './MyCalendar'



function WineWork() {
    return (
        <div className="winework">
            <Header />
            <div className="winework__container">
                    <div className="winework__left">
                        <h3>Wine Tasting Workshop</h3>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making </p>
                    </div>

                    <div className="winework__right">
                    {/* <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%239e6e30&amp;ctz=Europe%2FRome&amp;src=bWF0dGlhLmNlbnRpbmlAZ21haWwuY29t&amp;color=%237986CB&amp;showTitle=0&amp;showDate=1&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;title=Pasta%20Workshop" style="border:solid 1px #777" width="800" height="600" frameborder="0" scrolling="no" title="myFrame"></iframe> */}
                        <MyCalendar />
                    </div>

            </div>
           
            
        </div>
    )
}

export default WineWork