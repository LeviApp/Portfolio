import React, { Component } from 'react';
import './SASS/Navigation.sass';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { scroller } from 'react-scroll'


import LApp from './LAppLogo.js'
import Nav from './Nav.js'
import LinkedIn from './img/LinkedInLogo.png'
import GitHub from './img/GitHubLogo.png'


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
                <NavLink className="about-nav tab" activeClassName="active" to="/about">
                 About
                </NavLink>
                <NavLink className="dev-nav tab" activeClassName="active" to="/dev">
                 Dev Portfolio
                </NavLink>
                <NavLink className="art-nav tab" activeClassName="active" to="/art">
                Art Portfolio
                </NavLink>
                <NavLink className="contact-nav tab" activeClassName="active" to="/contact">
                Contact
                </NavLink>
                <div className="connect">
                <a className='linked-in' href="https://www.linkedin.com/in/levi-app/" target="_blank">
                <img src={LinkedIn} />
                </a>

                <a className='git-hub' href="https://github.com/LeviApp" target="_blank">
                <img src={GitHub} />
                </a>
                </div>
                </div>
                
                <Nav />
        </nav>


        )
    }
}

export default Navigation