// ColorScheme.jsx
import React from 'react';
import ColorItem from './coloritem';
import './colorscheme.css';

const colorItems = [
  { color: 'red', label: 'Red' },
  { color: 'orange', label: 'Orange' },
  { color: 'yellow', label: 'Yellow' },
  { color: 'green', label: 'Green' },
  { color: 'blue', label: 'Blue' },
  { color: 'purple', label: 'Purple' },
  { color: 'black', label: 'Black' },
  { color: 'white', label: 'White' },
  { color: 'brown', label: 'Brown' },
  // Add more color items as needed
];

const ColorScheme = () => {
  return (
    <div className="color-scheme">
      {colorItems.map((item, index) => (
        <ColorItem key={index} color={item.color} label={item.label} />
      ))}
    </div>
  );
}

export default ColorScheme;
