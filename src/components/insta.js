import React from 'react';

const Insta = () => {
  const instagramUrl = 'https://www.instagram.com';

  return (
    <div className='instaLink'>
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
      https://www.instagram.com
    </a>
    </div>
  );
};

export default Insta;
