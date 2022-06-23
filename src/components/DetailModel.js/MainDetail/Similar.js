import React, { useState } from 'react';
import {Link} from 'react-router-dom';

export default function Similar(props) {
    const {mainFunc,type,id}  = props;
    
  
    const funcl = () =>{
        
        
        mainFunc(id,type);
        console.log(id,type);
    }
  return (
    <div>
          <Link to={`/${id}`}>
      <button onClick={funcl}>click here</button>
      </Link>
    </div>
  )
}