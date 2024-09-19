import React, { useEffect } from 'react'
import {
    CircularProgressbar,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";

  import ChangingProgressProvider from "./ChangingProgressProvider";

import './Circular.css'
const Circular = (props) => {
    const percentage=props.percent;
  return (
    <div className='circular' style={{ padding: "10px 10px 10px 10px" }}>
      
      
      
      <ChangingProgressProvider values={[percentage]}>
        {percentage => (
          
          <CircularProgressbar
          strokeWidth={6}
            value={percentage}
            text={`${props.text}`}
            styles={buildStyles({
                pathColor:`rgb(21, 71, 206)` ,
                textColor:"white",
              pathTransition:
                percentage === 0 ? "none" : "stroke-dashoffset 0.5s ease 0s"
            })}
          />
          
          )}
      </ChangingProgressProvider>
    
    </div>
  )
}

export default Circular;
