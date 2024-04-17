import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { useContext } from 'react';
import { useRef } from 'react';
import './Contact.css'

const Contact = () => {


    const form = useRef();

    const [done, setDone] =useState(false)
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_bwub1s1', 'template_a5pwnol', form.current, 'did7O6q-aH1tasfLy')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className='contact'>
        <h1>Contact <span>Us</span></h1>
        <div className="contact-container">
            <div className="contact-con1">
                
            <div className="contact-form">
            <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
              <label for="name">Full Name </label>
              <input type="text" name="user_name" className="user" placeholder="Name" />
              <label for="name">Email Address </label>
              <input type="email" name="user_email" className="user" placeholder="Email" />
              <label for="name">Your Message </label>
              <textarea name="message" className="user" placeholder="Message" />
              <input type="submit" value="Send" className="submit-button" />
              <span style={{color:"darkblue", fontSize:"20px"}}>{done && "Thanks for reaching out to Team Coinly!"}</span>
              <div className="blur c-blur1" style={{ background: "var(--purple)"}}></div>
           </form>
        </div>
    </div>
            </div>

            <div className="contact-con2">
                <h3>
                    We'd love to hear from you
                </h3>
                <img className='contact-coinLogo-A' src='/images/3D coin 2.svg' alt='' />
                <img className='contact-coinLogo-B' src='/images/3D coin 2.svg' alt='' />
                <img className='contact-coinLogo-C' src='/images/3D coin 2.svg' alt='' />

            </div>

        </div>
    </div>
  )
}

export default Contact