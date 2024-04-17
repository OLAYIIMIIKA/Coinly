import React from 'react'
import './Team.css';

const Team = () => {
  return (
    <div className='Team'>
              <h1 className='team-header'>Meet the Team</h1>
      <div className='team-container'>
      <div className="image-wrapper">
      <img src="/images/Oladuni-Kami.png" className="picture" alt="storage coverage" />
                <button className="button1">Seye Kami<br /> Vision & Growth</button>
            </div>

            <div className="image-wrapper">
            <img src="/images/Adam-Agoro.png" className="picture" alt="storage coverage" />
                <button className="button2">Adam Agoro <br /> Technology & Product</button>
            </div>

            <div className="image-wrapper">
            <img src="/images/Seye-Omolabi.png" className="picture" alt="storage coverage" />
                <button className="button3">Seye Omolabi<br /> Business & Alliance</button>
             </div>

      </div>
    </div>
  )
}

export default Team