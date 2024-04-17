import React from 'react';
import './About.css';


const About = () => {
  return (

     <div className="About">
    
     <div className='abt-containers'>

       {/* First colomn section */}

       <div className="abt-colomn-1">
         <div className="abt-con1">
         <h1>What we <span > do ? </span></h1> 
            
           </div>
         <div className="abt-con2">
           <div className="abt-para">
               <p>
               We started by providing <strong>smart,  simple investing,</strong>without the 
               high fees and account minimums associated with traditional investment management.
               </p>
           </div>
         </div>
               <img src="/images/Target.svg" className='abtImg-1' alt="storage coverage" />
       </div>

         {/* Second colomn section */}

       <div className="abt-colomn-2">
          <div className="abt-con3">
           <div className="abt-para2">

           <p>
           We invest your money in a <span> globally diversified portfolio</span> of
           low-cost index funds.
           </p>
           <br />
           <p>
           Our cutting-edge technology helps you earn the 
           best possible return, while optimizing your tax bill.
           </p>
           </div>

           <div className="abt-para3">
            <p>
              This means we do things like; 
            </p>
              <h3><img src="/images/3D coin 2.svg" className="s-coin" alt="Logo 1" />Automatic rebalancing </h3>
              <h3><img src="/images/3D coin 2.svg" className="s-coin" alt="Logo 1" />Dividend reinvesting</h3>
              <h3><img src="/images/3D coin 2.svg" className="s-coin" alt="Logo 1" />Tax loss harvesting</h3>
           </div>

           <div className="cow">
           <p className='calf'>
             “Services that were only available to the ultra rich until now or that 
              most people found too time-consuming and tedious to do on their own.”
            </p>
           </div>
         </div> 

       <div className="abt-con4">
             <img src="/images/Projector illustration.svg" className='illustrationImg-2' alt="storage coverage" />
           </div>
       
       </div>

     </div>
   </div>
  )
}

export default About