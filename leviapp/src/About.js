import React, { Component } from 'react';

import './SASS/About.sass';

import Photo from './img/Levi.png'


class About extends Component {

    state = {

    }

    render() {
        return(
            <div className='about'>
                <div> 
                    <h1>Levi Appenfelder</h1>

                    <p className='first_p'>
                    I am a software engineer and graphic designer
                    passionate about developing people, just as much as I am about building websites.
                    Years of graphic design experience allows me to create sleek user
                    interfaces to complement user-friendly functionality.
                    </p>

                </div>

                <img className='Levi' src={Photo} />
            </div>


        )
    }
}

export default About