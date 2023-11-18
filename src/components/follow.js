import React from 'react';
import './follow.css'; 

const Follow = ({ followers, following }) => {
  return (
    <div className="follower-following-container">
      <div className="follower-box">
        <div className="box-content">
          <p className="box-text">{followers}</p>
        </div>
          </div>
        

      <div className="following-box">
        <div className="box-content">
          <p className="box-text">{following}</p>
        </div>
      </div>
      </div>


      
      
  );
};

export default Follow;
