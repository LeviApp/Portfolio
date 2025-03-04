import React, { Component } from 'react';

import './SASS/About.sass';

import Photo from './img/Levi.png'
import DPSLogo from './img/DPSLogo.png'
import NCTILogo from './img/NCTILogo.png'
import AdaptecLogo from './img/AdaptecLogo.png'
import RocketSoftwareLogo from './img/RocketSoftwareLogo.png'
import ExcessMaterialLogo from './img/ExcessMaterialLogo.png'
import GenRAITLogo from './img/GenRAITLogo.jpg'
import DataAnnotationTechLogo from './img/DataAnnotationTechLogo.webp'


import CAALogo from './img/CAALogo.png'
import RRCCLogo from './img/RRCCLogo.png'
import MSULogo from './img/MSULogo.png'
import UCDLogo from './img/UCDLogo.png'
import LambdaLogo from './img/LambdaLogo.png'

import UniqueBrain from './img/UniqueBrain.png'
import NumberSystem from './img/NumberSystem.png'
import German from './img/German.png'
import Spanish from './img/MexicoFlag.jpg'
import Chess from './img/Chess.png'


import { Link, DirectLink, Element, Events, animateScroll, scrollSpy, scroller } from 'react-scroll'


class About extends Component {

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
  //       const percent = `${(percentScrolled/24)*100}%`
  //       const number = percentScrolled/24
  //       const number2 = ((-26 + percentScrolled)/15)
  //       const percent2 = `${((-26 + percentScrolled)/15)*100}%`
  //       const percent3 = `${((-49 + percentScrolled)/24)*100}%`
  //       const number3 = ((-49 + percentScrolled)/24)
  //       const percent4 = `${((-73 + percentScrolled)/25)*100}%`
  //       const number4 = ((-73 + percentScrolled)/25)


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

  //       if (percentScrolled >= 24) {
  //           b.style.color = `#4EC9B0`

  //           c.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 ${percent2} , #D4D4D4 ${percent2}, #D4D4D4 100%)`
  //       }
  //       else {
  //           b.style.color = `#D4D4D4`
  //           c.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 0% , #D4D4D4 0%, #D4D4D4 100%)`

  //       }
  //       if (percentScrolled >= 47) {
  //           d.style.color = `#4EC9B0`

  //           e.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 ${percent3} , #D4D4D4 ${percent3}, #D4D4D4 100%)`
  //       }
  //       else {
  //           d.style.color = `#D4D4D4`
  //           e.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 0% , #D4D4D4 0%, #D4D4D4 100%)`

  //       }

  //       if (percentScrolled >= 73) {
  //         f.style.color = `#4EC9B0`

  //         g.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 ${percent4} , #D4D4D4 ${percent4}, #D4D4D4 100%)`
  //     }
  //     else {
  //         f.style.color = `#D4D4D4`
  //         g.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 0% , #D4D4D4 0%, #D4D4D4 100%)`

  //     }

  //     if (percentScrolled >= 98) {
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
    return (
      <div className='about'>
        {/* <div className='contents'>
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
                </div> */}
        <h1> Levi Appenfelder </h1>

        <section class="firstSect">
          <div className="about-sect">
            <div className='left'>
              <Element className='start-section' name="overview" >
                <h2>❮❯ Overview ❮❯</h2>
              </Element>

              <p>
              I am a software engineer with expertise in AI model training, full-stack development, and user experience design. I am skilled in Angular, React, Node.js, and Django, having delivered 150+ features, improved UI/UX, and written comprehensive end-to-end tests. My experience in AI includes training and evaluating models, ensuring accuracy, structure, and data retention.
              <br />
              <br />
With a foundation in graphic design, I focus on creating sleek, user-friendly interfaces that improve functionality. My background as an educator also strengthens my ability to break down complex ideas and mentor others, empowering users through intuitive technology. I am passionate about problem-solving, optimizing workflows, and delivering impactful solutions that drive user success.
              </p>
            </div>

            <div className="right">
              <img className="self" src={Photo} alt="Levi Appenfelder Photo" />
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
              I have worked across diverse industries as a software engineer, AI model trainer, graphic designer, and educator. This experience has given me a unique skill set in developing full-stack applications, training AI models, and simplifying complex concepts through visual design.
              </p>

              <div className='about-focus'>
                <h4>❯❯ DataAnnotation Tech</h4>
                <p>
                  ❯ Trained AI models for audio, video, image, and text data
                  <br />
                  ❯ Evaluated models for clarity, structure, and relevance
                  <br />
                  ❯ Assessed conversation data retention
                  <br />
                  ❯ Researched AI model claims to verify accuracy
                </p>
              </div>

              <div className='about-focus'>
                <h4>❯❯ GenRAIT</h4>
                <p>
                  ❯ Integrated AI functionality into the platform
                  <br />
                  ❯ Enhanced UX design within an Angular application
                  <br />
                  ❯ Wrote hundreds of Cypress tests for the front end
                  <br />
                  ❯ Developed API requests in Node.js
                  <br />
                  ❯ Documented API requests using Swagger
                  <br />
                  ❯ Delivered 100+ features in the Angular front end
                  <br />
                  ❯ Delivered 50+ features in the Node.js back end
                </p>
              </div>

              <div className='about-focus'>
                <h4>❯❯ Excess Material</h4>
                <p>
                  ❯ Developed an online marketplace using Angular and Django
                  <br />
                  ❯ Implemented Firebase for image uploads
                  <br />
                  ❯ Developed search/filter functionality
                  <br />
                  ❯ Implemented form validation and email support
                </p>
              </div>

              <div className='about-focus'>
                <h4>❯❯ Rocket Software</h4>
                <p>
                  ❯ Built UI Dashboard using React and Spring Boot
                  <br />
                  ❯ 10 tickets pushed to production | Agile/Scrum workflow
                  <br />
                  ❯ Improved the productivity of UI Build Time by 28%
                  <br />
                  ❯ Collaborated with coworkers across 5 time zones
                  <br />
                  ❯ Worked closely with UX team on component design
                </p>
              </div>

              <div className='about-focus'>
                <h4>❯❯ DPS </h4>
                <p>
                  ❯ Taught math, improving student understanding
                </p>
              </div>

              <div className='about-focus'>
                <h4>❯❯ NCTI </h4>
                <p>
                  ❯ Built infographics
                  <br />
                  ❯ Redeveloped several Math courses
                </p>

              </div>

              <div className='about-focus'>
                <h4>❯❯ Adaptec Prosthetics </h4>
                <p>
                  ❯ Created instructional pamphlets for product use
                </p>
              </div>

              <div className='about-focus'>
                <h4>❯❯ MSU Denver </h4>
                <p>
                  ❯ Built educational material for the blind students
                  <br />
                  ❯ Illustrated STEM related images for a workbook
                </p>
              </div>

              <div className='about-focus'>
                <h4>❯❯ RRCC </h4>
                <p>
                  ❯ Provided math tutoring for struggling students
                </p>
              </div>
            </div>

            <div className="right">
              <div className='tech-used'>
              <div className='single-tech'>
                  <img loading="lazy" src={DataAnnotationTechLogo} alt="DPS Logo" />
                </div>
                <div className='single-tech'>
                  <img loading="lazy" src={GenRAITLogo} alt="DPS Logo" />
                </div>
                <div className='single-tech'>
                  <img loading="lazy" src={ExcessMaterialLogo} alt="DPS Logo" />
                </div>
                <div className='single-tech'>
                  <img loading="lazy" src={RocketSoftwareLogo} alt="DPS Logo" />
                </div>
                <div className='single-tech'>
                  <img loading="lazy" src={DPSLogo} alt="DPS Logo" />
                </div>
                <div className='single-tech'>
                  <img loading="lazy" src={NCTILogo} alt="NCTI Logo" />
                </div>
                <div className='single-tech'>
                  <img loading="lazy" src={AdaptecLogo} alt="Adaptec Prosthetics Logo" />
                </div>

                <div className='single-tech'>
                  <img loading="lazy" src={RRCCLogo} alt="RRCC Logo" />
                </div>

                <div className='single-tech'>
                  <img loading="lazy" src={MSULogo} alt="MSU Logo" />
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
               My education blends graphic design, science, and web development.
              </p>

              <div className='about-focus'>
                <h4>❯❯ Lambda School </h4>
                <p>
                  ❯ Computer Science, Full-Stack Web Development
                  <br />
                  ❯ Front End (UI, Responsive Design, JavaScript)
                  <br />
                  ❯ Back End (API Creation, Node.js)
                  <br />
                  ❯ Computer Science (Data Structures, Blockchain, Python)
                </p>
              </div>

              <div className='about-focus'>
                <h4>❯❯ MSU Denver </h4>
                <p>
                  ❯ Bachelor of Science, Scientific Graphics
                  <br />
                  ❯ Biology (Genetics, Immunology, Anatomy, ...)
                </p>

              </div>

              <div className='about-focus'>
                <h4>❯❯ RRCC </h4>
                <p>
                  ❯ Associates of General Studies, Multimedia Tech
                  <br />
                  ❯ Graphic Design (Photoshop, Illustrator, Final Cut Pro, ...)
                </p>
              </div>
            </div>

            <div className="right">
              <div className='tech-used'>
                <div className='single-tech'>
                  <img loading="lazy" src={LambdaLogo} alt="Lambda School Logo" />
                </div>

                <div className='single-tech'>
                  <img loading="lazy" src={MSULogo} alt="MSU Logo" />
                </div>

                <div className='single-tech'>
                  <img loading="lazy" src={RRCCLogo} alt="RRCC Logo" />
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
              I have been honored with several awards throughout my education and career.
              </p>

              <div className='about-focus'>
                <h4>❯❯ MSU Denver (2016) </h4>
                <p>
                  ❯ Provost’s Award, Outstanding Graduate Award
                  <br />
                  ❯ Delivered the student address at graduation
                </p>

              </div>

              <div className='about-focus'>
                <h4>❯❯ RRCC (2011) </h4>
                <p>
                  ❯ Outstanding Graduate of the Year Award
                  <br />
                  ❯ Delivered the student address at graduation
                </p>
              </div>

              <div className='about-focus'>
                <h4>❯❯ CAA (2008) </h4>
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
                  <img loading="lazy" src={MSULogo} alt="MSU Logo" />
                </div>

                <div className='single-tech'>
                  <img loading="lazy" src={RRCCLogo} alt="RRCC Logo" />
                </div>

                <div className='single-tech'>
                  <img loading="lazy" src={CAALogo} alt="CAA Logo" />
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
                Here are a few unique facts about me:
              </p>

              <div className='about-focus'>
                <h4>❯❯ Brain </h4>
                <p>
                  ❯ I was born missing a third of my brain.
                  <br />
                  ❯ Doctors said I would never walk or talk—but I proved them wrong.
                </p>
              </div>

              <div className='about-focus'>
                <h4>❯❯ Number Peg System </h4>
                <p>
                  ❯ I associate every number from 0 to 99 with a distinct image, a system that enhances my memory and perception.
                </p>
              </div>

              <div className='about-focus'>
                <h4>❯❯ Language Learning</h4>
                <p>
                  ❯ I am dedicated to learning Spanish and continuously expanding my fluency.
                </p>
              </div>

              <div className='about-focus'>
                <h4>❯❯ Chess </h4>
                <p>
                  ❯ Chess is one of my favorite hobbies, where strategy and problem-solving fuel my passion for the game.
                </p>
              </div>
            </div>

            <div className="right">
              <div className='tech-used'>
                <div className='single-tech'>
                  <img loading="lazy" src={UniqueBrain} alt="Brain" />
                </div>

                <div className='single-tech'>
                  <img loading="lazy" src={NumberSystem} alt="Ten Chicken" />
                </div>

                <div className='single-tech'>
                  <img loading="lazy" src={Spanish} alt="Mexico Flag" />
                </div>

                <div className='single-tech'>
                  <img loading="lazy" src={Chess} alt="Chess" />
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