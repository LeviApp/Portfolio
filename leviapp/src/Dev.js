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
import VueLogo from './img/VueLogo.png'
import AngularLogo from './img/AngularLogo.png'
import TypeScriptLogo from './img/TypeScriptLogo.png'
import SCSSLogo from './img/SCSSLogo.png'
import MySQLLogo from './img/MySQLLogo.png'
import PHPLogo from './img/PHPLogo.png'
import OMDBLogo from './img/OMDBLogo.png'
import CCLogo from './img/CCLogo.png'
import FirebaseLogo from './img/FirebaseLogo.png'
import LeafletLogo from './img/LeafletLogo.png'
import EmberLogo from './img/EmberLogo.png'
import HandlebarsLogo from './img/HandlebarsLogo.png'
import CSharpLogo from './img/CSharpLogo.png'
import DotNetLogo from './img/DotNetLogo.png'

import NodeLogo from './img/NodeLogo.png'
import DjangoLogo from './img/DjangoLogo.png'

import LaravelLogo from './img/LaravelLogo.png'
import BootstrapLogo from './img/BootstrapLogo.png'


import Traction from './svg/traction.svg'
import TractionPremium from './svg/traction-premium.svg'
import Mapped from './img/mapped-event.png'

import Checkbox from './Checkbox.jsx'

import AnagramPage from './img/AnagramScramPage.png'
import RexPage from './img/RegExRexPage.png'
import TractionPage from './img/TractionPage.png'
import QuotesPage from './img/QuotesPage.png'
import ReformPage from './img/ReformPage.png'
import SchatzPage from './img/SchatzPage.png'
import RomanRoofingPage from './img/RomanRoofingPage.png'
import ShoppiesPage from './img/ShoppiesPage.png'
import WSTQPage from './img/WSTQPage.png'
import ExcessMaterialPage from './img/ExcessMaterialPage.png'

class Dev extends Component {

    state = {

    }

    componentDidMount() {
      // window.addEventListener("scroll", this.scrollStatus)
    }
    
//     scrollTo(element, offset) {
//         scroller.scrollTo(element, {
//           duration: 800,
//           delay: 0,
//           smooth: 'easeInOutQuart',
//           offset: offset
//         })
//       }

//     scrolled = event => {
//         window.addEventListener("scroll", this.scrollStatus)
//     }

//     scrollStatus = () => {

//       const winHeight = window.innerHeight || (document.documentElement || document.body).clientHeight
//       const docHeight = document.body.clientHeight
//       const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
//       const trackLength = docHeight - winHeight
//       const percentScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
//     console.log(percentScrolled + '% scrolled')
//       const percent = `${(percentScrolled/49)*100}%`
//       const number = percentScrolled/49
//       const number2 = ((-49 + percentScrolled)/15)
//       const percent2 = `${((-49 + percentScrolled)/15)*100}%`
//       const percent3 = `${((-66 + percentScrolled)/14)*100}%`
//       const number3 = ((-66 + percentScrolled)/14)
//       const percent4 = `${((-82 + percentScrolled)/15)*100}%`
//       const number4 = ((-82 + percentScrolled)/15)


//       console.log('this is how percentScrolled', percentScrolled, percent)
//       const a = document.getElementsByClassName('arrows_1')[0]
//       const b = document.getElementsByClassName('second')[0]
//       const c = document.getElementsByClassName('arrows_2')[0]
//       const d = document.getElementsByClassName('third')[0]
//       const e = document.getElementsByClassName('arrows_3')[0]
//       const f = document.getElementsByClassName('fourth')[0]
//       const g = document.getElementsByClassName('arrows_4')[0]
//       const h = document.getElementsByClassName('fifth')[0]


//     if (a !== undefined && b !== undefined && c !== undefined && d !== undefined && e !== undefined ) {
//       console.log(a, 'Aaaaaa')
//       a.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 ${percent} , #D4D4D4 ${percent}, #D4D4D4 100%)`

//       if (percentScrolled >= 49) {
//           b.style.color = `#4EC9B0`

//           c.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 ${percent2} , #D4D4D4 ${percent2}, #D4D4D4 100%)`
//       }
//       else {
//           b.style.color = `#D4D4D4`
//           c.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 0% , #D4D4D4 0%, #D4D4D4 100%)`

//       }
//       if (percentScrolled >= 65) {
//           d.style.color = `#4EC9B0`

//           e.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 ${percent3} , #D4D4D4 ${percent3}, #D4D4D4 100%)`
//       }
//       else {
//           d.style.color = `#D4D4D4`
//           e.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 0% , #D4D4D4 0%, #D4D4D4 100%)`

//       }

//       if (percentScrolled >= 82) {
//         f.style.color = `#4EC9B0`

//         g.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 ${percent4} , #D4D4D4 ${percent4}, #D4D4D4 100%)`
//     }
//     else {
//         f.style.color = `#D4D4D4`
//         g.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 0% , #D4D4D4 0%, #D4D4D4 100%)`

//     }

//     if (percentScrolled >= 99) {
//       h.style.color = `#4EC9B0`

//   }
//   else {
//       h.style.color = `#D4D4D4`

//   }
//     }
//   }

    componentWillUnmount() {
      // console.log('dev is unmounted')
      // window.removeEventListener("scroll", this.scrollStatus)
      // window.removeEventListener("click", this.scrollTo)

    }
    render() {
        return(
        <div className="Dev">
            {/* <div className='contents'>
            <h2 onClick={() => {this.scrollTo('traction', -220)}}className='all_sections on_topic'>
            Traction
            </h2>
            <h3 className='arrows arrows_1'>❯❯❯❯❯</h3>

            <h2 onClick={() => {this.scrollTo('quotes', -220)}} className='all_sections second'>
            Quotes 4 Life
            </h2>
            <h3 className='arrows arrows_2'>❯❯❯❯❯</h3>
            <h2 onClick={() => {this.scrollTo('reform', -220)}} className='all_sections third'>
            Reform In Dust Storms
            </h2>
            <h3 className='arrows arrows_3'>❯❯❯❯❯</h3>

            <h2 onClick={() => {this.scrollTo('automaton', -200)}} className='all_sections fourth'>
            Automaton
            </h2>
            <h3 className='arrows arrows_4'>❯❯❯❯❯</h3>

            <h2 onClick={() => {this.scrollTo('schatz', -200)}} className='all_sections fifth'>
            Schatzinsel
            </h2>
            </div> */}
            <section>
            <h1 className="shoppies">Excess Material</h1>
            <div className="project">
            <div className="left">
            <Element className='start-section' name="schatz" >
            <h2>❮❯ Online Marketplace ❮❯</h2>
            </Element>
            <p>
            Excess Material is an Angular website currently in progress. When completed, it will allow buyers and sellers to interact in an online marketplace.
            The project includes a Django backend which allows users to add, delete, and update posts. The backend also includes search and sorting features.
            Form functionality is included, allowing emails to be sent to proper individuals. Furthermore, Firebase is also used to support image upload.  

              <br />
              <br />
              Username: levij.app@gmail.com | Password: TestUser4444!
            </p>

              <div className="focus">
              <h4>❯❯ Form</h4>
              <h4>❯❯ Image Storage</h4>
              <h4>❯❯ Email</h4>
              <h4>❯❯ Map</h4>

              </div>
            <div className='tech-used' id='schatz-tech'>
            <div className='single-tech'>
              <img loading="lazy"  src={HTMLLogo} alt="HTML Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={SassLogo} alt="Sass Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={TypeScriptLogo} alt="React Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={AngularLogo} alt="React Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={Auth0Logo} alt="Auth0 Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={FirebaseLogo} alt="OMDB Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={LeafletLogo} alt="JavaScript Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={PythonLogo} alt="Python Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={DjangoLogo} alt="Django Logo" />
              </div>

              <div className='single-tech'>
                  <img  className='postgres' src={PostgresLogo} alt="Postgres Logo" />
              </div>
            </div>
            </div>

            <div className="right" id='shoppies-right'>
            <img loading="lazy"  className='shoppies-page' src={ExcessMaterialPage} alt="Shoppies Front Page" />
            <div className='web-sec'>
            <div className='web-group'>
              <a className='web-link' href='https://excess-material.netlify.app/' target='_blank'>To Website</a>
              <a className='web-arrow' href='https://excess-material.netlify.app/' target='_blank'>⟶</a>
            </div>
            </div>             
            </div>
            </div>
            </section>

            <section>
            <h1 className="shoppies">Shopify Shoppies</h1>
            <div className="project">
            <div className="left">
            <Element className='start-section' name="schatz" >
            <h2>❮❯ Shopify Challenge ❮❯</h2>
            </Element>
            <p>
              The Shopify Shoppies was a challenge presented by Shopify as part of an internship application.
              Shopify branched out to movie awards, the Shoppies. Because
              the Shoppies is a part of Shopify's business, it understandably would share the same design. I studied Shopify's color scheme, layout, and click effects.
              Allowing users to log in, this web application gives them an opportunity to nominate five of their favorite movies.
              Additionally, users can discover the top five winners and the total nominations received.
              <br />
              <br />
              Username: levij.app@gmail.com | Password: TestUser4444
            </p>

              <div className="focus">
              <h4>❯❯ OMDb Search</h4>
              <h4>❯❯ Authentication </h4>
              <h4>❯❯ Restful API </h4>
              </div>
            <div className='tech-used' id='schatz-tech'>
            <div className='single-tech'>
              <img loading="lazy"  src={HTMLLogo} alt="HTML Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={SassLogo} alt="Sass Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={JavaScriptLogo} alt="JavaScript Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={ReactLogo} alt="React Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={Auth0Logo} alt="Auth0 Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={OMDBLogo} alt="OMDB Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={PythonLogo} alt="Python Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={DjangoLogo} alt="Django Logo" />
              </div>

              <div className='single-tech'>
                  <img  className='postgres' src={PostgresLogo} alt="Postgres Logo" />
              </div>
            </div>
            </div>

            <div className="right" id='shoppies-right'>
            <img loading="lazy"  className='shoppies-page' src={ShoppiesPage} alt="Shoppies Front Page" />
            <div className='web-sec'>
            <div className='web-group'>
              <a className='web-link' href='https://shopify-shoppies.netlify.app/' target='_blank'>To Website</a>
              <a className='web-arrow' href='https://shopify-shoppies.netlify.app/' target='_blank'>⟶</a>
            </div>

            <div className='web-group'>
              <a className='web-link' href='https://github.com/LeviApp/Shoppies' target='_blank'>To Front-End Repo</a>
              <a className='web-arrow' href='https://github.com/LeviApp/Shoppies' target='_blank'>⟶</a>
            </div>

            <div className='web-group'>
              <a className='web-link' href='https://github.com/LeviApp/shoppiesbackend' target='_blank'>To Back-End Repo</a>
              <a className='web-arrow' href='https://github.com/LeviApp/shoppiesbackend' target='_blank'>⟶</a>
            </div>
            </div>             
            </div>
            </div>
            </section>

            <section>
            <h1 className="shoppies">Who Spoke The Quote?</h1>
            <div className="project">
            <div className="left">
            <Element className='start-section' name="schatz" >
            <h2>❮❯ Web Development ❮❯</h2>
            </Element>
            <p>
              Who Spoke The Quote? is a quotes application focused on implementing React Hooks. Emphasis was also placed
              on using component libraries, specifically, Carbon Components. Users can read, add, delete, and update famous quotes with images.
              Responsive layout has also been included in the project.
            </p>

              <div className="focus">
              <h4>❯❯ React Hooks </h4>
              <h4>❯❯ Carbon Components </h4>
              <h4>❯❯ Restful API </h4>
              </div>
            <div className='tech-used' id='schatz-tech'>
            <div className='single-tech'>
              <img loading="lazy"  src={HTMLLogo} alt="HTML Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={SCSSLogo} alt="SCSS Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={JavaScriptLogo} alt="JavaScript Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={ReactLogo} alt="React Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={CCLogo} alt="Carbon Components Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={OMDBLogo} alt="OMDB Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={PythonLogo} alt="Python Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={DjangoLogo} alt="Django Logo" />
              </div>

              <div className='single-tech'>
                  <img  className='postgres' src={PostgresLogo} alt="Postgres Logo" />
              </div>
            </div>
            </div>

            <div className="right" id='shoppies-right'>
            <img loading="lazy"  className='shoppies-page' src={WSTQPage} alt="Who Spoke The Quote Front Page" />
            <div className='web-sec'>
            <div className='web-group'>
              <a className='web-link' href='https://who-spoke-the-quote.netlify.app/' target='_blank'>To Website</a>
              <a className='web-arrow' href='https://who-spoke-the-quote.netlify.app/' target='_blank'>⟶</a>
            </div>

            <div className='web-group'>
              <a className='web-link' href='https://github.com/LeviApp/WhoSpokeTheQuote' target='_blank'>To Front-End Repo</a>
              <a className='web-arrow' href='https://github.com/LeviApp/WhoSpokeTheQuote' target='_blank'>⟶</a>
            </div>

            <div className='web-group'>
              <a className='web-link' href='https://github.com/LeviApp/QuotesDjango' target='_blank'>To Back-End Repo</a>
              <a className='web-arrow' href='https://github.com/LeviApp/QuotesDjango' target='_blank'>⟶</a>
            </div>
            </div>             
            </div>
            </div>
            </section>

            <section>
            <h1 className="ARCH">RegEx Rex</h1>
            <div className='project' id='rids'>
            <div className='left'>
            <Element className='start-section' name="reform" >
            <h2> ❮❯ E-Learning App ❮❯ </h2>
            </Element>
            <p>RegEx Rex is a project that focuses on teaching regular expressions.
              There is a sandbox where users can explore regular expressions. Furthermore, there is a section dedicated to teaching lessons.
              Each lesson comes with a mini challenge. Once a student passes all thirty-five lessons, they can return to any lesson.
              If a student gets stuck, they can look at the reference sheet.
              In addition to the Front End, RegEx Rex also includes a localized Back End using .NET Core. PostgreSQL is also implemented.</p>
              <div className="focus">
              <h4>❯❯ Local Storage</h4>
              <h4>❯❯ Ember App</h4>
              </div>
              <div className='tech-used'>
              <div className='single-tech'>
              <img loading="lazy"  src={EmberLogo} alt="Ember Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={HandlebarsLogo} alt="Handlebars Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={HTMLLogo} alt="HTML Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={JavaScriptLogo} alt="JavaScript Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={SassLogo} alt="CSS Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={CSharpLogo} alt="CSS Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={DotNetLogo} alt="CSS Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={PostgresLogo} alt="CSS Logo" />
              </div>
            </div>
            </div>
            <div className='right'>
            <img loading="lazy"  id='reform' src={RexPage} alt="Reform in Dust Storms Front Page" />
            <div className='web-sec'>
            <div className='web-group'>
              <a className='web-link' href='https://regexrex.netlify.app/' target='_blank'>To Website</a>
              <a className='web-arrow' href='https://regexrex.netlify.app/' target='_blank'>⟶</a>
            </div>

            <div className='web-group'>
              <a className='web-link' href='https://github.com/LeviApp/RegExRex' target='_blank'>To Front-End Repo</a>
              <a className='web-arrow' href='https://github.com/LeviApp/RegExRex' target='_blank'>⟶</a>
            </div>

            <div className='web-group'>
              <a className='web-link' href='https://github.com/LeviApp/RexBackend' target='_blank'>To Back-End Repo</a>
              <a className='web-arrow' href='https://github.com/LeviApp/RexBackend' target='_blank'>⟶</a>
            </div>
            </div>
            </div>
            </div>
            </section>

            <section>
            <h1 className="ARCH">Anagram Scram</h1>
            <div className='project' id='rids'>
            <div className='left'>
            <Element className='start-section' name="reform" >
            <h2> ❮❯ Game Development ❮❯ </h2>
            </Element>
            <p>AnagramScram is a word game using the Vue framework. This game takes users through increasingly more difficult animal words they must unscramble. The website includes ten levels and rewards bonus time based on the current score.
              The game includes javascript functionality that allows a player to see the correct and incorrect letters.
              It also provides a player the option to only reset incorrect letters. If a user guesses incorrectly or runs down the clock ten times, it is game over!
              The application uses local storage for persistent data.
              Responsive design is also implemented.</p>
              <div className="focus">
              <h4>❯❯ Local Storage</h4>
              <h4>❯❯ Vue App</h4>
              </div>
              <div className='tech-used'>
              <div className='single-tech'>
              <img loading="lazy"  src={VueLogo} alt="Vue Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={HTMLLogo} alt="HTML Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={JavaScriptLogo} alt="JavaScript Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={CSSLogo} alt="CSS Logo" />
              </div>
            </div>
            </div>
            <div className='right'>
            <img loading="lazy"  id='reform' src={AnagramPage} alt="Reform in Dust Storms Front Page" />
            <div className='web-sec'>
            <div className='web-group'>
              <a className='web-link' href='https://anagramscram.netlify.app/' target='_blank'>To Website</a>
              <a className='web-arrow' href='https://anagramscram.netlify.app/' target='_blank'>⟶</a>
            </div>

            <div className='web-group'>
              <a className='web-link' href='https://github.com/LeviApp/AnagramScram' target='_blank'>To Project Repo</a>
              <a className='web-arrow' href='https://github.com/LeviApp/AnagramScram' target='_blank'>⟶</a>
            </div>
            </div>
            </div>
            </div>
            </section>

            <section>
            <h1 className="ARCH">Reform in Dust Storms</h1>
            <div className='project' id='rids'>
            <div className='left'>
            <Element className='start-section' name="reform" >
            <h2> ❮❯ Responsive Behavior ❮❯ </h2>
            </Element>
            <p>Reform in Dust Storms is a website that gives the instructions for a detective game. Set in Old West Colorado, the player must discover who committed the crime, the weapon that was used, and the place of the crime.  The website
              consists of four main pages. The home page gives an overview of the entire game. There are three other pages that provide more details about the suspect, weapon, and place.
              This project focuses on responsive design principles of websites. The game itself has not been created yet.</p>

              <div className="focus">
              <h4>❯❯ Responsive Design</h4>
              <h4>❯❯ Angular App</h4>
              </div>
              <div className='tech-used'>
              <div className='single-tech'>
              <img loading="lazy"  src={HTMLLogo} alt="HTML Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={AngularLogo} alt="Angular Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={JavaScriptLogo} alt="JavaScript Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={TypeScriptLogo} alt="TypeScript Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={SCSSLogo} alt="SCSSLogo Logo" />
              </div>
            </div>
            </div>
            <div className='right'>
            <img loading="lazy"  id='reform' src={ReformPage} alt="Reform in Dust Storms Front Page" />
            <div className='web-sec'>
            <div className='web-group'>
              <a className='web-link' href='https://reforminduststorms.netlify.com/' target='_blank'>To Website</a>
              <a className='web-arrow' href='https://reforminduststorms.netlify.com/' target='_blank'>⟶</a>
            </div>

            <div className='web-group'>
              <a className='web-link' href='https://github.com/LeviApp/User-Interface-Project-Week' target='_blank'>To Project Repo</a>
              <a className='web-arrow' href='https://github.com/LeviApp/User-Interface-Project-Week' target='_blank'>⟶</a>
            </div>
            </div>
            </div>
            </div>
            </section>

            <section>
            <h1 className="TRACTION"> Traction </h1>

              <div className='project' id='traction-project'>
              <div className='left'>
              <Element className='start-section' name="traction" >
                <h2>❮❯ Workouts Application ❮❯</h2>
              </Element>
              <p>
                Traction is an app that gives users
                the ability to keep track of their workouts. It allows users to add
                body sections, along with exercises that build those areas. Additionally,
                users can add their workouts to a calendar, all while recording personal workout goals.
                This was a group project focused on implementing web development solutions
                for a real world situation.
              </p>

              <div className="focus">
              <h4>❯❯ Logo Design </h4>
              <h4>❯❯ UX</h4>
              <h4>❯❯ Calendar</h4>
              <h4>❯❯ Trello</h4>


              </div>
              <div className='tech-used'>
                  <div className='single-tech'>
                  <img src={ReactLogo} alt="React Logo" />
                  </div>

                  <div className='single-tech'>
                  <img  src={SassLogo} alt="Sass Logo" />
                  </div>

                  <div className='single-tech'>
                  <img  className='fullcalendar' src={FullCalendarLogo} alt="FullCalendar Logo" />
                  </div>

                  <div className='single-tech'>
                  <img className='moment' src={MomentLogo} alt="Moment Logo" />
                  </div>

                  <div className='single-tech'>
                  <img  src={ReduxLogo} alt="Redux Logo" />
                  </div>

                  <div className='single-tech'>
                  <img  className='javascript' src={JavaScriptLogo} alt="JavaScript Logo" />
                  </div>

                  <div className='single-tech'>
                  <img  src={HTMLLogo} alt="HTML Logo" />
                  </div>

                  <div className='single-tech'>
                  <img src={MarkDownLogo} alt="MarkDown Logo" />
                  </div>

                  <div className='single-tech'>
                  <img  src={Auth0Logo} alt="Auth0 Logo" />
                  </div>

                  <div className='single-tech'>
                  <img  className='postgres' src={PostgresLogo} alt="Postgres Logo" />
                  </div>
              </div>
              </div>
              <div className='right'>
              <img src={TractionPage} alt="Traction Front Page" />
              <div className='web-sec'>
              {/* <div className='web-group'>
                <a className='web-link' href='https://traction-app.netlify.com/' target='_blank'>To Website</a>
                <a className='web-arrow' href='https://traction-app.netlify.com/' target='_blank'>⟶</a>
              </div>

              <div className='web-group'>
              <a className='web-link' href='https://github.com/LeviApp/labspt2-workout-tracker' target='_blank'>To Project Repo</a>
              <a className='web-arrow' href='https://github.com/LeviApp/labspt2-workout-tracker' target='_blank'>⟶</a>
              </div> */}

              <div className='web-group'>
              <a className='web-link' href='https://www.youtube.com/watch?v=7CI2e6HL_aw&list=PLWX9jswdDQ0VdzivbZJ2fCTfJESj8Jfos&index=10&t=0s' target='_blank'>To Demo Video</a>
              <a className='web-arrow' href='https://www.youtube.com/watch?v=7CI2e6HL_aw&list=PLWX9jswdDQ0VdzivbZJ2fCTfJESj8Jfos&index=10&t=0s' target='_blank'>⟶</a>
              </div>
              </div>
              </div>
              </div>

            <div className='project'>
            <div className='left'>
            <h2>❮❯ Traction Logo ❮❯</h2>
            <div className="t-logos-drafts">
                <div>
                <img loading="lazy"  className='traction-logo-draft0' src={TractionDraft0} alt="traction-logo-draft0" />
                <img loading="lazy"  className='traction-logo-draft00' src={TractionDraft00} alt="traction-logo-draft00" />
                <img loading="lazy"  className='traction-logo-draft1' src={TractionDraft1} alt="traction-logo-draft1" />
                <img loading="lazy"  className='traction-logo-draft2' src={TractionDraft2} alt="traction-logo-draft2" />
                <img loading="lazy"  className='traction-logo-draft3' src={TractionDraft3} alt="traction-logo-draft3" />
                <img loading="lazy"  className='traction-logo-draft4' src={TractionDraft4} alt="traction-logo-draft4" />      
                <img loading="lazy"  className='traction-logo-draft5' src={TractionDraft5} alt="traction-logo-draft5" />
                <img loading="lazy"  className='traction-logo-draft6' src={TractionDraft6} alt="traction-logo-draft6" />

                <div className='final'>
                <img loading="lazy"  className='final-traction-logo' src={Traction} alt="traction-logo" />
                <h6>Hover Me</h6>
                </div>
                <div className='final'>
                <img loading="lazy"  className='final-traction-logo' src={TractionPremium} alt="traction-logo-premium" /> 
                <h6>Hover Me</h6>
                </div>
                </div>    


            </div>
            </div>
            </div>
            <div className='project'>
            <div className='right'>
            <h2>❮❯ Calendar ❮❯</h2>

            <img loading="lazy"  className='calendar' src={Calendar} alt="Calendar" />
            </div>
            </div>
            <div className='project'>
            <div className='left' id='scheduled'>
            <h2> ❮❯ Scheduled Routine ❮❯ </h2>
            <img loading="lazy"  className='mapped' src={Mapped} alt="mapped event" />
            <div className='focus' id='check-box'>
            <div className='checkG'>
            <h4> ❯❯ Checkmark Box</h4>
            <div className='check-group'>
            <Checkbox />
            <h6>Click Me</h6>
            </div>    
            </div>
            <h4> ❯❯ JavaScript Map Implementations</h4>
            </div>
            </div>
            </div>   
            </section>
            
            <section>
            <h1 className="QUOTES"> Quotes 4 Life </h1>
            <div className="project">
            <div className='left'>
            <Element className='start-section' name="quotes" >
            <h2>❮❯ Web Development ❮❯</h2>
            </Element>

              <p>
                Quotes 4 Life is a website that allows users to post
                their favorite quotes from their heroes. Users can add, edit,
                and delete quotes. Users can add their own image url, or keep
                the default one. This project focused on both front-end and back-end
                web principles.
              </p>

              <div className="focus">
              <h4>❯❯ Front End</h4>
              <h4>❯❯ Back End</h4>
              <h4>❯❯ Restful API</h4>
              </div>
            <div className='tech-used'>
              <div className='single-tech'>
              <img loading="lazy"  src={ReactLogo} alt="React Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={CSSLogo} alt="CSS Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={HTMLLogo} alt="HTML Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  className='javascript' src={JavaScriptLogo} alt="JavaScript Logo" />
              </div>

              <div className='single-tech'>
                  <img  loading="lazy" className='node' src={NodeLogo} alt="NodeJS Logo" />
              </div>

              <div className='single-tech'>
                  <img  loading="lazy" className='postgres' src={PostgresLogo} alt="Postgres Logo" />
              </div>
            </div>
            </div>

            <div className="right">
            <img loading="lazy"  id="quotes-page" src={QuotesPage} alt="Quotes Front Page" />
            <div className='web-sec'>
            <div className='web-group'>
              <a className='web-link' href='https://quotes4life.netlify.app/home' target='_blank'>To Website</a>
              <a className='web-arrow' href='https://quotes4life.netlify.app/home' target='_blank'>⟶</a>
            </div>

            <div className='web-group'>
              <a className='web-link' href='https://github.com/LeviApp/Quotes4LifeFrontend' target='_blank'>To Front-End Repo</a>
              <a className='web-arrow' href='https://github.com/LeviApp/Quotes4LifeFrontend' target='_blank'>⟶</a>
            </div>

            <div className='web-group'>
              <a className='web-link' href='https://github.com/LeviApp/QuotesDjango' target='_blank'>To Back-End Repo</a>
              <a className='web-arrow' href='https://github.com/LeviApp/QuotesDjango' target='_blank'>⟶</a>
            </div>
            </div>
            </div>
            </div>
            </section>

            <section>
            <h1 className="automata">Automaton</h1>
            <div className='project'>
            <div className='left'>
            <Element className='start-section' name="automaton" >
            <h2> ❮❯ Conway's Game ❮❯ </h2>
            </Element>
            <p>
              Automaton is a project that implements Computer Science's topic of Cellular Automata. Automaton
              takes the rules of Conway's Game of Life and presents it in a visual manner.
            </p>
            <div className='automaton-focus'>
              <h4>❯❯ Restart </h4>  
              <p>
              ❯ Restarts
              the animation
              </p>
            </div>

            <div className='automaton-focus'>
              <h4>❯❯ Rewind </h4>  
              <p>
              ❯ Reverses the animation
              </p>
            </div>

            <div className='automaton-focus'>
              <h4>❯❯ Loop </h4>  
              <p>
              ❯ Keeps animation going
              </p>
            </div>

            <div className='automaton-focus'>
              <h4>❯❯ Playing / Paused </h4>  
              <p>
              ❯ Plays or pauses the animation
              </p>
            </div>

            <div className='automaton-focus'>
              <h4>❯❯ Random </h4>  
              <p>
              ❯ Changes the starting pattern of the animation
              </p>
            </div>

            <div className='automaton-focus'>
              <h4>❯❯ Color Scheme </h4>  
              <p>
              ❯ Changes the color scheme of the animation
              </p>
            </div>

            <div className='automaton-focus'>
              <h4>❯❯ Speed </h4>  
              <p>
              ❯ Changes the speed of the animation
              </p>
            </div>
            <div className='tech-used'>
              <div className='single-tech'>
              <img loading="lazy"  src={PythonLogo} alt="Python Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={PygameLogo} alt="Pygame Logo" />
              </div>
            </div>
            </div>
            <div className='right' id='auto'>
            <div className='video'>
              <iframe src="https://www.youtube.com/embed/fGX7U9Sx8S0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"></iframe>
            </div>
            <div className='web-sec'>
            <div className='web-group'>
              <a className='web-link' href='https://github.com/LeviApp/Cellular-Automata' target='_blank'>To Project Repo</a>
              <a className='web-arrow' href='https://github.com/LeviApp/Cellular-Automata' target='_blank'>⟶</a>
            </div>
            </div>
            </div>
            </div>
            </section>

            <section>
            <h1 className="schatz">Schatzinsel</h1>
            <div className="project">
            <div className="left">
            <Element className='start-section' name="schatz" >
            <h2>❮❯ Computer Science ❮❯</h2>
            </Element>
            <p>
              Schatzinsel is an adventure game. Placed on a treasure island, a player must gather treasure to win the ultimate prize, gold.
              A player can move around the island collecting valuables that can be sold for money. Once enough money is earned, a player can
              change their name to discover the secret location of the mining location. Players can earn new abilities and upgrades
              for their character along the way.
            </p>

              <div className="focus">
              <h4>❯❯ Blockchain </h4>
              <h4>❯❯ Front End </h4>
              <h4>❯❯ Graphs </h4>
              </div>
            <div className='tech-used' id='schatz-tech'>
              <div className='single-tech'>
              <img loading="lazy"  src={ReactLogo} alt="React Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={p5Logo} alt="p5 Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={JavaScriptLogo} alt="JavaScript Logo" />
              </div>
              
              <div className='single-tech'>
              <img loading="lazy"  src={HTMLLogo} alt="HTML Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={SassLogo} alt="Sass Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={PostgresLogo} alt="Postgres Logo" />
              </div>
            </div>
            </div>

            <div className="right" id='schatz'>
            <img loading="lazy"  className='schatz-page' src={SchatzPage} alt="Schatzinsel Front Page" />
            <div className='web-sec'>
            <div className='web-group'>
              <a className='web-link' href='https://schatzinsel.netlify.com/' target='_blank'>To Website</a>
              <a className='web-arrow' href='https://schatzinsel.netlify.com/' target='_blank'>⟶</a>
            </div>

            <div className='web-group'>
              <a className='web-link' href='https://github.com/LeviApp/CS-Build-Week-2' target='_blank'>To Front-End Repo</a>
              <a className='web-arrow' href='https://github.com/LeviApp/CS-Build-Week-2' target='_blank'>⟶</a>
            </div>

            <div className='web-group'>
              <a className='web-link' href='https://github.com/LeviApp/CSProject-Backend' target='_blank'>To Back-End Repo</a>
              <a className='web-arrow' href='https://github.com/LeviApp/CSProject-Backend' target='_blank'>⟶</a>
            </div>
            </div>              
            </div>
            </div>
            </section>

            <section>
            <h1 className="schatz">Roman Roofing</h1>
            <div className="project">
            <div className="left">
            <Element className='start-section' name="schatz" >
            <h2>❮❯ Cost Estimator ❮❯</h2>
            </Element>
            <p>
              Roman Roofing is a project that I built to test my ability to learn new tech stacks. Using a real roofing company in Florida, I studied aspects of the company. I recognized a need that could be solved with a web application.
              Allowing users to log in, this simple web application allows them to create and delete roofing options to compare prices.
              The front end is completed with Angular, a framework that I am exploring. The back end is completed with Laravel and MySQL, a
              framework I learned from scratch. I implemented bootstrap in this web application. Currently, this project is private. 
            </p>

              <div className="focus">
              <h4>❯❯ Restful API </h4>
              <h4>❯❯ Authentication </h4>
              <h4>❯❯ Bootstrap </h4>
              </div>
            <div className='tech-used' id='schatz-tech'>
            <div className='single-tech'>
              <img loading="lazy"  src={HTMLLogo} alt="HTML Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={AngularLogo} alt="Angular Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={JavaScriptLogo} alt="JavaScript Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={TypeScriptLogo} alt="TypeScript Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={SCSSLogo} alt="SCSSLogo Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={PHPLogo} alt="PHP Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={LaravelLogo} alt="Laravel Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={MySQLLogo} alt="p5 Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={Auth0Logo} alt="Auth0 Logo" />
              </div>

              <div className='single-tech'>
              <img loading="lazy"  src={BootstrapLogo} alt="Bootstrap Logo" />
              </div>
            </div>
            </div>

            <div className="right" id='schatz'>
            <img loading="lazy"  className='schatz-page' src={RomanRoofingPage} alt="Schatzinsel Front Page" />             
            </div>
            </div>
            </section>
        </div>


        )
    }
}

export default Dev