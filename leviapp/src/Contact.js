import React, { Component } from 'react';

import CatalogCover from './img/artportfolio/Prosthetics/CatalogCover.jpg'

import './SASS/Contact.sass';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = { name: "", email: "", subject: "", message: "" };
      }
  
      handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: { "form-name": "contact", ...this.state }
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));
  
        e.preventDefault();
      };
  
      handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        console.log(this.state)
        return(

        <div className='contact'>
            <h1>Send Me a Message</h1>
            <h2>levij.app@gmail.com</h2>
            <form name="contact-form" method="post" netlify="true" onSubmit={this.handleSubmit}>
                <h4>Name</h4>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                <h4>Email</h4>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} />
                <h4>Subject</h4>
                <input type="text" name="subject" value={this.state.subject} onChange={this.handleChange} />
                <h4>Message</h4>
                <textarea name="message" value={this.state.message} onChange={this.handleChange}></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>


        )
    }
}

export default Contact