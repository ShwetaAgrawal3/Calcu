import React from 'react';
import './StickyButton.css';

const StickyButton = ({ buttons }) => {
  return (
    <div className="sticky-button-container">
      {buttons.map((button, index) => (
        <button
          key={index}
          className="sticky-button"
          onClick={button.onClick}
        >
          {button.text}
        </button>
      ))}
    </div>
  );
};

export default StickyButton;