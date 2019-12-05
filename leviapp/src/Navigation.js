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
                <NavLink className="about-nav" activeClassName="active" to="/about">
                 About Me
                </NavLink>
                <NavLink className="dev-nav" activeClassName="active" to="/dev">
                 Dev Portfolio
                </NavLink>
                <NavLink className="art-nav"activeClassName="active" to="/art">
                Art Portfolio
                </NavLink>
                <NavLink className="contact-nav" activeClassName="active" to="/contact">
                Contact
                </NavLink>
                </div>
                
                <Nav />
        </nav>


        )
    }
}

export default Navigation