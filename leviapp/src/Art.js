import React, { Component } from 'react';
import { Link, DirectLink, Element , Events, animateScroll, scrollSpy, scroller } from 'react-scroll'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import './SASS/Art.sass';

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


import s1 from './img/artportfolio/STEM/stem1.png'
import s2 from './img/artportfolio/STEM/stem2.png'
import s3 from './img/artportfolio/STEM/stem3.png'
import s4 from './img/artportfolio/STEM/stem4.png'
import s5 from './img/artportfolio/STEM/stem5.png'
import s6 from './img/artportfolio/STEM/stem6.png'
import s7 from './img/artportfolio/STEM/stem7.png'
import s8 from './img/artportfolio/STEM/stem8.png'
import s9 from './img/artportfolio/STEM/stem9.png'
import s10 from './img/artportfolio/STEM/stem10.png'
import s11 from './img/artportfolio/STEM/stem11.png'

import Brock from './img/artportfolio/Typography/JosefBrockmannBusinessCard.png'
import BrockWeb from './img/artportfolio/Typography/JosefBrockmannWebpage.png'
import BrockLetter from './img/artportfolio/Typography/JosefBrockmannLetterhead.png'

import Joyce from './img/artportfolio/Typography/MikeJoyceBusinessCard.png'
import JoyceWeb from './img/artportfolio/Typography/MikeJoyceWebpage.png'
import JoyceLetter from './img/artportfolio/Typography/MikeJoyceLetterhead.png'

import CatalogCover from './img/artportfolio/Prosthetics/CatalogCover.jpg'
import Catalog1 from './img/artportfolio/Prosthetics/Catalog1.jpg'
import Catalog2 from './img/artportfolio/Prosthetics/Catalog2.jpg'
import Catalog3 from './img/artportfolio/Prosthetics/Catalog3.jpg'
import Catalog4 from './img/artportfolio/Prosthetics/Catalog4.jpg'
import CatalogBack from './img/artportfolio/Prosthetics/CatalogBack.jpg'



import MagPuckCover from './img/artportfolio/Prosthetics/MagPuckCover.jpg'
import MagPuck1 from './img/artportfolio/Prosthetics/MagPuck1.jpg'
import MagPuck2 from './img/artportfolio/Prosthetics/MagPuck2.jpg'
import MagPuck3 from './img/artportfolio/Prosthetics/MagPuck3.jpg'
import MagPuck4 from './img/artportfolio/Prosthetics/MagPuck4.jpg'
import MagPuckBack from './img/artportfolio/Prosthetics/MagPuckBack.jpg'

import SmartPuckCover from './img/artportfolio/Prosthetics/SmartPuckCover.jpg'
import SmartPuck1 from './img/artportfolio/Prosthetics/SmartPuck1.jpg'
import SmartPuck2 from './img/artportfolio/Prosthetics/SmartPuck2.jpg'
import SmartPuck3 from './img/artportfolio/Prosthetics/SmartPuck3.jpg'
import SmartPuck4 from './img/artportfolio/Prosthetics/SmartPuck4.jpg'
import SmartPuckBack from './img/artportfolio/Prosthetics/SmartPuckBack.jpg'

import AirPuckCover from './img/artportfolio/Prosthetics/AirPuckCover.jpg'
import AirPuck1 from './img/artportfolio/Prosthetics/AirPuck1.jpg'
import AirPuck2 from './img/artportfolio/Prosthetics/AirPuck2.jpg'
import AirPuck3 from './img/artportfolio/Prosthetics/AirPuck3.jpg'
import AirPuck4 from './img/artportfolio/Prosthetics/AirPuck4.jpg'
import AirPuckBack from './img/artportfolio/Prosthetics/AirPuckBack.jpg'

import ZeroPuckCover from './img/artportfolio/Prosthetics/ZeroPuckCover.jpg'
import ZeroPuck1 from './img/artportfolio/Prosthetics/ZeroPuck1.jpg'
import ZeroPuck2 from './img/artportfolio/Prosthetics/ZeroPuck2.jpg'
import ZeroPuck3 from './img/artportfolio/Prosthetics/ZeroPuck3.jpg'
import ZeroPuck4 from './img/artportfolio/Prosthetics/ZeroPuck4.jpg'
import ZeroPuckBack from './img/artportfolio/Prosthetics/ZeroPuckBack.jpg'

import FabricationCover from './img/artportfolio/Prosthetics/FabricationCover.jpg'
import Fabrication1 from './img/artportfolio/Prosthetics/Fabrication1.jpg'
import Fabrication2 from './img/artportfolio/Prosthetics/Fabrication2.jpg'
import Fabrication3 from './img/artportfolio/Prosthetics/Fabrication3.jpg'
import Fabrication4 from './img/artportfolio/Prosthetics/Fabrication4.jpg'
import FabricationBack from './img/artportfolio/Prosthetics/FabricationBack.jpg'


import C4 from './img/artportfolio/Tactile-Graphics/C4.jpeg'
import C4T from './img/artportfolio/Tactile-Graphics/C4T.png'
import C4K from './img/artportfolio/Tactile-Graphics/C4K.png'

import C3 from './img/artportfolio/Tactile-Graphics/C3.jpeg'
import C3T from './img/artportfolio/Tactile-Graphics/C3T.png'
import C3K from './img/artportfolio/Tactile-Graphics/C3K.png'

import C2 from './img/artportfolio/Tactile-Graphics/C2.jpeg'
import C2T from './img/artportfolio/Tactile-Graphics/C2T.png'
import C2K from './img/artportfolio/Tactile-Graphics/C2K.png'

import C1 from './img/artportfolio/Tactile-Graphics/C1.jpeg'
import C1T from './img/artportfolio/Tactile-Graphics/C1T.png'
import C1K from './img/artportfolio/Tactile-Graphics/C1K.png'

import R4 from './img/artportfolio/Tactile-Graphics/R4.jpeg'
import R4T from './img/artportfolio/Tactile-Graphics/R4T.png'
import R4K from './img/artportfolio/Tactile-Graphics/R4K.png'

import R3 from './img/artportfolio/Tactile-Graphics/R3.jpeg'
import R3T from './img/artportfolio/Tactile-Graphics/R3T.png'
import R3K from './img/artportfolio/Tactile-Graphics/R3K.png'

import R2 from './img/artportfolio/Tactile-Graphics/R2.jpeg'
import R2T from './img/artportfolio/Tactile-Graphics/R2T.png'
import R2K from './img/artportfolio/Tactile-Graphics/R2K.png'

import R1 from './img/artportfolio/Tactile-Graphics/R1.jpeg'
import R1T from './img/artportfolio/Tactile-Graphics/R1T.png'
import R1K from './img/artportfolio/Tactile-Graphics/R1K.png'

import D4 from './img/artportfolio/Tactile-Graphics/D4.jpeg'
import D4T from './img/artportfolio/Tactile-Graphics/D4T.png'
import D4K from './img/artportfolio/Tactile-Graphics/D4K.png'

import D3 from './img/artportfolio/Tactile-Graphics/D3.jpeg'
import D3T from './img/artportfolio/Tactile-Graphics/D3T.png'
import D3K from './img/artportfolio/Tactile-Graphics/D3K.png'

import D2 from './img/artportfolio/Tactile-Graphics/D2.jpeg'
import D2T from './img/artportfolio/Tactile-Graphics/D2T.png'
import D2K from './img/artportfolio/Tactile-Graphics/D2K.png'

import D1 from './img/artportfolio/Tactile-Graphics/D1.jpeg'
import D1T from './img/artportfolio/Tactile-Graphics/D1T.png'
import D1K from './img/artportfolio/Tactile-Graphics/D1K.png'

import U4 from './img/artportfolio/Tactile-Graphics/U4.jpeg'
import U4T from './img/artportfolio/Tactile-Graphics/U4T.png'
import U4K from './img/artportfolio/Tactile-Graphics/U4K.png'

import U3 from './img/artportfolio/Tactile-Graphics/U3.jpeg'
import U3T from './img/artportfolio/Tactile-Graphics/U3T.png'
import U3K from './img/artportfolio/Tactile-Graphics/U3K.png'

import U2 from './img/artportfolio/Tactile-Graphics/U2.jpeg'
import U2T from './img/artportfolio/Tactile-Graphics/U2T.png'
import U2K from './img/artportfolio/Tactile-Graphics/U2K.png'

import U1 from './img/artportfolio/Tactile-Graphics/U1.jpeg'
import U1T from './img/artportfolio/Tactile-Graphics/U1T.png'
import U1K from './img/artportfolio/Tactile-Graphics/U1K.png'

import N1O from './img/artportfolio/NCTI/N1O.jpg'
import N1N from './img/artportfolio/NCTI/N1N.png'
import N2O from './img/artportfolio/NCTI/N2O.jpg'
import N2N from './img/artportfolio/NCTI/N2N.png'
import N3O from './img/artportfolio/NCTI/N3O.jpg'
import N3N from './img/artportfolio/NCTI/N3N.png'
import N4O from './img/artportfolio/NCTI/N4O.jpg'
import N4N from './img/artportfolio/NCTI/N4N.png'
import N5O from './img/artportfolio/NCTI/N5O.jpg'
import N5N from './img/artportfolio/NCTI/N5N.png'
import N6O from './img/artportfolio/NCTI/N6O.jpg'
import N6N from './img/artportfolio/NCTI/N6N.png'
import N7O from './img/artportfolio/NCTI/N7O.jpg'
import N7N from './img/artportfolio/NCTI/N7N.png'
import N8N from './img/artportfolio/NCTI/N8N.jpg'

import TB from './img/artportfolio/Typography/TB.png'
import T1 from './img/artportfolio/Typography/T1.png'
import T2 from './img/artportfolio/Typography/T2.png'
import T3 from './img/artportfolio/Typography/T3.png'
import T4 from './img/artportfolio/Typography/T4.jpg'
import T5 from './img/artportfolio/Typography/T5.jpg'
import T6 from './img/artportfolio/Typography/T6.png'
import T7 from './img/artportfolio/Typography/T7.png'


import I1 from './img/artportfolio/Illustration/I1.png'
import I2 from './img/artportfolio/Illustration/I2.jpg'
import I3 from './img/artportfolio/Illustration/I3.jpg'
import I4 from './img/artportfolio/Illustration/I4.jpg'
import I5 from './img/artportfolio/Illustration/I5.jpg'
import I6 from './img/artportfolio/Illustration/I6.jpg'
import I7 from './img/artportfolio/Illustration/I7.jpg'
import I8 from './img/artportfolio/Illustration/I8.jpg'


class Art extends Component {

    state = {

    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollStatus)
      }

    contactClick = (c) => {
        const name = document.getElementsByClassName(c)[0]
        name.classList.toggle('allcol')
    }

    bookClick = (c) => {
        const names = document.getElementsByClassName('sel')
        const buttons = document.getElementsByClassName('b')
        const new_name = document.getElementsByClassName(c)[0]
        const knopf = document.getElementsByClassName(`${c}b`)[0]

        console.log('knopf', knopf, new_name)

        if (buttons.length !== 0) {
            for (let b of buttons) {
                if (knopf.isSameNode(b)) {
                    b.classList.toggle('activeb')
                }

                else {
                    b.classList.remove('activeb')
                }
             }
        }


        for (let name of names) {
            if (new_name.isSameNode(name)) {
                console.log(names, new_name)
                name.classList.toggle('inactive')
            }

            else {
                name.classList.add('inactive') 
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

      scrollStatus = () => {
  
        const winHeight = window.innerHeight || (document.documentElement || document.body).clientHeight
        const docHeight = document.body.clientHeight
        const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
        const trackLength = docHeight - winHeight
        const percentScrolled = Math.floor(scrollTop/trackLength * 100) // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)
      console.log(percentScrolled + '% scrolled')
        const percent = `${(percentScrolled/61)*100}%`
        const number = percentScrolled/61
        const number2 = ((-61 + percentScrolled)/31)
        const percent2 = `${((-61 + percentScrolled)/31)*100}%`
        const percent3 = `${((-93 + percentScrolled)/7)*100}%`
        const number3 = ((-93 + percentScrolled)/7)
  
  
        console.log('this is how percentScrolled', percentScrolled, percent)
        const a = document.getElementsByClassName('arrows_1')[0]
        const b = document.getElementsByClassName('second')[0]
        const c = document.getElementsByClassName('arrows_2')[0]
        const d = document.getElementsByClassName('third')[0]
        const e = document.getElementsByClassName('arrows_3')[0]
        const f = document.getElementsByClassName('fourth')[0]
  
  
      if (a !== undefined && b !== undefined && c !== undefined && d !== undefined && e !== undefined ) {
        console.log(a, 'Aaaaaa')
        a.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 ${percent} , #D4D4D4 ${percent}, #D4D4D4 100%)`
  
        if (percentScrolled >= 61) {
            b.style.color = `#4EC9B0`
  
            c.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 ${percent2} , #D4D4D4 ${percent2}, #D4D4D4 100%)`
        }
        else {
            b.style.color = `#D4D4D4`
            c.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 0% , #D4D4D4 0%, #D4D4D4 100%)`
  
        }
        if (percentScrolled >= 92) {
            d.style.color = `#4EC9B0`
  
            e.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 ${percent3} , #D4D4D4 ${percent3}, #D4D4D4 100%)`
        }
        else {
            d.style.color = `#D4D4D4`
            e.style.backgroundImage = `linear-gradient(to right, #4EC9B0, #4EC9B0 0% , #D4D4D4 0%, #D4D4D4 100%)`
  
        }

        if (percentScrolled >= 100) {
            f.style.color = `#4EC9B0`
          }
        else {
            f.style.color = `#D4D4D4`  
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

        <div className='art'>
      <div className='contents'>

            <h2 onClick={() => {this.scrollTo('infographics', -400)}} className='all_sections on_topic'>
            Infographics
            </h2>
            <h3 className='arrows arrows_1'>❯❯❯❯❯</h3>

            <h2 onClick={() => {this.scrollTo('tactile', -174)}} className='all_sections second'>
            Tactile Graphics
            </h2>
            <h3 className='arrows arrows_2'>❯❯❯❯❯</h3>

            <h2 onClick={() => {this.scrollTo('type', -150)}} className='all_sections third'>
            Type Design
            </h2>
            <h3 className='arrows arrows_3'>❯❯❯❯❯</h3>

            <h2 onClick={() => {this.scrollTo('illustration', -260)}} className='all_sections fourth'>
            Illustration
            </h2>
            </div>
            <div className='artbox'>
                <div className="artcat">
                <div className='bContainer'>
                <Element className='start-section' name="infographics" >
                <br />
                </Element>
                <img className="b catb activeb" onClick={() => this.bookClick('cat')} src={CatalogCover} />
                </div>
                <div className='bContainer'>
                <img className="b magb" onClick={() => this.bookClick('mag')} src={MagPuckCover} /> 
                </div>

                <div className='bContainer'>
                <img className="b smartb" onClick={() => this.bookClick('smart')} src={SmartPuckCover} />
                </div>

                <div className='bContainer'>
                <img className="b airb" onClick={() => this.bookClick('air')} src={AirPuckCover} />
                </div>

                <div className='bContainer'>
                <img className="b zerob" onClick={() => this.bookClick('zero')} src={ZeroPuckCover} />
                </div>

                <div className='bContainer'>
                <img className="b fabb" onClick={() => this.bookClick('fab')} src={FabricationCover} />
                </div>

                <div className='bContainer'>
                <img className="b infographicsb" onClick={() => this.bookClick('infographics')} src={N1N} /> 
                </div>

                <div className='bContainer'>
                <img className="b quorumb" onClick={() => this.bookClick('quorum')} src={q1} />
                </div>

                <div className='bContainer'>
                <Element className='start-section' name="tactile" >
                <br />
                </Element>
                <img className="b cardiob" onClick={() => this.bookClick('cardio')} src={C1} /> 
                </div>

                <div className='bContainer'>
                <img className="b respb" onClick={() => this.bookClick('resp')} src={R1} />
                </div>

                <div className='bContainer'>
                <img className="b digestb" onClick={() => this.bookClick('digest')} src={D1} /> 
                </div>

                <div className='bContainer'>
                <img className="b urib" onClick={() => this.bookClick('uri')} src={U1} />
                </div>

                <div className='bContainer'>
                <Element className='start-section' name="type" >
                <br />
                </Element>
                <img className="b brockb" onClick={() => this.bookClick('brock')} src={Brock} />
                </div>

                <div className='bContainer'>
                <img className="b joyceb" onClick={() => this.bookClick('joyce')} src={Joyce} />
                </div>

                <div className='bContainer'>
                <img className="b typeb" onClick={() => this.bookClick('type')} src={TB} />
                </div>

                <div className='bContainer'>
                <Element className='start-section' name="illustration" >
                <br />
                </Element>
                <img className="b STEMb" onClick={() => this.bookClick('STEM')} src={s1} />
                </div>

                <div className='bContainer'>
                <img className="b illub" onClick={() => this.bookClick('illu')} src={I1} /> 
                </div>
                </div>
                <div className='car-container'>
                <Carousel className="sel active cat pamphlet" showStatus={false} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true}>

                    <div>
                    <img src={CatalogCover} />
                    </div>

                    <div className='description'>
                        <h2>
                        Socket Technology Catalog
                        </h2>

                        <p>
                        At Adaptec Prosthetics, I worked as a contractor redesigning several educational booklets.
                        </p>
                        <br/>
                        <p>
                        This is the catalog that gives clients an overview of all of Adaptec Prosthetics's products. VaporPuck is a product that Adaptec Prosthetics used to sell.
                        </p>
                    </div>

                    <div>
                    <img src={Catalog1} />
                    </div>

                    <div>
                    <img src={Catalog2} />
                    </div>

                    <div>
                    <img src={Catalog3} />
                    </div>

                    <div>
                    <img src={Catalog4} />
                    </div>

                    <div>
                    <img src={CatalogBack} />
                    </div>  
                </Carousel>
                </div>
                <div className='car-container'>
                <Carousel className="sel inactive mag pamphlet" showStatus={false} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true}>

                    <div>
                    <img src={MagPuckCover} />
                    </div>

                    <div className='description'>
                        <h2>
                        MagPuck Technical Guide
                        </h2>
                        <p>
                        At Adaptec Prosthetics, I worked as a contractor redesigning several educational booklets.
                        </p>
                        <br/>
                        <p>
                        "The MagPuck is a modular socket computer system that utilizes an
                        electronic vacuum pump to create negative pressure inside the prosthetic
                        socket. The MagPuck improves the linkage between the residual limb and
                        the prosthesis. The MagPuck is equipped with an easy to use magnetic
                        switch, allowing the user to quickly and easily set and adjust vacuum levels
                        of their prosthesis."
                        </p>
                    </div>

                    <div>
                    <img src={MagPuck1} />
                    </div>

                    <div>
                    <img src={MagPuck2} />
                    </div>

                    <div>
                    <img src={MagPuck3} />
                    </div>

                    <div>
                    <img src={MagPuck4} />
                    </div>

                    <div>
                    <img src={MagPuckBack} />
                    </div>           
                </Carousel>
                </div>

                <div className='car-container'>
                <Carousel className="sel inactive smart pamphlet" showStatus={false} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true}>

                    <div>
                    <img src={SmartPuckCover} />
                    </div>

                    <div className='description'>
                        <h2>
                        SmartPuck Technical Guide
                        </h2>

                        <p>
                        At Adaptec Prosthetics, I worked as a contractor redesigning several educational booklets.
                        </p>
                        <br/>
                        <p>
                        "The SmartPuck is a modular socket computer system that utilizes an
                        electronic vacuum pump to create negative pressure inside the prosthetic
                        socket. The SmartPuck improves the linkage between the residual limb and
                        the prosthesis. The SmartPuck is equipped with an easy to use iDevice and
                        application interface, allowing the user to quickly and easily set and adjust
                        vacuum pressure settings of their prosthesis."                        
                        </p>
                    </div>

                    <div>
                    <img src={SmartPuck1} />
                    </div>

                    <div>
                    <img src={SmartPuck2} />
                    </div>

                    <div>
                    <img src={SmartPuck3} />
                    </div>

                    <div>
                    <img src={SmartPuck4} />
                    </div>

                    <div>
                    <img src={SmartPuckBack} />
                    </div>         
                </Carousel>
                </div>
                                
                <div className='car-container'>
                <Carousel className="sel inactive air pamphlet" showStatus={false} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true}>

                    <div>
                    <img src={AirPuckCover} />
                    </div>

                    <div className='description'>
                        <h2>
                        AirPuck Technical Guide
                        </h2>

                        <p>
                        At Adaptec Prosthetics, I worked as a contractor redesigning several educational booklets.
                        </p>
                        <br/>
                        <p>
                        The AirPuck is the base product Adaptec Prosthetics offers. It uses a simple air system.
                        </p>
                    </div>

                    <div>
                    <img src={AirPuck1} />
                    </div>

                    <div>
                    <img src={AirPuck2} />
                    </div>

                    <div>
                    <img src={AirPuck3} />
                    </div>

                    <div>
                    <img src={AirPuck4} />
                    </div>

                    <div>
                    <img src={AirPuckBack} />
                    </div>    
                </Carousel>
                </div>

                <div className='car-container'>
                <Carousel className="sel inactive zero pamphlet" showStatus={false} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true}>

                    <div>
                        <img src={ZeroPuckCover} />
                    </div>

                    <div className='description'>
                        <h2>
                        ZeroPuck Technical Guide
                        </h2>

                        <p>
                        At Adaptec Prosthetics, I worked as a contractor redesigning several educational booklets.
                        </p>
                        <br/>
                        <p>
                        "The ZeroPuck is a modular socket computer system that utilizes an
                        electronic vacuum pump to create negative pressure inside the prosthetic
                        socket. The ZeroPuck improves the linkage between the residual limb and
                        the prosthesis. The ZeroPuck is equipped with an easy to use iDevice and
                        application interface, allowing the user to quickly and easily set and adjust
                        vacuum pressure settings of their prosthesis."                     
                        </p>
                    </div>

                    <div>
                        <img src={ZeroPuck1} />
                    </div>

                    <div>
                        <img src={ZeroPuck2} />
                    </div>

                    <div>
                        <img src={ZeroPuck3} />
                    </div>

                    <div>
                        <img src={ZeroPuck4} />
                    </div>

                    <div>
                        <img src={ZeroPuckBack} />
                    </div>         
                </Carousel>
                </div>
                <div className='car-container'>
                <Carousel className="sel inactive fab pamphlet" showStatus={false} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true}>

                    <div>
                    <img src={FabricationCover} />
                    </div>
                    
                    <div className='description'>
                        <h2>
                        Puck Fabrication Guide
                        </h2>

                        <p>
                        At Adaptec Prosthetics, I worked as a contractor redesigning several educational booklets.
                        </p>
                        <br/>
                        <p>
                        The Puck Fabrication Guide focuses on the preparation of prosthetic sockets.                       
                        </p>
                    </div>

                    <div>
                    <img src={Fabrication1} />
                    </div>

                    <div>
                    <img src={Fabrication2} />
                    </div>

                    <div>
                    <img src={Fabrication3} />
                    </div>

                    <div>
                    <img src={Fabrication4} />
                    </div>

                    <div>
                    <img src={FabricationBack} />
                    </div>         
                </Carousel>
                </div>
                <div className='car-container'>
                <Carousel className="sel inactive infographics double" showStatus={false} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true}>
                    <div>
                    <img src={N1O} />
                    </div>

                    <div>
                    <img src={N1N} />
                    </div>

                    <div>
                    <img src={N2O} />
                    </div>

                    <div>
                    <img src={N2N} />
                    </div>

                    <div>
                    <img src={N3O} />
                    </div>

                    <div>
                    <img src={N3N} />
                    </div>

                    <div>
                    <img src={N4O} />
                    </div>

                    <div>
                    <img src={N4N} />
                    </div>

                    <div>
                    <img src={N5O} />
                    </div>  

                    <div>
                    <img src={N5N} />
                    </div>

                    <div>
                    <img src={N6O} />
                    </div>

                    <div>
                    <img src={N6N} />
                    </div>

                    <div>
                    <img src={N7O} />
                    </div>

                    <div>
                    <img src={N7N} />
                    </div> 

                    {/* <div>
                    <img src={N8N} />
                    </div>   */}
                    </Carousel>
                    </div>

                    <div className='car-container'>
                    <Carousel className="sel inactive type double" showStatus={false} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true}>
                    <div>
                    <img src={T1} />
                    </div>

                    <div>
                    <img src={T2} />
                    </div>

                    <div>
                    <img src={T3} />
                    </div>

                    <div>
                    <img src={T4} />
                    </div>

                    <div>
                    <img src={T5} />
                    </div>

                    <div>
                    <img src={T6} />
                    </div>

                    <div>
                    <img src={T7} />
                    </div>
                    </Carousel>
                    </div>

                    {/* <div className='sel inactive card brock rest'>
                        <img className='top' src={Brock} />
                        <img className='leftimg' src={BrockLetter} />
                        <img className='rightimg' src={BrockWeb} />
                    </div>

                    <div className='sel inactive card joyce rest'>
                        <img className='top' src={Joyce} />
                        <img className='leftimg' src={JoyceLetter} />
                        <img className='rightimg' src={JoyceWeb} />
                    </div> */}

                    <div className='car-container'>
                    <Carousel className="sel inactive cardio rest" showStatus={false} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true}>
                    <div>
                    <img src={C1} />
                    </div>

                    <div className='description'>
                    <h2>Circulatory System</h2>        
                    <p>
                    I did some contract work at MSU Denver creating Tactile Graphics. My employer would send me PowerPoints with images. I simplified the images, creating different patterns for different labels. The patterns are printed as raised graphics on swell paper. The blind students can feel them and understand the illustration using a key.
                    </p>
                    </div>
                    <div>
                    <img src={C1} />
                    </div>

                    <div>
                    <img src={C1T} />
                    </div>

                    <div>
                    <img src={C1K} />
                    </div>

                    <div>
                    <img src={C2} />
                    </div>

                    <div>
                    <img src={C2T} />
                    </div>

                    <div>
                    <img src={C2K} />
                    </div>

                    <div>
                    <img src={C3} />
                    </div>

                    <div>
                    <img src={C3T} />
                    </div>

                    <div>
                    <img src={C3K} />
                    </div>  

                    <div>
                    <img src={C4} />
                    </div>

                    <div>
                    <img src={C4T} />
                    </div>

                    <div>
                    <img src={C4K} />
                    </div>   
                </Carousel>
                </div>

                <div className='car-container'>
                <Carousel className="sel inactive resp rest" showStatus={false} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true}>
                    <div>
                    <img src={R1} />
                    </div>

                    <div className='description'>
                    <h2>Respiratory System</h2>        
                    <p>
                    I did some contract work at MSU Denver creating Tactile Graphics. My employer would send me PowerPoints with images. I simplified the images, creating different patterns for different labels. The patterns are printed as raised graphics on swell paper. The blind students can feel them and understand the illustration using a key.
                    </p>
                    </div>
                    <div>
                    <img src={R1} />
                    </div>

                    <div>
                    <img src={R1T} />
                    </div>

                    <div>
                    <img src={R1K} />
                    </div>
                    
                    <div>
                    <img src={R2} />
                    </div>

                    <div>
                    <img src={R2T} />
                    </div>

                    <div>
                    <img src={R2K} />
                    </div>

                    <div>
                    <img src={R3} />
                    </div>

                    <div>
                    <img src={R3T} />
                    </div>

                    <div>
                    <img src={R3K} />
                    </div>  

                    <div>
                    <img src={R4} />
                    </div>

                    <div>
                    <img src={R4T} />
                    </div>

                    <div>
                    <img src={R4K} />
                    </div>   
                </Carousel>
                </div>

                <div className='car-container'>
                <Carousel className="sel inactive digest rest" showStatus={false} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true}>

                    <div>
                    <img src={D1} />
                    </div>

                    <div className='description'>
                    <h2>Digestive System</h2>        
                    <p>
                    I did some contract work at MSU Denver creating Tactile Graphics. My employer would send me PowerPoints with images. I simplified the images, creating different patterns for different labels. The patterns are printed as raised graphics on swell paper. The blind students can feel them and understand the illustration using a key.
                    </p>
                    </div>
                    <div>
                    <img src={D1} />
                    </div>

                    <div>
                    <img src={D1T} />
                    </div>

                    <div>
                    <img src={D1K} />
                    </div>

                    <div>
                    <img src={D2} />
                    </div>

                    <div>
                    <img src={D2T} />
                    </div>

                    <div>
                    <img src={D2K} />
                    </div>

                    <div>
                    <img src={D3} />
                    </div>

                    <div>
                    <img src={D3T} />
                    </div>

                    <div>
                    <img src={D3K} />
                    </div>  

                    <div>
                    <img src={D4} />
                    </div>

                    <div>
                    <img src={D4T} />
                    </div>

                    <div>
                    <img src={D4K} />
                    </div>   
                    </Carousel>
                    </div>

                    <div className='car-container'>
                    <Carousel className="sel inactive uri rest" showStatus={false} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true}>

                    <div>
                    <img src={U1} />
                    </div>

                    <div className='description'>
                    <h2>Urinary System</h2>        
                    <p>
                    I did some contract work at MSU Denver creating Tactile Graphics. My employer would send me PowerPoints with images. I simplified the images, creating different patterns for different labels. The patterns are printed as raised graphics on swell paper. The blind students can feel them and understand the illustration using a key.
                    </p>
                    </div>

                    <div>
                    <img src={U1} />
                    </div>

                    <div>
                    <img src={U1T} />
                    </div>

                    <div>
                    <img src={U1K} />
                    </div>

                    <div>
                    <img src={U2} />
                    </div>

                    <div>
                    <img src={U2T} />
                    </div>

                    <div>
                    <img src={U2K} />
                    </div>

                    <div>
                    <img src={U3} />
                    </div>

                    <div>
                    <img src={U3T} />
                    </div>

                    <div>
                    <img src={U3K} />
                    </div>  

                    <div>
                    <img src={U4} />
                    </div>

                    <div>
                    <img src={U4T} />
                    </div>

                    <div>
                    <img src={U4K} />
                    </div>   
                    </Carousel>
                    </div>

                    <div className='car-container'>
                    <Carousel className="sel inactive quorum biggest" showStatus={false} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true}>

                    <div>
                    <img src={q1} />
                    </div>

                    <div className='description'>
                    <h2>Operation: Quorum Sense</h2>        
                    <p>
                    In my 2D Design class, the teacher asked the students to incorporate post-contemporary design principles. I was in a microbiology class at the same time. I was interested in making a complicated biology topic, quorum sensing, simpler.
                    </p>
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

                    <div className='car-container'>
                    <Carousel className="sel inactive STEM rest" showStatus={false} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true}>

                    <div>
                    <img src={s1} />
                    <h2>Design Building</h2>
                    </div>

                    <div className='description'>
                    <h2>STEM Coloring Book</h2>        
                    <p>
                        A biology teacher at Metropolitan State University of Denver asked me to create a coloring book for the upcoming summer Science STEM program hosted at the university. Coloring sheet topics range from chemistry to meteorology.
                    </p>
                    </div>

                    <div>
                    <img src={s2} />  
                    <h2>Genetics</h2>        
                    </div>

                    <div>
                    <img src={s3} />
                    <h2>Chemistry</h2>      
                    </div>

                    <div>
                    <img src={s4} />
                    <h2>Computer Science</h2>                             
                    </div>

                    <div>
                    <img src={s5} />
                    <h2>3D Printing</h2>                                                          
                    </div>

                    <div>
                    <img src={s6} />
                    <h2>Math</h2>                                                                                    
                    </div>

                    <div>
                    <img src={s7} /> 
                    <h2>Meteorology</h2>                            
                    </div>

                    <div>
                    <img src={s8} />
                    <h2>Microbiology</h2>                                                                                        
                    </div> 

                    <div>
                    <img src={s9} />
                    <h2>Water Environments</h2>                                                                                                                 
                    </div>

                    <div>
                    <img src={s10} />
                    <h2>Physics</h2>                                                                                                                       
                    </div>

                    <div>
                    <img src={s11} />
                    <h2>Rocket Science</h2>                                                          
                    </div>               
            </Carousel>
            </div>
                    <div className='car-container'>
                    <Carousel className="sel inactive illu other" showStatus={false} showThumbs={false} infiniteLoop={true} useKeyboardArrows={true}>
                    <div>
                    <img src={I1} />
                    </div>

                    <div>
                    <img src={I2} />
                    </div>

                    <div>
                    <img src={I3} />
                    </div>

                    <div>
                    <img src={I4} />
                    </div>

                    <div>
                    <img src={I5} />
                    </div>

                    <div>
                    <img src={I6} />
                    </div>

                    <div>
                    <img src={I7} />
                    </div>

                    <div>
                    <img src={I8} />
                    </div>
                    </Carousel>
                    </div>
            </div>
        </div>


        )
    }
}

export default Art