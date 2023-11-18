import React from 'react';
import './logos.css'; 
import Star from '../images/star.jpeg'; 
import Like from '../images/like.png';
import Views from '../images/views.jpg';
import Hearts from '../images/hearts.jpg';
const Logos = () => {
  return (
    <div className="logo-text-container">
      <div className="logo-container">
        <img src={Star} alt="star" className="logo" />
      </div>
      <p className="text">177</p>

      <div className="logo-container">
        <img src={Like} alt="likes" className="logo" />
      </div>
          <p className="text">45k</p>
          
         <div className="logo-container">
        <img src={Views} alt="views" className="logo" />
      </div>
          <p className="text">50k</p>

           <div className="logo-container">
        <img src={Hearts} alt="hearts" className="logo" />
      </div>
          <p className="text">49k</p>
      </div>
      
      
  );
};

export default Logos;
