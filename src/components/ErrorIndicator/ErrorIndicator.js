import React, { Component } from "react";
import './errorIndicator.css'
import icon from './45.png'

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
    <img src={icon} className='error-image' alt='error'/>
      <span className="boom">BOOM!</span>
      <span>Something has gone terribly wrong</span>
  
    </div>
  );
};

export default ErrorIndicator;