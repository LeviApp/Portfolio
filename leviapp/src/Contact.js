import React, { Component } from 'react';

import CatalogCover from './img/artportfolio/Prosthetics/CatalogCover.jpg'

import './SASS/Contact.sass';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = { name: "", email: "", subject: "", message: "" };
      }
  
      handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        console.log(this.state)
        return(

        <div className='contact'>
            <div className='cheading'>
                <h1>Send Me a Message</h1>
                <h2>levij.app@gmail.com</h2>
            </div>
            <form className="cform" name="contact-form" method="post" data-netlify="true">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact-form" />
                <h4>Name</h4>
                <input type="text" name="name" />
                <h4>Email</h4>
                <input type="email" name="email" />
                <h4>Subject</h4>
                <input type="text" name="subject" />
                <h4>Message</h4>
                <textarea name="message"></textarea>
                <button className='submit' type="submit">Submit</button>
            </form>
        </div>


        )
    }
}

export default Contact