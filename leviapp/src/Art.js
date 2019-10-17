import React, { Component } from 'react';
import './SASS/Art.sass';
import { Link, DirectLink, Element , Events, animateScroll, scrollSpy, scroller } from 'react-scroll'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import q1 from './img/artportfolio/Quorum-Sense/quorum1.jpg'
import q2 from './img/artportfolio/Quorum-Sense/quorum2.jpg'
import q3 from './img/artportfolio/Quorum-Sense/quorum3.jpg'
import q4 from './img/artportfolio/Quorum-Sense/quorum4.jpg'
import q5 from './img/artportfolio/Quorum-Sense/quorum5.jpg'
import q6 from './img/artportfolio/Quorum-Sense/quorum6.jpg'
import q7 from './img/artportfolio/Quorum-Sense/quorum7.jpg'
import q8 from './img/artportfolio/Quorum-Sense/quorum8.jpg'
import q9 from './img/artportfolio/Quorum-Sense/quorum9.jpg'
import q10 from './img/artportfolio/Quorum-Sense/quorum10.jpg'
import q11 from './img/artportfolio/Quorum-Sense/quorum11.jpg'
import q12 from './img/artportfolio/Quorum-Sense/quorum12.jpg'
import q13 from './img/artportfolio/Quorum-Sense/quorum13.jpg'


import s1 from './img/artportfolio/STEM/stem1.jpg'
import s2 from './img/artportfolio/STEM/stem2.jpg'
import s3 from './img/artportfolio/STEM/stem3.jpg'
import s4 from './img/artportfolio/STEM/stem4.jpg'
import s5 from './img/artportfolio/STEM/stem5.jpg'
import s6 from './img/artportfolio/STEM/stem6.jpg'
import s7 from './img/artportfolio/STEM/stem7.jpg'
import s8 from './img/artportfolio/STEM/stem8.jpg'
import s9 from './img/artportfolio/STEM/stem9.jpg'
import s10 from './img/artportfolio/STEM/stem10.jpg'
import s11 from './img/artportfolio/STEM/stem11.jpg'

import Brock from './img/artportfolio/Typography/JosefBrockmannBusinessCard.svg'
import BrockWeb from './img/artportfolio/Typography/JosefBrockmannWebpage.svg'
import BrockLetter from './img/artportfolio/Typography/JosefBrockmannLetterhead.svg'

import Joyce from './img/artportfolio/Typography/MikeJoyceBusinessCard.svg'
import JoyceWeb from './img/artportfolio/Typography/MikeJoyceWebpage.svg'
import JoyceLetter from './img/artportfolio/Typography/MikeJoyceLetterhead.svg'

import CatalogCover from './img/artportfolio/Prosthetics/CatalogCover.jpg'
import MagPuckCover from './img/artportfolio/Prosthetics/MagPuckCover.jpg'
import SmartPuckCover from './img/artportfolio/Prosthetics/SmartPuckCover.jpg'
import AirPuckCover from './img/artportfolio/Prosthetics/AirPuckCover.jpg'
import ZeroPuckCover from './img/artportfolio/Prosthetics/ZeroPuckCover.jpg'
import FabricationCover from './img/artportfolio/Prosthetics/FabricationCover.jpg'

class Art extends Component {

    state = {

    }

    contactClick = (c) => {
        const name = document.getElementsByClassName(c)[0]
        name.classList.toggle('allcol')
    }

    bookClick = (c) => {
        const names = document.getElementsByClassName('sel')
        const new_name = document.getElementsByClassName(c)[0]
        console.log(names, new_name)
        for (let name of names) {
            if (new_name.isSameNode(name)) {
                console.log(names, new_name)
                name.classList.remove('pamphlet')
            }

            else {
                name.classList.add('pamphlet') 
            }
        }
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

            const a = document.getElementsByClassName('arrows_1')[0]
            const b = document.getElementsByClassName('second')[0]
            const c = document.getElementsByClassName('arrows_2')[0]
            const d = document.getElementsByClassName('third')[0]
            const e = document.getElementsByClassName('arrows_3')[0]



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

        })
    }

    render() {
        return(

        <div className='art'>
      <div className='contents'>

            <h2 className='all_sections second'>
            Infographics
            </h2>
            <h3 className='arrows'>>>>>></h3>

            <h2 className='all_sections third'>
            Tactile Graphics
            </h2>
            <h3 className='arrows'>>>>>></h3>

            <h2 className='all_sections third'>
            Type Design
            </h2>
            <h3 className='arrows'>>>>>></h3>

            <h2 className='all_sections third'>
            Illustration
            </h2>
            <h3 className='arrows'>>>>>></h3>
            </div>
            <div className='quorum'>
            <Carousel className="slide" showStatus={false} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true}>
                    <div>
                    <img src={q1} />
                    </div>

                    <div>
                    <img src={q2} />          
                    </div>

                    <div>
                    <img src={q3} />        
                    </div>

                    <div>
                    <img src={q4} />                               
                    </div>

                    <div>
                    <img src={q5} />                               
                    </div>

                    <div>
                    <img src={q6} />                               
                    </div>

                    <div>
                    <img src={q7} />                               
                    </div>

                    <div>
                    <img src={q8} />                               
                    </div> 

                    <div>
                    <img src={q9} />                               
                    </div>

                    <div>
                    <img src={q10} />                               
                    </div>

                    <div>
                    <img src={q11} />                               
                    </div>

                    <div>
                    <img src={q12} />                               
                    </div>

                    <div>
                    <img src={q13} />                               
                    </div>
            </Carousel>
            </div>

            <div className='stem'>
            <Carousel className="slide" showStatus={false} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true}>
                    <div>
                    <img src={s1} />
                    </div>

                    <div>
                    <img src={s2} />          
                    </div>

                    <div>
                    <img src={s3} />        
                    </div>

                    <div>
                    <img src={s4} />                               
                    </div>

                    <div>
                    <img src={s5} />                               
                    </div>

                    <div>
                    <img src={s6} />                               
                    </div>

                    <div>
                    <img src={s7} />                               
                    </div>

                    <div>
                    <img src={s8} />                               
                    </div> 

                    <div>
                    <img src={s9} />                               
                    </div>

                    <div>
                    <img src={s10} />                               
                    </div>

                    <div>
                    <img src={s11} />                               
                    </div>               
            </Carousel>
            </div>
            <div className="card">
                <div className='collateral'>
                <img onClick={() => this.contactClick('brock')} className='contact' src={Brock} />
                <div className='brock hide'>
                    <img className='leftimg' src={BrockLetter} />
                    <img className='rightimg' src={BrockWeb} />
                </div>
                </div>
                <div className='collateral'>
                <img onClick={() => this.contactClick('joyce')} className='contact' src={Joyce} />
                <div className='joyce hide'>
                    <img className='leftimg' src={JoyceLetter} />
                    <img className='rightimg' src={JoyceWeb} />
                </div>
                </div>
            </div>

            <div className='prosthetics'>
                <div className="books">
                <img onClick={() => this.bookClick('cat')} src={CatalogCover} />
                <img onClick={() => this.bookClick('mag')} src={MagPuckCover} /> 
                <img onClick={() => this.bookClick('smart')} src={SmartPuckCover} /> 
                <img onClick={() => this.bookClick('air')} src={AirPuckCover} /> 
                <img onClick={() => this.bookClick('zero')} src={ZeroPuckCover} /> 
                <img onClick={() => this.bookClick('fab')} src={FabricationCover} /> 
                </div>

                <Carousel className="sel pamphlet cat" showStatus={false} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true}>
                    <div>
                    <img src={CatalogCover} />
                    </div>           
                </Carousel>

                <Carousel className="sel pamphlet mag" showStatus={false} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true}>
                    <div>
                    <img src={MagPuckCover} />
                    </div>           
                </Carousel>

                <Carousel className="sel pamphlet smart" showStatus={false} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true}>
                    <div>
                    <img src={SmartPuckCover} />
                    </div>           
                </Carousel>

                <Carousel className="sel pamphlet air" showStatus={false} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true}>
                    <div>
                    <img src={AirPuckCover} />
                    </div>           
                </Carousel>

                <Carousel className="sel pamphlet zero" showStatus={false} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true}>
                    <div>
                    <img src={ZeroPuckCover} />
                    </div>           
                </Carousel>

                <Carousel className="sel pamphlet fab" showStatus={false} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true}>
                    <div>
                    <img src={FabricationCover} />
                    </div>           
                </Carousel>
            </div>
        </div>


        )
    }
}

export default Art