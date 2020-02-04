import React, { Component } from 'react';


import './SASS/Contact.sass';

class Submitted extends Component {

    constructor(props) {
        super(props);
        this.state = { name: "", email: "", subject: "", message: "" };
      }
  
      handleChange = e => this.setState({ [e.target.name]: e.target.value });

    render() {
        return(

        <div className='contact'>
            <h1>Thank You! I will get back with you shortly.</h1>
        </div>


        )
    }
}

export default Submitted