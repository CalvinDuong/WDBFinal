// ColorItem.jsx
import React from 'react';

const ColorItem = ({ color, label }) => {
  return (
    <div className="color-item">
        <div className={`color-circle ${color}`}></div>
        <p>{label}</p>
    </div>
  );
}

export default ColorItem;
