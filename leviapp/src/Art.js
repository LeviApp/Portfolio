import React, { Component } from 'react';
import './SASS/Art.sass';

class Art extends Component {

    state = {
    }

    render() {
        return(

        <div>
      <div className='contents'>

            <h2 onClick={() => {this.scrollTo('traction', -235)}}className='all_sections on_topic'>
            Gastric Sleeve Operation
            </h2>
            <h3 className='arrows_1'>>>>>></h3>

            <h2 onClick={() => {this.scrollTo('notes', -235)}} className='all_sections second'>
            Illustration
            </h2>
            <h3 className='arrows_2'>>>>>></h3>

            <h2 onClick={() => {this.scrollTo('arch', -235)}} className='all_sections third'>
            Infographics
            </h2>
            <h3 className='arrows_3'>>>>>></h3>

            <h2 onClick={() => {this.scrollTo('arch', -235)}} className='all_sections third'>
            Operation: Quorum Sense
            </h2>
            <h3 className='arrows_4'>>>>>></h3>

            </div>
        </div>


        )
    }
}

export default Art