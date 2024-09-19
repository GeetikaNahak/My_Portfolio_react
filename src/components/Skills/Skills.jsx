import React from 'react'
import "./Skills.css"
import Circular from '../Circular/Circular'
const Skills = () => {
  return (
    <div className='container' id='skills'>
      <h1>My Skills</h1>
      <div className="skills" >
        
        <li><h3>HTML</h3><span className="bar"><span className="html"></span></span></li>
        
        <li><h3>CSS</h3><span className="bar"><span className="css"></span></span></li>
        
        <li><h3>Javascript</h3><span className="bar"><span className="js"></span></span></li>
       
        <li><h3>React JS</h3><span className="bar"><span className="react"></span></span></li>
       
        <li><h3>Node JS</h3><span className="bar"><span className="node"></span></span></li>
    
        <li><h3>JQuery</h3><span className="bar"><span className="jquery"></span></span></li>
        
        <Circular percent="70" text="C"/>
        <Circular percent="70" text="C++"/>
        <Circular percent="30" text="Java"/>
        <Circular percent="35" text="Python"/>
      </div>
      
    </div>
  )
}

export default Skills
