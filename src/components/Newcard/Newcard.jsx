import React from 'react'
import "./Newcard.css"
const Newcard = (props) => {
  const text=props.text;
  const title=props.title;
  const link=props.link;
  const visitlink="";
  return (
    
    <>
    <div className="card">
   <div  className='img'><img src={link} alt="Denim Jeans" /></div>
  <h2>{title}</h2>
 
  <p>{text}</p>
  <a href={visitlink}>Visit</a>
</div>
    </>
  )
}

export default Newcard
