import React, { Component } from 'react';

import CatalogCover from './img/artportfolio/Prosthetics/CatalogCover.jpg'

import './SASS/Contact.sass';
const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = { name: "", email: "", subject: "", message: "" };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
  
  handleSubmit = (event) => {
	const templateId = 'template_7sL0hWXJ';

	this.sendFeedback(templateId, {message_html: this.state.message, from_name: this.state.name, reply_to: this.state.subject, from_email: this.state.email})
  }

  sendFeedback = (templateId, variables) => {
	window.emailjs.send(
  	'gmail', templateId,
  	variables
  	).then(res => {
    	console.log('Email successfully sent!')
  	})
  	// Handle errors here however you like, or use a React error boundary
  	.catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
  }
  
    handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        console.log(this.state)
        return(

        <div className='contact'>
            <h1>Send Me a Message</h1>
            <h2>levij.app@gmail.com</h2>
            <form onSubmit={this.handleSubmit}>
                <h4>Name</h4>
                <input type="text" value={this.state.name} onChange={this.handleChange}/>
                <h4>Email</h4>
                <input type="email" value={this.state.email} onChange={this.handleChange} />
                <h4>Subject</h4>
                <input type="text" value={this.state.subject} onChange={this.handleChange} />
                <h4>Message</h4>
                <textarea value={this.state.message} onChange={this.handleChange}></textarea>
                <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </form>
        </div>


        )
    }
}

export default Contact