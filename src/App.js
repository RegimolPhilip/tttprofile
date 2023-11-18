import React from 'react';
import './App.css';
import images from './images/pic.jpeg';
import img1 from './images/bg.png';
import ttt from './images/ttt.png';
import Info from './components/info';
import Follow from './components/follow';
import Follower from './components/follower';
import Insta from './components/insta';
import Logos from './components/logos';
import LeftBox from './components/leftbox';
import Tweet from './components/tweet';

function App() {
  

    const handleLikeClick = () => {
  
    console.log('Tweet Liked!');
  };
return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <img className="ttt" src={ttt} alt="Logo"/>
        </div>
        <div className="courses">
          <h2 className='YellowBox'>Courses</h2>
        </div>
      </nav>
      <div className="App-header">
       <img className="img1"src={img1} alt="Background"  />
      </div>
      <main className="App-main">
        <div className="Profile-container">
          <div className="Profile-header">
            <img src={images} alt="Profile" className="Profile-image" />
            <p className='caption'>Content Writer at Terribly Tiny Tales</p>
            <Insta />
            <Logos />
            <LeftBox/>
          </div>
          <div className="Profile-content">
            <Info name = "Sofia Jones"/>
            
            <Follow followers={500} following={200} />
            <Follower followers={"Followers"} following={"Following"} /> 
          </div>
        </div>
        <Tweet
         heading="Deep Thoughts"
        content="What can we gain by sailing to the moon if we are not able to cross the abyss that separates us from ourselves? This is the most important of all voyages of discovery, and without it, all the rest are not only useless, but disastrous.
-- Thomas Merton"
        type="Thought by Sofia Jones"
        timestamp="1h ago"
        views={100}
        onLikeClick={handleLikeClick} />
      
      <Tweet
         heading="Elation and Triumph: India's Journey to the World Cup Final"
        content="The journey to the semi-finals had been arduous, with each match carrying the weight of expectations from millions of passionate cricket enthusiasts. As the semi-final unfolded, the tension in the air was palpable, and every run, every wicket, became a collective heartbeat for the nation."
        type="Thought by Sofia Jones"
        timestamp="17 November"
        views={700}
        onLikeClick={handleLikeClick} />
      

      <Tweet
         heading="Positive Thoughts"
        content="Live Intensely, live totally,here and now. Paradise is not someplace, somewhere, It is peace within you. --Osho"
        type="Thought by Sofia Jones"
        timestamp="17 November"
        views={700}
        onLikeClick={handleLikeClick} />
      
      <Tweet
         heading="Kindness"
        content="“For attractive lips, speak words of kindness. For lovely eyes, seek out the good in people. For a slim figure, share your food with the hungry. For beautiful hair, let a child run his fingers through it once a day. For poise, walk with the knowledge that you will never walk alone.” —Sam Levenson"
        type="Thought by Sofia Jones"
        timestamp="12 October"
        views={7700}
        onLikeClick={handleLikeClick}/>

      </main>
    </div>
  );
}

export default App;
