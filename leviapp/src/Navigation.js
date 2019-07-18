import React, { Component } from 'react';
import './SASS/Navigation.sass';
import { Link, NavLink, withRouter } from 'react-router-dom';
let left = '<';
let right = '/>';

class Navigation extends Component {

    state = {
        activated: "Dev Portfolio"
    }

    clicked = (event) => {
        event.preventDefault()
        let value= event.target.id
        let all = document.getElementsByClassName("arrow")
        let selected = document.getElementsByClassName(value)
        let category = document.getElementById(value)
        let categories = document.getElementsByClassName("active")

        for (let i = 0; i < all.length; i++) {
            all[i].classList.remove("select");
          }
        for (let i = 0; i < selected.length; i++) {
        selected[i].classList.add("select");
        }
        for (let i = 0; i < categories.length; i++) {
            categories[i].classList.remove("active");
          }
        category.classList.add("active")

        this.setState({activated: value})
    }
    render() {
        return(

        <nav>
                <NavLink activeClassName="active" to="/dev">
                 Dev Portfolio
                </NavLink>
                <NavLink activeClassName="active" to="/art">
                Art Portfolio
                </NavLink>
                <NavLink activeClassName="active" to="/contact">
                Contact
                </NavLink>
        </nav>


        )
    }
}

export default Navigation