import React from 'react'
import './style.css'


const Header = () => {
  return (
    <section className="header-wrapper">
        <div className="header-container flexCenter paddings">
            <img src="./logo.png" alt="" width={100}/>
            <div className="header-menu">
                 <a href="">Residencies</a>
                 <a href="">Our Value</a>
                 <a href="">Contact  Us</a>
                 <a href="">Get Started</a>
                 <button className=''>
                    <a href="">Contact</a>
                 </button>
            </div>
        </div>
    </section>
  )
}

export default Header