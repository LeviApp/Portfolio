import React, { Component } from 'react';


class Nav extends Component {

    state = {
    }

    render() {
        console.log(window.location)

        return(
            
            <div className="background-nav">
                <svg width="100%" height="100%" viewBox="0 0 1365 165" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve" xmlnsserif="http://www.serif.com/" styles="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
                    <g transform="matrix(1,0,0,1,-1571.52,-0.622509)">
                        <g transform="matrix(1,0,0,1,-0.333333,0)">
                            <g id="navigation" transform="matrix(1.55481,0,0,1,-871.562,0)">
                                <path d="M2449.16,0.623L1571.52,0.623L1571.52,165L1726.57,165L1741.09,105L2449.16,105L2449.16,0.623Z" styles="fill:rgb(30,30,30);"/>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        )
    }
}

export default Nav