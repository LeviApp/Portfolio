import React, { Component } from 'react';
import './SASS/App.sass';
import './SASS/Dev.sass';
import { Link, DirectLink, Element , Events, animateScroll, scrollSpy, scroller } from 'react-scroll'

import Traction from './svg/traction.svg'
import TractionPremium from './svg/traction-premium.svg'


class Dev extends Component {

    state = {

    }
    
    scrollTo(element, offset) {
        scroller.scrollTo(element, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
          offset: offset
        })
      }

    scrolled = event => {
        window.addEventListener("scroll", () => {
            const far = window.scrollY
            const percent = `${(far/1510)*100}%`
            const number = far/1510
            const number2 = ((-1640 + far)/1430)
            const percent2 = `${((-1640 + far)/1430)*100}%`
            const percent3 = `${((-3225 + far)/700)*100}%`
            const number3 = ((-3225 + far)/700)


            console.log(far)
            const a = document.getElementsByClassName('arrows_1')[0]
            const b = document.getElementsByClassName('second')[0]
            const c = document.getElementsByClassName('arrows_2')[0]
            const d = document.getElementsByClassName('third')[0]
            const e = document.getElementsByClassName('arrows_3')[0]



            a.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 ${percent} , #D4D4D4 ${percent}, #D4D4D4 100%)`
            a.style.fontSize = `${1.25+0.25*number}rem`
            b.style.fontSize = `${1.25+0.25*number}rem`


            if (far >= 1640) {
                a.style.fontSize = `1.5rem`
                b.style.fontSize = `1.5rem`
                b.style.color = `#4EC9B0`

                c.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 ${percent2} , #D4D4D4 ${percent2}, #D4D4D4 100%)`
                c.style.fontSize = `${1.25+0.25*number2}rem`
                d.style.fontSize = `${1.25+0.25*number2}rem`
            }
            else {
                b.style.color = `#D4D4D4`
                c.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 0% , #D4D4D4 0%, #D4D4D4 100%)`

            }
            if (far >= 3225) {
                c.style.fontSize = `1.5rem`
                d.style.fontSize = `1.5rem`
                d.style.color = `#4EC9B0`

                e.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 ${percent3} , #D4D4D4 ${percent3}, #D4D4D4 100%)`
                e.style.fontSize = `${1.25+0.25*number3}rem`

            }
            else {
                d.style.color = `#D4D4D4`
                e.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 0% , #D4D4D4 0%, #D4D4D4 100%)`

            }

        })
    }
    render() {
        return(
        <div className="Dev" onScroll={this.scrolled()}>
            <div className='contents'>
            <h2 onClick={() => {this.scrollTo('traction', -200)}}className='all_sections on_topic'>
            Traction
            </h2>
            <h3 className='arrows_1'>>>>>></h3>

            <h2 onClick={() => {this.scrollTo('notes', -200)}} className='all_sections second'>
            Notes
            </h2>
            <h3 className='arrows_2'>>>>>></h3>
            <h2 onClick={() => {this.scrollTo('arch', -200)}} className='all_sections third'>
            Smith & Jones Architects
            </h2>
            <h3 className='arrows_3'>>>>>></h3>

            </div>
            <section>
            <h1 className="TRACTION"> Traction </h1>
            <Element name="traction" >
            <div className="t-logos">
            <img className='traction-logo' src={Traction} alt="traction-logo" />
            <img className='traction-premium-logo' src={TractionPremium} alt="traction-logo-premium" />
            </div>
            </Element>

            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            </section>
            <section>
            <h1 className="NOTES"> Notes </h1>
            <Element name="notes" >
            <h2> Regular </h2>
            </Element>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            </section>

            <section>
            <h1 className="ARCH">S. & J. A.</h1>
            <Element name="arch" >
            <h2> Regular </h2>
            </Element>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            <h2> Regular </h2>
            </section>



        </div>


        )
    }
}

export default Dev