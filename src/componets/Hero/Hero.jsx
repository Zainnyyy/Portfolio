import React from 'react'
import './Hero.css'
import Me from '../../assets/Me.png'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={Me} alt="" />
        <h1><span>I'm Austin Franz Arabia</span></h1>
        <p>Beginner Developer / UI Designer</p>
        <div className="hero-action">
            <div 
  className="hero-connect"
  onClick={() => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }}
>
  Connect With Me
</div>
            <div className="hero-resume">My resume</div>
        </div>
    </div>
  )
}

export default Hero