import React from 'react';
import '../style/ArtworkDisplay.css';

function ArtworkDisplay() {
  return (
    <div className="artwork-display">
      <div className="artwork-image-container">
        <img src="https://via.placeholder.com/500x500.png?text=Placeholder+Image" alt="Artwork" className="artwork-image" />
      </div>
      <div className="artwork-details">
        <h2 className="artwork-title">The Starry Night</h2>
        <p className="artwork-artist">Vincent van Gogh</p>
        <p className="artwork-description">The Starry Night is an oil on canvas painting by Dutch post-impressionist painter Vincent van Gogh. Painted in June 1889, it depicts the view from the east-facing window of his asylum room at Saint-Paul-de-Mausole, just before sunrise, with the addition of an idealized village.</p>
        <div className="artwork-info">
          <p className="artwork-year">1889</p>
          <p className="artwork-medium">Oil on canvas</p>
          <p className="artwork-dimensions">73.7 cm × 92.1 cm (29 in × 36 1⁄4 in)</p>
        </div>
      </div>
    </div>
  );
}

export default ArtworkDisplay;
