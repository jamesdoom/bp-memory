import React, { useState, useEffect } from 'react';

// Import your image assets
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';
import img7 from './assets/img7.jpg';
import img8 from './assets/img8.jpg';
import img9 from './assets/img9.jpg';
import img10 from './assets/img10.jpg';
import img11 from './assets/img11.jpg';
import img12 from './assets/img12.jpg';

const App = () => {
  const [images, setImages] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedImages, setClickedImages] = useState([]);

  // Shuffle the array of images on component load
  useEffect(() => {
    const shuffledImages = [
      img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12
    ].sort(() => Math.random() - 0.5);
    setImages(shuffledImages);
  }, []);

  // Handle image click event
  const handleImageClick = (clickedImage) => {
    // Check if the image has been clicked before
    if (clickedImages.includes(clickedImage)) {
      setScore(0);
      setClickedImages([]);
    } else {
      setClickedImages([...clickedImages, clickedImage]);
      setScore(score + 1);
    }

    // Update the best score if the current score is greater
    if (score + 1 > bestScore) {
      setBestScore(score + 1);
    }

    const newOrder = images.slice();
    newOrder.sort(() => Math.random() - 0.5);
    setImages(newOrder);
  };

  // Handle reset button click to reset the score and clicked images
  const handleResetClick = () => {
    setScore(0);
    setBestScore(0)
    setClickedImages([]);
  };

  return (
    <div>
      <div className='score-container'>
        <p className='score-player'>Current Score: {score}</p>
        <p className='score-best'>Best Score: {bestScore}</p>
        <button onClick={handleResetClick}>Reset</button>
      </div>
      <div className='rules'>Click each image once without clicking the same image twice!
      </div>
      <div className='image-container'>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            onClick={() => handleImageClick(image)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
