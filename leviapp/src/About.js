import React, { Component } from 'react';

import './SASS/About.sass';

import Photo from './img/Levi.png'


class About extends Component {

    state = {

    }

    render() {
        return(

        <div>
            <div>
            <img className='Levi' src={Photo} />
            </div>
        </div>


        )
    }
}

export default About