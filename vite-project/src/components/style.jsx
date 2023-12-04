// Style.jsx
import React from 'react';
import './style.css';
import casualIcon from '../images/icons8-clothes-96.png';
import formalIcon from '../images/icons8-formal-outfit-96.png';
import athleticIcon from '../images/icons8-trainers-96.png';

const Style = () => {
  return (
    <div className="style-container">
      <div className="style-item casual">
        <img className="style-icon" src={casualIcon} alt="Casual Style" />
        <p>Casual</p>
      </div>
      <div className="style-item formal">
        <img className="style-icon" src={formalIcon} alt="Formal Style" />
        <p>Formal</p>
      </div>
      <div className="style-item athletic">
        <img className="style-icon" src={athleticIcon} alt="Athletic Style" />
        <p>Athletics</p>
      </div>
    </div>
  );
}

export default Style;
