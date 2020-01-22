import React, { Component } from 'react';

import './SASS/About.sass';

import Photo from './img/Levi.png'
import DPSLogo from './img/DPSLogo.png'
import NCTILogo from './img/NCTILogo.png'
import AdaptecLogo from './img/AdaptecLogo.png'

import CAALogo from './img/CAALogo.png'
import RRCCLogo from './img/RRCCLogo.png'
import MSULogo from './img/MSULogo.png'
import UCDLogo from './img/UCDLogo.png'
import LambdaLogo from './img/LambdaLogo.png'

import UniqueBrain from './img/UniqueBrain.png'
import NumberSystem from './img/NumberSystem.png'
import German from './img/German.png'
import Chess from './img/Chess.png'


import { Link, DirectLink, Element , Events, animateScroll, scrollSpy, scroller } from 'react-scroll'


class About extends Component {

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
  
        const winHeight = window.innerHeight || (document.documentElement || document.body).clientHeight
        const docHeight = document.body.clientHeight
        const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
        const trackLength = docHeight - winHeight
        const percentScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
      console.log(percentScrolled + '% scrolled')
        const percent = `${(percentScrolled/49)*100}%`
        const number = percentScrolled/49
        const number2 = ((-49 + percentScrolled)/15)
        const percent2 = `${((-49 + percentScrolled)/15)*100}%`
        const percent3 = `${((-65 + percentScrolled)/15)*100}%`
        const number3 = ((-65 + percentScrolled)/15)
        const percent4 = `${((-82 + percentScrolled)/15)*100}%`
        const number4 = ((-82 + percentScrolled)/15)
  
  
        console.log('this is how percentScrolled', percentScrolled, percent)
        const a = document.getElementsByClassName('arrows_1')[0]
        const b = document.getElementsByClassName('second')[0]
        const c = document.getElementsByClassName('arrows_2')[0]
        const d = document.getElementsByClassName('third')[0]
        const e = document.getElementsByClassName('arrows_3')[0]
        const f = document.getElementsByClassName('fourth')[0]
        const g = document.getElementsByClassName('arrows_4')[0]
        const h = document.getElementsByClassName('fifth')[0]
  
  
      if (a !== undefined && b !== undefined && c !== undefined && d !== undefined && e !== undefined ) {
        console.log(a, 'Aaaaaa')
        a.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 ${percent} , #D4D4D4 ${percent}, #D4D4D4 100%)`
  
        if (percentScrolled >= 49) {
            b.style.color = `#4EC9B0`
  
            c.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 ${percent2} , #D4D4D4 ${percent2}, #D4D4D4 100%)`
        }
        else {
            b.style.color = `#D4D4D4`
            c.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 0% , #D4D4D4 0%, #D4D4D4 100%)`
  
        }
        if (percentScrolled >= 65) {
            d.style.color = `#4EC9B0`
  
            e.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 ${percent3} , #D4D4D4 ${percent3}, #D4D4D4 100%)`
        }
        else {
            d.style.color = `#D4D4D4`
            e.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 0% , #D4D4D4 0%, #D4D4D4 100%)`
  
        }
  
        if (percentScrolled >= 82) {
          f.style.color = `#4EC9B0`
  
          g.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 ${percent4} , #D4D4D4 ${percent4}, #D4D4D4 100%)`
      }
      else {
          f.style.color = `#D4D4D4`
          g.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 0% , #D4D4D4 0%, #D4D4D4 100%)`
  
      }
  
      if (percentScrolled >= 99) {
        h.style.color = `#4EC9B0`
  
    }
    else {
        h.style.color = `#D4D4D4`
  
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
            <div className='about'>
                <div className='contents'>
                    <h2 onClick={() => {this.scrollTo('overview', -200)}}className='all_sections on_topic'>
                    Overview
                    </h2>
                    <h3 className='arrows arrows_1'>❯❯❯❯❯</h3>

                    <h2 onClick={() => {this.scrollTo('work', -200)}} className='all_sections second'>
                    Work Experience
                    </h2>
                    <h3 className='arrows arrows_2'>❯❯❯❯❯</h3>
                    <h2 onClick={() => {this.scrollTo('education', -200)}} className='all_sections third'>
                    Education
                    </h2>
                    <h3 className='arrows arrows_3'>❯❯❯❯❯</h3>

                    <h2 onClick={() => {this.scrollTo('achieve', -200)}} className='all_sections fourth'>
                    Achievements
                    </h2>
                    <h3 className='arrows arrows_4'>❯❯❯❯❯</h3>

                    <h2 onClick={() => {this.scrollTo('unique', -200)}} className='all_sections fifth'>
                    Unique
                    </h2>
                </div>
                <h1 className="QUOTES"> Levi Appenfelder </h1>

                <section>
            <div className="about-sect">
            <div className='left'>
            <Element className='start-section' name="overview" >
            <h2>❮❯ Overview ❮❯</h2>
            </Element>

              <h3>
              I am a software engineer and graphic designer
                    passionate about developing people, just as much as I am about building websites.
                    Years of graphic design experience allows me to create sleek user
                    interfaces to complement user-friendly functionality.
              </h3>
            </div>

            <div className="right">
            <img className="quotes-page" src={Photo} />
            </div>
            </div>
            </section>

            <section>
            <div className="about-sect">
            <div className='left'>
            <Element className='start-section' name="work" >
            <h2>❮❯ Work Experience ❮❯</h2>
            </Element>

              <p>
              I have worked as a graphic designer, illustrator, teacher, and content developer
              in education-based companies. I enjoy taking complex ideas and
              breaking them down into simple concepts, often through visual means.
              My life has been dedicated to building people into the best versions
              of themselves with every project I am a part of.
              </p>

              <div className='automaton-focus'>
              <h4>❯❯ DPS </h4>  
              <p>
              ❯ Taught struggling students math concepts
              </p>
            </div>

              <div className='automaton-focus'>
              <h4>❯❯ NCTI </h4>  
              <p>
              ❯ Built infographics
              <br/>
              ❯ Redeveloped several Math courses
              </p>
              
            </div>

            <div className='automaton-focus'>
              <h4>❯❯ Adaptec Prosthetics </h4>  
              <p>
              ❯ Built instructional pamphlets
              </p>
            </div>

            <div className='automaton-focus'>
              <h4>❯❯ MSU Denver </h4>  
              <p>
              ❯ Built educational material for the blind students
              <br/>
              ❯ Illustrated STEM related images for a workbook
              </p>
            </div>

            <div className='automaton-focus'>
              <h4>❯❯ RRCC </h4>  
              <p>
              ❯ Explained complex math problems to struggling students
              </p>
            </div>
            </div>

            <div className="right">
            <div className='tech-used'>
                <div className='single-tech'>
                <img src={DPSLogo} />
                </div>
                <div className='single-tech'>
                <img src={NCTILogo} />
                </div>
                <div className='single-tech'>
                <img src={AdaptecLogo} />
                </div>

                <div className='single-tech'>
                <img src={RRCCLogo} />
                </div>

                <div className='single-tech'>
                <img src={MSULogo} />
                </div>
            </div>
            <div className='web-sec'>
            <div className='web-group'>
              <a className='web-link' href='https://levijonas.app/art'>To Art Portfolio</a>
              <a className='web-arrow' href='https://levijonas.app/art'>⟶</a>
            </div>
            </div>
            </div>
            </div>
            </section>

            <section>
            <div className="about-sect">
            <div className='left'>
            <Element className='start-section' name="education" >
            <h2>❮❯ Education ❮❯</h2>
            </Element>

              <p>
              My education has focused on Graphic Design, Science, and Web Development.
              <br/>
              <br/>
              Lambda School was where I studied Web Development. I focused on three main categories: Frontend, Backend, Computer Science.

                Frontend included topics such as User Interface, Responsive Design, and Javascript.
                Backend included topics such as API Creation, Migrations, and NodeJS.
                Computer Science included topics such as Data Structures, Blockchain, and Python. 
              <br/>
              <br/>
              At MSU Denver, I concentrated my studies in the sciences, specifically biology.
              Classes included Genetics, Immunology, and Anatomy.
              <br/>
              <br/>
              Red Rocks Community College was the school I received most of my graphic design and media training.
              Classes included Adobe Photoshop, Adobe Illustrator, and Final Cut Pro. 
              </p>

              <div className='automaton-focus'>
              <h4>❯❯ Lambda School </h4>  
              <p>
              ❯ Computer Science, Full-Stack Web Development
              </p>
            </div>

              <div className='automaton-focus'>
              <h4>❯❯ MSU Denver </h4>  
              <p>
              ❯ Bachelor of Science, Scientific Graphics
              </p>
              
            </div>

            <div className='automaton-focus'>
              <h4>❯❯ RRCC </h4>  
              <p>
              ❯ Associates of General Studies, Multimedia Tech 
              </p>
            </div>
            </div>

            <div className="right">
            <div className='tech-used'>
                <div className='single-tech'>
                <img src={LambdaLogo} />
                </div>

                <div className='single-tech'>
                <img src={MSULogo} />
                </div>

                <div className='single-tech'>
                <img src={RRCCLogo} />
                </div>
            </div>
            <div className='web-sec'>
            <div className='web-group'>
              <a className='web-link' href='https://levijonas.app/art'>To Art Portfolio</a>
              <a className='web-arrow' href='https://levijonas.app/art'>⟶</a>
            </div>
            </div>
            </div>
            </div>
            </section>

            <section>
            <div className="about-sect">
            <div className='left'>
            <Element className='start-section' name="achieve" >
            <h2>❮❯ Achievements ❮❯</h2>
            </Element>

              <p>
              I was honored to receive several awards for my efforts.
              <br />
              <br />
              My latest achievement was from MSU Denver where I won the Provost's Award,
              an Outstanding Graduate Award at my graduation. I was honored to give the student
              address in December, 2016.
              <br />
              <br />
              At RRCC, I was given the Outstanding Graduate of the Year Award. I spoke the student
              address at my graduation in May, 2011. 
              <br />
              <br />
              At CAA, I was the High School Valedictorian. My college advisor nominated me for the
              National Scholar Award, and I was honored to be rewarded with it.                          
              </p>

              <div className='automaton-focus'>
              <h4>❯❯ MSU Denver 2016 </h4>  
              <p>
              ❯ Provost's Award / Outstanding Graduate Award
              </p>
              
              </div>

            <div className='automaton-focus'>
              <h4>❯❯ RRCC 2011 </h4>  
              <p>
              ❯ Outstanding Graduate of the Year Award
              </p>
            </div>

            <div className='automaton-focus'>
              <h4>❯❯ CAA 2008 </h4>  
              <p>
              ❯ High School Valedictorian
              <br />
              ❯ National Scholar Award
              </p>
            </div>
            </div>

            <div className="right">
            <div className='tech-used'>
                <div className='single-tech'>
                <img src={MSULogo} />
                </div>

                <div className='single-tech'>
                <img src={RRCCLogo} />
                </div>

                <div className='single-tech'>
                <img src={CAALogo} />
                </div>
            </div>
            </div>
            </div>
            </section>

            <section>
            <div className="about-sect">
            <div className='left'>
            <Element className='start-section' name="unique" >
            <h2>❮❯ Unique ❮❯</h2>
            </Element>

              <p>
              Here are a few unique facts about me.
              </p>

              <div className='automaton-focus'>
              <h4>❯❯ Brain </h4>  
              <p>
              ❯ I am missing a third of my brain.
              <br/>
              ❯ Doctors said I would never walk or talk.
              </p>
              </div>

            <div className='automaton-focus'>
              <h4>❯❯ Number System </h4>  
              <p>
              ❯ Each number 0-99 has an image associated with it.
              </p>
            </div>

            <div className='automaton-focus'>
              <h4>❯❯ German </h4>  
              <p>
              ❯ I am faithful investing time in learning German.
              </p>
            </div>

            <div className='automaton-focus'>
              <h4>❯❯ Chess </h4>  
              <p>
              ❯ Chess is a hobby of mine.
              </p>
            </div>
            </div>

            <div className="right">
            <div className='tech-used'>
                <div className='single-tech'>
                <img src={UniqueBrain} />
                </div>

                <div className='single-tech'>
                <img src={NumberSystem} />
                </div>

                <div className='single-tech'>
                <img src={German} />
                </div>

                <div className='single-tech'>
                <img src={Chess} />
                </div>
            </div>
            </div>
            </div>
            </section>
            </div>


        )
    }
}

export default About