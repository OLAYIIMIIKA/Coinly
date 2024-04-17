import React from 'react'
import './Intro.css';

// import { motion } from "../../node_modules/framer-motion/dist/framer-motion";

const Intro = () => {

    // const transition = {duration : 2, type: 'spring'}



  return (
    <div className="holder">
    <div className="intro" id='intro'>
        <div className="i-left">
            <div className="i-name">
                <h1 className='intro-header'>Send Your <span className='coins'>Coins</span> <br/> Without Hassle</h1>
               
                <p>
                With Coinly, true borderless payments are possible. We make it easier to send,
                 receive and stack those coins in mere seconds
                </p>
            </div>
           <div> <button className="button i-btn">Get Started</button> </div>
        </div>
        <div className="i-right">

        {/* <img className='logo' src='/images/Globe.svg' alt='Navbar coinly logo' /> */}
        <div class="earth">
          <img className='globe-Logo' src='/images/New Globe only.svg' alt='Navbar coinly logo' />
          <img className='contact-coinLogo-1' src='/images/3D coin 2.svg' alt='' />
          <img className='contact-coinLogo-2' src='/images/3D coin 2.svg' alt='' />
          <img className='contact-coinLogo-3' src='/images/3D coin 2.svg' alt='' />
        </div>
       

        </div>
    </div>

    <div className="another">
      <div className='container'>
      <h1 className='header'>Our Services</h1>
        <div className='wrapper'>
          {/* Divided the into two colomn "which are col-1 and col-2 as provided below"  to achive the provide design  */}

          <div className='col-1' >
            {/* Used the "Epx" classname to position the icon and the text to the design provided  */}
            <div className='epx' >

          <div className='sec'>
              <img src="/images/service-icon-1.svg" alt="Logo 1" />
              </div>
          <div className="subheader">
              <h2>Swift Payment</h2>
                <p>Get up to $5,000 instantly: Sign up and start trading in just minutes. </p>
          </div>
            </div>

            <div className='epx' >
          <div className='sec'>
              <img src="/images/service-icon-3.svg" alt="Logo 1" />
              </div>
          <div className="subheader">
              <h2>Realtime Updates</h2>
              <p> Stay on top of the market: Crypto news in the app gets you real time insights for top coins.</p>
          </div>

          </div>

          </div>

           <div className='col-2' >

          <div className='epx' >

           <div className='sec'>
          <img src="/images/service-icon-2.svg" alt="Logo 2" />
              </div>
          <div className="subheader">
          <h2>No wait time</h2>
          <p>Instant deposits let you buy crypto right away — no need to wait for funding.</p>
          </div>

          </div>

          <div className='epx' >

          <div className='sec'>
            <img src="/images/service-icon-4.svg" alt="Logo 3" />
          </div>
            <div className="subheader">
            <h2>Quick Trading Decision</h2>
            <p>With price alerts, you can make trading decisions quickly — without being glued to your phone.</p>
            </div>

            </div>

          </div>

        
        </div>

      </div>
       
    </div>
    </div>
  )
}

export default Intro