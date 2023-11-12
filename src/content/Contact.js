import React from 'react'
import "../styles/Contact.css"
import {AnimateOnScroll} from 'animate-on-scroll-framer'

function Contact () {
        return(
            <AnimateOnScroll animation='flipIn'>
                <div className="condiv">
                    <div className='condiv-card'>
                        <h1 >Contact Me</h1>
                        <h3>Email : jakkaphat396190@gmail.com</h3>
                        <h3>Tel : 094-5621637</h3>
                    </div>
                </div>
            </AnimateOnScroll>
            
        );
    }

export default Contact;