import React from 'react';
import Logo1 from '../images/d.png'; 
import Logo2 from '../images/tick.jpg'; 
import './info.css'; 

const PersonInfo = ({ name }) => {
  return (
      <div className="person-info">
          <h2 className="person-name">{name}</h2>
      <div className="logos">
        <img src={Logo1} alt="Logo 1" className="logo" />
        <img src={Logo2} alt="Logo 2" className="logo" />
      </div>
      
    </div>
  );
};

export default PersonInfo;
