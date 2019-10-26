import React, { Component } from 'react';
import './SASS/App.sass';
import './SASS/Dev.sass';
import { Link, DirectLink, Element , Events, animateScroll, scrollSpy, scroller } from 'react-scroll'

import TractionDraft0 from './svg/traction-stage0.svg'
import TractionDraft00 from './svg/traction-stage00.svg'

import TractionDraft1 from './svg/traction-stage1.svg'
import TractionDraft2 from './svg/traction-stage2.svg'
import TractionDraft3 from './svg/traction-stage3.svg'
import TractionDraft4 from './svg/traction-stage4.svg'
import TractionDraft5 from './svg/traction-stage5.svg'
import TractionDraft6 from './svg/traction-stage6.svg'
import Calendar from './img/calendar.png'


import Traction from './svg/traction.svg'
import TractionPremium from './svg/traction-premium.svg'
import Mapped from './img/mapped-event.png'

import Checkbox from './Checkbox.jsx'


class Dev extends Component {

    state = {

    }

    componentDidMount() {
      window.addEventListener("scroll", this.scrollStatus)
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
        window.addEventListener("scroll", this.scrollStatus)
    }

    scrollStatus = () => {
      const far = window.scrollY
      const percent = `${(far/1510)*100}%`
      const number = far/1510
      const number2 = ((-1640 + far)/1430)
      const percent2 = `${((-1640 + far)/1430)*100}%`
      const percent3 = `${((-3225 + far)/700)*100}%`
      const number3 = ((-3225 + far)/700)


      console.log('still in')
      const a = document.getElementsByClassName('arrows_1')[0]
      const b = document.getElementsByClassName('second')[0]
      const c = document.getElementsByClassName('arrows_2')[0]
      const d = document.getElementsByClassName('third')[0]
      const e = document.getElementsByClassName('arrows_3')[0]


    if (a !== undefined && b !== undefined && c !== undefined && d !== undefined && e !== undefined ) {
      console.log(a, 'Aaaaaa')
      a.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 ${percent} , #D4D4D4 ${percent}, #D4D4D4 100%)`

      if (far >= 1640) {
          b.style.color = `#4EC9B0`

          c.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 ${percent2} , #D4D4D4 ${percent2}, #D4D4D4 100%)`
      }
      else {
          b.style.color = `#D4D4D4`
          c.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 0% , #D4D4D4 0%, #D4D4D4 100%)`

      }
      if (far >= 3225) {
          d.style.color = `#4EC9B0`

          e.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 ${percent3} , #D4D4D4 ${percent3}, #D4D4D4 100%)`
      }
      else {
          d.style.color = `#D4D4D4`
          e.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 0% , #D4D4D4 0%, #D4D4D4 100%)`

      }
    }
  }

    componentWillUnmount() {
      console.log('dev is unmounted')
      window.removeEventListener("scroll", this.scrollStatus)
      window.removeEventListener("click", this.scrollTo)

    }
    render() {
        return(
        <div className="Dev" onScroll={this.scrolled()}>
            <div className='contents'>
            <h2 onClick={() => {this.scrollTo('traction', -235)}}className='all_sections on_topic'>
            Traction
            </h2>
            <h3 className='arrows arrows_1'>>>>>></h3>

            <h2 onClick={() => {this.scrollTo('notes', -235)}} className='all_sections second'>
            Notes
            </h2>
            <h3 className='arrows arrows_2'>>>>>></h3>
            <h2 onClick={() => {this.scrollTo('arch', -235)}} className='all_sections third'>
            Smith & Jones Architects
            </h2>
            <h3 className='arrows arrows_3'>>>>>></h3>

            <h2 onClick={() => {this.scrollTo('schatz', -235)}} className='all_sections fourth'>
            Schatzinsel
            </h2>
            <h3 className='arrows arrows_4'>>>>>></h3>

            <h2 onClick={() => {this.scrollTo('automata', -235)}} className='all_sections fifth'>
            Automata
            </h2>
            <h3 className='arrows arrows_5'>>>>>></h3>

            <h2 onClick={() => {this.scrollTo('Automata', -235)}} className='all_sections fifth'>
            Schatzinsel
            </h2>
            <h3 className='arrows arrows_5'>>>>>></h3>
            </div>
            <section>

            <h1 className="TRACTION"> Traction </h1>
            <div className='logo-sect'>
            <div>
            <Element className='start-section' name="traction" >
            <h2>>>>>> Implemented website using Redux and React</h2>
            </Element>
            <h2>>>>>> Designed the Traction logo</h2>
            <h2> >>>>> Changed color scheme from blue to red/orange/blue after studying workout company color palettes </h2>
            </div>
            <div className="t-logos-drafts">
                <div>
                <img className='traction-logo-draft0' src={TractionDraft0} alt="traction-logo-draft0" />
                <img className='traction-logo-draft00' src={TractionDraft00} alt="traction-logo-draft00" />
                <img className='traction-logo-draft1' src={TractionDraft1} alt="traction-logo-draft1" />
                <img className='traction-logo-draft2' src={TractionDraft2} alt="traction-logo-draft2" />
                </div>

                <div>
                <img className='traction-logo-draft3' src={TractionDraft3} alt="traction-logo-draft3" />
                <img className='traction-logo-draft4' src={TractionDraft4} alt="traction-logo-draft4" />      
                <img className='traction-logo-draft5' src={TractionDraft5} alt="traction-logo-draft5" />
                <img className='traction-logo-draft6' src={TractionDraft6} alt="traction-logo-draft6" />    
                </div>        

                <div>
                <img className='final-traction-logo' src={Traction} alt="traction-logo" />
                <img className='final-traction-logo' src={TractionPremium} alt="traction-logo-premium" />
                </div>
            </div>
            </div>
            <div className='UI'>
            <img className='calendar' src={Calendar} alt="traction-logo-draft1" />
            <div>
            <h2> >>>>> Built dark UI design of the website using SASS to stand out from the standard light mode </h2>
            <h2> >>>>> Implemented the calendar using the FullCalendar api </h2>
            <h2> >>>>> Built calendar functionality using the JQuery version in the beginning, then changed to React version</h2>
            </div>
            </div>
            <div className='mapped'>
            <div>
            <div className='check'>
            <h2> >>>>> Created a hexagonal checkmark box with functionality </h2>
            <Checkbox />
            </div>
            <h2> >>>>> Used several map implementations which involved dates, body groups, and exercises</h2>
            <h2> >>>>> Organized tasks using Trello </h2>
            </div>
            <img className='mapped' src={Mapped} alt="mapped event" />  
            </div>   

            <h2> Regul </h2>
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
            <Element className='start-section' name="notes" >
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
            <h1 className="ARCH">            Smith & Jones Architects
</h1>
            <Element className='start-section' name="arch" >
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