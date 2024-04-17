import React from 'react'
import './Faqs.css'
import { FaMinus,FaPlus } from 'react-icons/fa';
import { useState } from 'react'
import { Link } from 'react-router-dom';
import ContactUs from '../Pages/ContactUs';

const Faqs = () => {

  const [accodion, setAccodion] = useState(0)

  const content=[
    {
      title: "How are the coins stored, what’s the security/insurance?",
      description:   "The majority of your coins are held in offline cold storage with our custodial partners. All of our custodial partners are regulated entities themselves — and they have over $200M in insurance coverage each."
      
      
    },
    {
      title: "What types of accounts can I open with Coinly Crypto?",
      description: "Cryptocurrencies can only be held in a non-registered account with coinly crypto. "
    },
    {
      title: "I’m new to crypto, what kind of support can I get? ",
      description: "Our app is designed to be simple - but if you run into any question with your account , you can always contact team by chat, email, or phone and they'll be happy to help. And yes you'll always be put in touch with a real human. "
    }
]

const accodionToggle = (index) => {
  if (accodion === index){
    setAccodion(null)
  } else{
    setAccodion(index)
  }
}
  return (
    <div className='faqs'>
      
      <div className="faqs-container">
         <div className="faqs-con1">
         <h1>Frequently Asked <span > Questions</span></h1> 
            
               <p>
               Here are some common inquiries we receive. If you can't find
                what you're looking for, feel free to reach out to us. <a href='ContactUs' className='link'>Contact Us</a > 
               </p>
           </div>
         <div className="faqs-con2">
            <div className="accordion-wrapper">
              {

              content.map((item, index) => (
                <div className="first-info" key={index}>
                <header onClick={()=> accodionToggle(index)}>
                  {item.title}
                  <span >{accodion === index ? <FaMinus/> : <FaPlus/>}</span>
                </header>

                <p className={`description ${accodion === index ? 'opentab' : ''}`} > {item.description} </p>
              </div>
              ))
              }
            </div>
         </div>
       </div>

    </div>
  )
}

export default Faqs