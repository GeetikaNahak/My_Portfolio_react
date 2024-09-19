import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="left-section">
        
        <div className="icons">
        <div className="title-up"><h2>Let's Connect</h2></div>
          <i className='fa-brands fa-linkedin' style={{color:"white", margin:"3px" ,fontSize:"19px"}}></i><b>geetikasaiaravaninahak</b><br />
          <i className='fa-solid fa-square-envelope' style={{color:"white", margin:"3px" ,fontSize:"19px"}}></i><b>geetikasaisravaninahak@gmail.com</b>

        </div>
      </div>
      <div className="right-section">
        <form action="">
          <input type="text" placeholder='Your name' id='name' className='name' required/>
          <input type="email" name="email" id="Your email-Id" placeholder='email' required/>
          <textarea name="msg" id="msg" placeholder='Your messege' rows={6} cols={40}></textarea>
          <button type="submit" id='submit'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
