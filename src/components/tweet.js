import React from 'react';
import './tweet.css'; 
import Like from '../images/like.png';
const Tweet = ({ heading, content, type, timestamp, views, onLikeClick }) => {
  return (
    <div className="tweet-box">
      <div className="tweet-header">
        <div className="topic-box">{heading}</div>
        <button className="like-button" onClick={onLikeClick}>
                  <img className='likeimg' src={Like}  alt = "like"/>
        </button>
      </div>
      <p className="tweet-content">{content}</p>
      <div className="tweet-footer">
        <div className="type-info">{type}</div>
        <div className="timestamp">{timestamp}</div>
        <div className="views">{views} Views</div>
      </div>
    </div>
  );
};

export default Tweet;
