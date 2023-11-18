Netlify link: https://terriblytinytalesregi.netlify.app/
React Components README

This repository contains several React components designed for various functionalities. Each component serves a specific purpose, and this README provides an overview of each one.

COMPONENTS

Follow Component The Follow component displays follower and following counts in two boxes. It has a simple and clean design.

Follower Component The Follower component is similar to the Follow component but uses different styling and class names.

PersonInfo Component The PersonInfo component displays a person's name along with two logos (images) side by side. It uses the Logo1 and Logo2 images and renders them in a flex container.

Insta Component The Insta component provides a link to the Instagram profile. It uses the URL 'https://www.instagram.com' and opens the link in a new tab.

LeftBox Component The LeftBox component is a simple box with text inside, displaying "138 Posts." It has a straightforward design.

Logo Component The Logo component displays a single logo image using the logoImage imported from '../images/d.png'.

Logos Component The Logos component displays multiple logos (images) along with corresponding text. It includes images for a star, like, views, and hearts.

Tweet Component The Tweet component represents a tweet-like box with a heading, content, like button, type information, timestamp, and view count.

FILE STRUCTURE

follow.css: Styles for the Follow component.
follower.css: Styles for the Follower component.
info.css: Styles for the PersonInfo component.
leftbox.css: Styles for the LeftBox component.
logos.css: Styles for the Logos component.
tweet.css: Styles for the Tweet component.
USAGE

Feel free to use and customize these components in your React application. Import the components into your desired files and adjust the styling or functionality based on your requirements.

Example:

import React from 'react';
import Follow from './components/Follow';

const App = () => {
  return (
    <div>
      <Follow followers={100} following={50} />
      {/* Add other components or content as needed */}
    </div>
  );
};

export default App;



To fetch data in json format

In App.js
import React, { useState, useEffect } from 'react';
import DataComponent from './DataComponent';

const App = () => {
  const [fetchedData, setFetchedData] = useState(null);

  useEffect(() => {
    // Simulate data fetching (replace with your actual data fetching logic)
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.example.com/data'); // respectiveAPI endpoint
        const jsonData = await response.json();
        setFetchedData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ,effect will run once when the component mounts

  return (
    <div>
      <h1>My React App</h1>
      {fetchedData && <DataComponent data={fetchedData} />}
    </div>
  );
};

export default App;


In parent component App and child component DataComponent
import React from 'react';

const DataComponent = ({ data }) => {
  return (
    <div>
      <h2>Data from Parent Component:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataComponent;


In App component use the useState and useEffect hooks to fetch data when the component mounts.
The fetched data is stored in the fetchedData state variable.
The DataComponent is conditionally rendered only if fetchedData is available. It receives the data as a prop.
Replace the placeholder API endpoint in the fetch function with the actual URL from which you want to fetch JSON data.
Replace the placeholder API endpoint in the fetch function with the actual URL from which you want to fetch JSON data
