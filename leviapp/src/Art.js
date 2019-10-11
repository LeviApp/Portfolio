import React, { Component } from 'react';
import './SASS/Art.sass';

class Art extends Component {

    state = {
    }

    render() {
        return(

        <div>
      <div className='contents'>

            <h2 onClick={() => {this.scrollTo('illustration', -235)}} className='all_sections second'>
            Infographics
            </h2>
            <h3 className='arrows'>>>>>></h3>

            <h2 onClick={() => {this.scrollTo('infographics', -235)}} className='all_sections third'>
            Tactile Graphics
            </h2>
            <h3 className='arrows'>>>>>></h3>

            <h2 onClick={() => {this.scrollTo('quorum', -235)}} className='all_sections third'>
            Type Design
            </h2>
            <h3 className='arrows'>>>>>></h3>

            <h2 onClick={() => {this.scrollTo('quorum', -235)}} className='all_sections third'>
            Illustration
            </h2>
            <h3 className='arrows'>>>>>></h3>


            </div>
        </div>


        )
    }
}

export default Art