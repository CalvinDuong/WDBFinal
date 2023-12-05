import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import ForeCast from './components/Forecast';
import Footer from './components/Footer';
import ColorSection from './components/colorSection';
import BottomSection from './components/BottomSection';

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [color, setColor] = useState('');
  const [style, setStyle] = useState('');
  const [fit, setFit] = useState('');

  useEffect(() => {
    console.log(`Color: ${color}, Style: ${style}, Fit: ${fit}, Image URL: ${imageUrl}`);
  }, [color, style, fit, imageUrl]);

  return (
    <div className="App">
      <Navbar />
      <ForeCast />
      <ColorSection setColor={setColor} />
      <BottomSection
        setStyle={setStyle}
        setFit={setFit}
        setImageUrl={setImageUrl}
        style={style}
        fit={fit}
        color={color}
        imageUrl={imageUrl}
      />
      <Footer />
    </div>
  );
}

export default App;

