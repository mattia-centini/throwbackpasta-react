import React from 'react'
import './CardsContainer.css'
import Card from './Card'
import pastachef from '../image/pastachef.jpg'
import winepour from '../image/winepour.jpg'

function CardsContainer() {

    const images = [
        {
            src: {pastachef},
        },
        {
            src: {winepour}
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
                    src={images[0].src}
                />
                <Card 
                src={images[1].src}
                />
            </div>
        </div>
    )
}

export default CardsContainer
