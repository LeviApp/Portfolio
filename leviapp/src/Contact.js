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
            <form>
            <h4>Name</h4>
            <input></input>
            <h4>Email</h4>
            <input></input>
            <h4>Subject</h4>
            <input></input>
            <h4>Message</h4>
            <textarea></textarea>
            <button></button>
            </form>
        </div>


        )
    }
}

export default Contact