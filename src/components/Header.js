import React from 'react'
import './Header.css'
import Button from "@material-ui/core/Button";
// import {Link } from 'react-router-dom';
import logo from '../image/logonobg-01.png';
import {Link} from 'react-scroll';
import {NavLink} from 'react-router-dom';


function Header() {
    return (
        <div className="header">
            
                <div className="header__left">
            
                <NavLink to='/'>
                <img src={logo} alt='throwback pasta logo'/>
                    </NavLink>        
                                  

                    
                </div>
           
           
            <div className="header__right">

                            <Button>
                                 <Link 
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                        >
                                    About Me
                                 </Link>
                             </Button> 

                            <Button>
                                 <Link 
                                    activeClass="active"
                                    to="workshops"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                        >
                                    Workshops
                                 </Link>
                             </Button>    
                            
                             <Button>
                                 <Link 
                                    activeClass="active"
                                    to="contacts"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                        >
                                    Contacts
                                 </Link>
                             </Button> 
            </div>
            
        </div>
    )
}

export default Header
