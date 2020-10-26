import React from 'react'
import './Contacts.css'
import Header from './Header'
import Footer from './Footer'
import ContactForm from './ContactForm'

function Contacts() {
    return (
        <div className='contacts' id='contacts'>
            <Header />
            <div className='contacts__container'>
                <div className='contacts__left'>
                    <h3>Contacts</h3>
                    <p>
                            If you have a quick question about a 
                            specific recipe, the fastest way to 
                            get a response is to ask via the 
                            comment form at the bottom of the 
                            recipe page. Comments are moderated at 
                            least once per day and I’ll do my 
                            best to answer your question!                    
                        </p>
                </div>
                <div className='contacts__right'>
                    <ContactForm />
                </div>
            </div>
            <Footer />


            
        </div>
    )
}

export default Contacts
