import React from 'react'
import './Footer.css'
// import FacebookPlugin from './FacebookPlugin'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import IconButton from '@material-ui/core/IconButton';


function Footer() {
    return (
        <div className='footer'>
         
            <div className='footer__icons'>
                <IconButton>
                    <a className='footer__iconsAnchor' target='_blank' href='https://www.facebook.com/throwbackpasta/?view_public_for=156178635112991'>
                      <FacebookIcon fontSize='large'/>
                    </a>
                    
                </IconButton>
                <IconButton>
                    <a className='footer__iconsAnchor' target='_blank' href='https://www.instagram.com/throwback_pasta/?hl=en'>
                    <InstagramIcon fontSize='large'/>
                    </a>
                    
                </IconButton>
                <IconButton>
                    <a className='footer__iconsAnchor' target='_blank' href='https://www.pinterest.com/'>
                    <PinterestIcon fontSize='large'/>
                    </a>
                    
                </IconButton>

                {/* <FacebookPlugin /> */}
            </div>
            
        </div>
    )
}

export default Footer
