import React, { Component } from 'react';

import CatalogCover from './img/artportfolio/Prosthetics/CatalogCover.jpg'

import './SASS/Contact.sass';

class Contact extends Component {

    state = {
    }

    render() {
        return(

        <div className='contact'>
            <h1>Send Me a Message</h1>
            <h2>levij.app@gmail.com</h2>
            <form method='POST' name='Contact' data-netlify="true" action="/contact">
                <h4>Name</h4>
                <input type='text' name='name' />
                <h4>Email</h4>
                <input type='text' name='email' />
                <h4>Subject</h4>
                <input type='text' name='subject' />
                <h4>Message</h4>
                <textarea name='message'></textarea>
                <button type='submit'>Submit</button>
            </form>
        </div>


        )
    }
}

export default Contact