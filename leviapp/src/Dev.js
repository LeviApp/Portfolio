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
import ReactLogo from './img/ReactLogo.png'
import SassLogo from './img/SassLogo.png'
import PostgresLogo from './img/PostgresLogo.png'
import JavaScriptLogo from './img/JavaScriptLogo.png'
import ReduxLogo from './img/ReduxLogo.png'
import Auth0Logo from './img/Auth0Logo.png'
import MarkDownLogo from './img/MarkDownLogo.png'
import HTMLLogo from './img/HTMLLogo.png'
import CSSLogo from './img/CSSLogo.png'
import FullCalendarLogo from './img/FullCalendarLogo.png'
import MomentLogo from './img/MomentLogo.png'
import p5Logo from './img/p5Logo.png'
import PythonLogo from './img/PythonLogo.png'
import PygameLogo from './img/PygameLogo.png'
import LESSLogo from './img/LESSLogo.png'


import Traction from './svg/traction.svg'
import TractionPremium from './svg/traction-premium.svg'
import Mapped from './img/mapped-event.png'

import Checkbox from './Checkbox.jsx'

import TractionPage from './img/TractionPage.png'

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
            Quotes 4 Life
            </h2>
            <h3 className='arrows arrows_2'>>>>>></h3>
            <h2 onClick={() => {this.scrollTo('arch', -235)}} className='all_sections third'>
            Reform In Dust Storms
            </h2>
            <h3 className='arrows arrows_3'>>>>>></h3>

            <h2 onClick={() => {this.scrollTo('schatz', -235)}} className='all_sections fourth'>
            Automaton
            </h2>
            <h3 className='arrows arrows_4'>>>>>></h3>

            <h2 onClick={() => {this.scrollTo('automata', -235)}} className='all_sections fifth'>
            Schatzinsel
            </h2>
            <h3 className='arrows arrows_5'>>>>>></h3>
            </div>
            <section>
            <h1 className="TRACTION"> Traction </h1>

              <div className='project'>
              <div className='left'>
              <Element className='start-section' name="traction" >
                <h2>❮❯ Workouts Application ❮❯</h2>
              </Element>
              <p>
                A group project focused on implementing web development solutions
                for a real world situation
              </p>
              <div className='web-sec'>
              <div className='web-group'>
                <a className='web-link' href='https://traction-app.netlify.com/'>To Website</a>
                <a className='web-arrow' href='https://traction-app.netlify.com/'>⟶</a>
              </div>

              <div className='web-group'>
              <a className='web-link' href='https://github.com/LeviApp/labspt2-workout-tracker'>To Project Repo</a>
              <a className='web-arrow' href='https://github.com/LeviApp/labspt2-workout-tracker'>⟶</a>
              </div>
              </div>
              </div>
              <div className='right'>
              <img src={TractionPage} />
              <h2>Tech Used</h2>
              <div className='tech-used'>
                  <div className='single-tech'>
                  <img src={ReactLogo} />
                  </div>

                  <div className='single-tech'>
                  <img src={SassLogo} />
                  </div>

                  <div className='single-tech'>
                  <img className='fullcalendar' src={FullCalendarLogo} />
                  </div>

                  <div className='single-tech'>
                  <img className='moment' src={MomentLogo} />
                  </div>

                  <div className='single-tech'>
                  <img src={ReduxLogo} />
                  </div>

                  <div className='single-tech'>
                  <img className='javascript' src={JavaScriptLogo} />
                  </div>

                  <div className='single-tech'>
                  <img src={HTMLLogo} />
                  </div>

                  <div className='single-tech'>
                  <img src={MarkDownLogo} />
                  </div>

                  <div className='single-tech'>
                  <img src={Auth0Logo} />
                  </div>

                  <div className='single-tech'>
                  <img className='postgres' src={PostgresLogo} />
                  </div>
              </div>
              </div>
              </div>

            <div className='project'>
            <div className='left'>
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
            <div className='right'>
              <h2>❮❯ Traction Logo ❮❯</h2>
              <p>Changed color scheme from blue to red/orange/blue after studying workout company color palettes </p>
            </div>
            </div>
            <div className='project'>
            <div className='left'>
            <p> ❮❯ Built dark UI design of the website using SASS to stand out from the standard light mode </p>
            <p> ❮❯ Implemented the calendar using the FullCalendar api </p>
            <p> ❮❯ Built calendar functionality using the JQuery version first, then changed to React version</p>
            </div>
            <div className='right'>
            <img className='calendar' src={Calendar} alt="traction-logo-draft1" />
            </div>
            </div>
            <div className='project'>
            <div className='left'>
            <img className='mapped' src={Mapped} alt="mapped event" />  
            </div>

            <div className='right'>
            <div className='check'>
            <p> ❮❯ Created a hexagonal checkmark box with functionality </p>
            <div className='check-group'>
            <Checkbox />
            <h6>Click Me</h6>
            </div>
            </div>
            <p> ❮❯ Used several JavaScript map implementations which involved dates, body groups, and exercises</p>
            <p> ❮❯ Organized tasks using Trello </p>
            </div>
            </div>   
            </section>
            <section>
            <h1 className="NOTES"> Quotes 4 Life </h1>
            <div className='tech-used'>
              <div className='single-tech'>
              <img src={ReactLogo} />
              </div>

              <div className='single-tech'>
              <img src={CSSLogo} />
              </div>

              <div className='single-tech'>
              <img src={HTMLLogo} />
              </div>

              <div className='single-tech'>
              <img className='javascript' src={JavaScriptLogo} />
              </div>
            </div>

            <div className='web-sec'>
            <div className='web-group'>
              <a className='web-link' href='https://quotes-4-life.netlify.com/home'>To Website</a>
              <a className='web-arrow' href='https://quotes-4-life.netlify.com/home'>⟶</a>
            </div>

            <div className='web-group'>
              <a className='web-link' href='https://github.com/LeviApp/front-end-project-week'>To FrontEnd Repo</a>
              <a className='web-arrow' href='https://github.com/LeviApp/front-end-project-week'>⟶</a>
            </div>

            <div className='web-group'>
              <a className='web-link' href='https://github.com/LeviApp/back-end-project-week'>To BackEnd Repo</a>
              <a className='web-arrow' href='https://github.com/LeviApp/back-end-project-week'>⟶</a>
            </div>
            </div>

            <Element className='start-section' name="notes" >
            <h2>❮❯ Project's Focus: Implementation of Web Development Principles ❮❯</h2>
            </Element>
            </section>

            <section>
            <h1 className="ARCH">Reform in Dust Storms</h1>
            <div className='tech-used'>
              <div className='single-tech'>
              <img src={HTMLLogo} />
              </div>

              <div className='single-tech'>
              <img src={JavaScriptLogo} />
              </div>

              <div className='single-tech'>
              <img src={CSSLogo} />
              </div>

              <div className='single-tech'>
              <img src={LESSLogo} />
              </div>
            </div>

            <div className='web-sec'>
            <div className='web-group'>
              <a className='web-link' href='https://rids-instructions.netlify.com/'>To Website</a>
              <a className='web-arrow' href='https://rids-instructions.netlify.com/'>⟶</a>
            </div>

            <div className='web-group'>
              <a className='web-link' href='https://github.com/LeviApp/User-Interface-Project-Week'>To Project Repo</a>
              <a className='web-arrow' href='https://github.com/LeviApp/User-Interface-Project-Week'>⟶</a>
            </div>
            </div>

            <Element className='start-section' name="arch" >
            <h2> ❮❯ Project's Focus: Responsive Behavior of Websites ❮❯ </h2>
            </Element>
            <p>This project is the instructions for a detective game. Set in Old West Colorado, the player must discover who committed the crime, the weapon that was used, and the place of the crime. 
              This project gives an overview of the entire game. Furthermore, there are three pages that provide more details about the suspect, weapon, and place.</p>

            </section>

            <section>
            <h1 className="automata">Automaton</h1>
            <div className='video'>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/fGX7U9Sx8S0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
            </div>
            <div className='tech-used'>
              <div className='single-tech'>
              <img src={PythonLogo} />
              </div>

              <div className='single-tech'>
              <img src={PygameLogo} />
              </div>
            </div>

            <div className='web-sec'>
            <div className='web-group'>
              <a className='web-link' href='https://github.com/LeviApp/Cellular-Automata'>To Project Repo</a>
              <a className='web-arrow' href='https://github.com/LeviApp/Cellular-Automata'>⟶</a>
            </div>
            </div>
            <Element className='start-section' name="arch" >
            <h2> ❮❯ Project's Focus: Implementation of Conway's Game of Life ❮❯ </h2>
            </Element>
            </section>

            <section>
            <h1 className="schatz">Schatzinsel</h1>
            <div className='tech-used'>
              <div className='single-tech'>
              <img src={ReactLogo} />
              </div>

              <div className='single-tech'>
              <img src={p5Logo} />
              </div>

              <div className='single-tech'>
              <img src={JavaScriptLogo} />
              </div>

              <div className='single-tech'>
              <img src={HTMLLogo} />
              </div>

              <div className='single-tech'>
              <img src={SassLogo} />
              </div>

              <div className='single-tech'>
              <img src={PostgresLogo} />
              </div>
            </div>

            <div className='web-sec'>
            <div className='web-group'>
              <a className='web-link' href='https://schatzinsel.netlify.com/'>To Website</a>
              <a className='web-arrow' href='https://schatzinsel.netlify.com/'>⟶</a>
            </div>

            <div className='web-group'>
              <a className='web-link' href='https://github.com/LeviApp/CS-Build-Week-2'>To FrontEnd Repo</a>
              <a className='web-arrow' href='https://github.com/LeviApp/CS-Build-Week-2'>⟶</a>
            </div>

            <div className='web-group'>
              <a className='web-link' href='https://github.com/LeviApp/CSProject-Backend'>To BackEnd Repo</a>
              <a className='web-arrow' href='https://github.com/LeviApp/CSProject-Backend'>⟶</a>
            </div>
            </div>

            <Element className='start-section' name="arch" >
            <h2>❮❯ Project's Focus: Implementation of Computer Science Principles ❮❯</h2>
            </Element>
            </section>
        </div>


        )
    }
}

export default Dev