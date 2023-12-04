import React from 'react';

const ColoredButton = ({ color, text, fontSize }) => {
  const buttonStyle = {
    background: color,
    borderRadius: '20px',
    boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
    height: '61px',
    flex: 1,
    color: 'white',
    fontSize: fontSize,
    fontSize: 22,
    justifyContent: 'center', 
    marginTop: '20px',
  };

  return <button style={buttonStyle}>{text}</button>;
};

export default ColoredButton;