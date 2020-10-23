import React from 'react'
import './Header.css'
import Button from "@material-ui/core/Button";


function Header() {
    return (
        <div className="header">
            <div className="header__left">
            </div>
            <div className="header__right">
            
                    <Button>Workshops</Button>
                    <Button>About me</Button>
                    <Button>Contact</Button>
            </div>
            
        </div>
    )
}

export default Header
