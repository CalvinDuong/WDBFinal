import React from 'react';

const ColoredButton = ({ width, color, text, fontSize }) => {
  const buttonStyle = {
    borderRadius: '20px',
    background: color,
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    height: '61px',
    flexShrink: 0,
    width: width,
    color: 'white',
    fontSize: fontSize,
    display: 'flex',
    fontSize: 22,
    justifyContent: 'center', 
    alignItems: 'center', 
  };

  return <button style={buttonStyle}>{text}</button>;
};

export default ColoredButton;