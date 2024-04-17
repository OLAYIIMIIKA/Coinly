import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import './Footer.css';
import Rocket from '../Rocket/Rocket';

const Footer = () => {
  const Year = new Date().getFullYear()
  return (
    <div className='footer'>
      
        <Rocket/>

        <div className="Footer">
          <div className="footer-col-1">
            <div className="first-side">

            <h4>Follow Us</h4>
            <div className="social-media">
            <FaLinkedinIn />
            <FaInstagram />
            <FaTwitter />
            <FaFacebookF />
            </div>
            
            <div className="footer-links">
              <p>About Us</p>
              <p>Products</p>
              <p>Faq</p>
              <p>Legal</p>
            </div>
            </div>

            <div className="second-side">
              <h4>Be the first to know what's new on coinly <br /> join to our newsletter now!</h4>
              <div class="input-style">

                <form action="">
                <input type="email" class="text_input" placeholder='Email'/>
                <button type="Submit" class="footer-btn">SUBSCRIBE</button>
                </form>

              </div>
            </div>

          </div>

          <div className="footer-col-2">

            <div className="w-coinly">
          <img className='w-logo' src='/images/w-coinly logo.svg' alt='footer coinly-logo' />
            </div>

            <div className="border-right"></div>

          <p>@Coinly {Year}. All rights reserved</p>

          </div>
          
        </div>
        </div>
  )
}

export default Footer