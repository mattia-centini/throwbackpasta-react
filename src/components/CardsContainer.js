import React from 'react'
import './CardsContainer.css'
import Card from './Card'
import pastachef from '../image/pastachef.jpg'
import winepour from '../image/winepour.jpg'

function CardsContainer() {

        const details = [
            {
                title: "Pasta Workshop",
                text: "Become a Pro Pasta Maker"
            },
            {
                title: "Wine Tasting",
                text: "Learn Tasting Skills"
            }
        ]
    

    return (
        <div className="cardsContainer">
            <div className="cardsContainer__top">
                <div className="cardsContainer__topPin"></div>
                    <h3>The Workshops</h3>
                    <div className="cardsContainer__topPin"></div>
                </div>
            <div className="cardsContainer__cards">
                <Card 
                    src={pastachef}
                    title={details[0].title}
                    text={details[0].text}
                />
                <Card 
                        src={winepour}
                        title={details[1].title}
                        text={details[1].text}
                />
            </div>
        </div>
    )
}

export default CardsContainer
