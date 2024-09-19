import React from 'react'
import "./About.css"
import profile_image from '../../assets/image2.jpeg'

const About = () => {
  return (
    <div className="about" id='about'>
      <div className="title"><h1>About me</h1></div> 
      <div className="content">
      <img id="image2" src={profile_image}alt="" loading='lazy'/>
        <p>Hi! I am Geetika Nahak. I am currently pursuing my Graduation in the field of Computer Science at Vignan's Institute of information technology.
        I am a student who is passionate and dedicated to exploring the dynaminc world of technology. With a strong foundation in programming languages like C, C++, and Java, I thrive on solving problems and building innovative solutions.
        I am enthusiastic about diving deep into various aspects of computer science including algorithms, data structures, artificial intelligence and machine learning, and development. 
        <br/>Beyond the realm of academia, I also like attending hackathons, contests and other tech activities.
        I enjoy spending my free time immersed in the world of art and craft, particularly through painting and scetching which allows me to unleash my creativity and find solace in self-expression.
        As I continue my journey in computer science, I aim to leverage my diverse interests and skills to make meaningful contributions to bothe the technological and artistic communities. I am passionate about using my talents to make a positive impact on the world.</p>
      </div>
    </div>


  )
}

export default About
