import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './Navbar.css'
const Navbar = () => {
  $("AnchorLink").css("color", "white");
  return (
    <div className="nav">
      <div className="left">Geetika's Portfolio</div>
      <div className="right">
        <ul>
        <AnchorLink className='anchor' href=''><li>Home</li></AnchorLink>
        <AnchorLink className='anchor' href='#about'><li>About me</li></AnchorLink>
        <AnchorLink className='anchor' href='#skills'><li>Skills</li></AnchorLink>
        <AnchorLink className='anchor' href='#projects'><li>Projects</li></AnchorLink>
        <AnchorLink className='anchor' href='#contact'><li>Contact</li></AnchorLink>
          
        </ul>
      </div>
    </div>

  )
}

export default Navbar
