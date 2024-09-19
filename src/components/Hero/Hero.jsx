import React from 'react'
import './Hero.css'
import profile_image from '../../assets/image.jpeg'
const Hero = () => {
  function hlocation(){
    location.href="#contact";
  }
  return (
    <div className="hero">
      <img id="profile-image" src={profile_image}alt="" loading='lazy'/>
      <h2>Hey there !</h2>
      <h1>I am <span>Geetika</span>, Web Developer</h1>
      <p>I am a passionate computer science student</p>
      <div className="hero-action">
        <button><div className="hero-resume bton">My Resume</div></button>
        <button onClick={hlocation}><div className="hero-github bton">Let's Connect</div></button>
      </div>
      
    </div>
  )
}

export default Hero
