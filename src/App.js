import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const quotes = [
    "Happy Birthday Tejas!",
    "May your birthday be the start of a new chapter filled with blessings and opportunities.",
    "Here's to another year of adventures, laughter, and dreams come true",
    "You make every day brighter just by being in it. Happy birthday to the guy who is both my boyfriend and best friend.",
    "Happy birthday to a truly remarkable person who deserves all the love and happiness in the world.",
    "On your special day, I want you to know how incredible and loved you are. Happy birthday!",
    "Wishing you a birthday filled with love, laughter, and countless happy memories",
    "Sending you warmest wishes on your birthday for a day that's as incredible as you are.",
    "To the person who brings sunshine into my life, happy birthday! Your presence is a gift that I treasure every day.",
    "On your special day, I want you to know how much I appreciate having you as my boyfriend and best friend. Happy birthday!",
    "Thank you for being the reason behind my happiness and for loving me unconditionally.",
    "Although we're miles apart, my heart is always with you. Sending you heartfelt wishes on your birthday.",
    "Distance may separate us on your birthday, but my love for you knows no bounds.",
    "May this birthday bring you an abundance of love, success,and happiness.You deserve every wonderful thing life has to offer.",
    "LOVE YOU DEAR!"
  ];

  const images = [

    require('./images/sky.jpg'),
    require('./images/tew.webp'),
    require('./images/teen.webp'),
    require('./images/two.webp'),
    require('./images/one.jpg'),
    require('./images/six.jpg'),
    require('./images/seven.jpg'),
    require('./images/feef.webp'),
    require('./images/nine.webp'),
    require('./images/ten.jpg'),
    require('./images/el.jpg'),
    require('./images/one.jpg'),
    require('./images/six.jpg'),
    require('./images/two.webp'),
    require('./images/fr.webp')
  ];

  const handleSwipe = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="app" onClick={handleSwipe}>
      <div className="image-container">
        <img src={images[currentIndex]} alt="Swipe Image" />
        <div className="quote">{quotes[currentIndex]}</div>

      </div>
    </div>
  );
}

export default App;
