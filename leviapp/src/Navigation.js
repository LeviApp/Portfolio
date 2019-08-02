import React, { Component } from 'react';
import './SASS/Navigation.sass';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { scroller } from 'react-scroll'


import LApp from './LAppLogo.js'
import Nav from './Nav.js'


class Navigation extends Component {

    state = {
        activated: "Dev Portfolio"
    }

    scrollTo(element, offset) {
        scroller.scrollTo(element, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          offset: offset
        })
      }
    render() {
        return(

        <nav>   
                <LApp />
                <div className='links'>
                <NavLink className="dev-nav" activeClassName="active" to="/dev">
                 Dev Portfolio
                </NavLink>
                <NavLink className="art-nav"activeClassName="active" to="/art">
                Art Portfolio
                </NavLink>
                <NavLink className="contact-nav" activeClassName="active" to="/contact">
                Contact
                </NavLink>
                <a onClick={() => {this.scrollTo('notes', -225)}} to="notes">help</a>
                </div>
                
                <Nav />
        </nav>


        )
    }
}

export default Navigation