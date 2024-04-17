import React from 'react';
import './Services.css';

const Services = () => {
  return (

    <div className="display">

      <h1 className='crypto-header'>Keep your crypto Safe</h1>
      <div className='containers'>

        {/* First colomn section */}

        <div className="colomn-1">
          <div className="con1">
             <h1>Insured and Protected</h1>
              <img src="/images/mobile.svg" className='mainImg-1' alt="Insured and protected" />
            </div>
          <div className="con2">
            <div className="Para">
                <p className="Text1">
                Insurance held by us and our custodial partners helps protect your crypto against crime like hacks or theft. We work with regulators to make sure our
                app is reducing risk for crypto where possible.
                </p>
            </div>
          </div>
        </div>

          {/* Second colomn section */}

        <div className="colomn-2">
          <div className="con4">
            <div className="Para">
                <p className="Text2">
                Our partners have over $200M in cold storage coverage each. Compliant all the way: We built our 
                platform with regulatory guidance from the get-go. 
                </p>
            </div>
          </div>

        <div className="con3">
             <h1>Storage Coverage</h1>
              <img src="/images/storage.svg" className='mainImg-2' alt="storage coverage" />
            </div>
        <img src="/images/Target.svg" className='mainImg-3' alt="storage coverage" />
        </div>

      </div>
    </div>
   
       
     
  );
}


export default Services;
