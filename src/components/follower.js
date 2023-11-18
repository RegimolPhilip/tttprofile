import React from 'react';
import './follower.css'; 

const Follower = ({ followers, following }) => {
  return (
    <div className="follower-following-container">
      <div className="followerbox">
        <div className="box-content">
          <p className="box-text">{followers}</p>
        </div>
          </div>
        

      <div className="followingbox">
        <div className="box-content">
          <p className="box-text">{following}</p>
        </div>
      </div>
      </div>


      
      
  );
};

export default Follower;
