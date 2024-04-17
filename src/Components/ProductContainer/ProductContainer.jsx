import React from 'react'
import './ProductContainer.css'

const ProductContainer = () => {
  return (
    <div className='ProductContainer'>
        <div className="innerContainer">
            <div className="productSec1">
                <div className="proCont">

            <div className="productcon1">
             <h1>Insured and Protected</h1>
              <img src="/images/Insured and Protected.svg" className='productImg-1' alt="Insured and protected img" />
            </div>
            <div className="productPara">
                <p className="paraText">
                Rest assured that your assets are protected with state-of-the-art encryption 
                technology and stringent security measures.
                </p>
            </div>
                </div>

         <div className="proCont">

          <div className="productcon2">
          <h1>Real Time Market Insights</h1>
              <img src="/images/Real Time Market Insights.svg" className='productImg-2' alt="Real Time Market Insights img" />
              </div>
              <div className="productPara">
                <p className="paraText">
                    Insurance held by us and our custodial partners helps protect your crypto against crime
                    like hacks or theft.
                </p>
            </div>
          
            </div>
        </div>

            <div className="productSec2">
            <div className="proCont">

            <div className="productcon3">
             <h1>Streamlined Transactions</h1>
              <img src="/images/Streamlined Transactions.svg" className='productImg-2' alt="Streamlined Transactions img" />
            </div>

            <div className="productPara">
                <p className="paraText">
                Coinly offers a seamless experience, allowing you to buy and
                sell various cryptocurrencies in just a few clicks. 
                </p>
            </div>
            </div>

            <div className="proCont">

                <div className="productcon3">
                <h1>Insured and Protected</h1>
              <img src="/images/Join Community.svg" className='productImg-1' alt="Join Community img" />
                </div>

                <div className="productPara">
                <p className="paraText">
                Join thousands of satisfied users who have simplified their crypto 
                experience with Coinly. Sign up today.
                </p>
            </div>
            </div>

            </div>
        </div>

    </div>
  )
}

export default ProductContainer