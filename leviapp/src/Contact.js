import React, { Component, Router } from 'react';


import CatalogCover from './img/artportfolio/Prosthetics/CatalogCover.jpg'

import './SASS/Contact.sass';
import { Redirect } from 'react-router'

function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  }
  

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = { name: "", email: "", subject: "", message: "" };
      }
  
      handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
    
      handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({
            "form-name": form.getAttribute("name"),
            ...this.state
          })
        })
          .then(() => window.location.replace("https://levijonas.app/submitted"))
          .catch(error => alert(error));
      };
      
    render() {
        console.log(this.state)
        return(

        <div className='contact'>
            <h1>Send Me A Message!</h1>
            <h2>levij.app@gmail.com</h2>

            <form className="cform" name="contact-form" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action='/submitted/' onSubmit={this.handleSubmit}>
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact-form" />
                <h4>Name</h4>
                <input type="text" onChange={this.handleChange} name="name" />
                <h4>Email</h4>
                <input type="email" onChange={this.handleChange} name="email" />
                <h4>Subject</h4>
                <input type="text" onChange={this.handleChange} name="subject" />
                <h4>Message</h4>
                <textarea onChange={this.handleChange} name="message"></textarea>
                <button  className='submit' type="submit">Submit</button>
            </form>
        </div>


        )
    }
}

export default Contact