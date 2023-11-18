import React from 'react';
import logoImage from '../images/d.png'; 

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logoImage} alt="Logo" className="logo" />
    </div>
  );
};

export default Logo;