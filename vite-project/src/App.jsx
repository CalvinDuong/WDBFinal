import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ForeCast from './components/Forecast';
import Footer from './components/Footer';
import axios from 'axios';
import LoginPage from './components/Login';
import StyleButton from './components/styleButton';
import './App.css';
import ColorSection from './components/colorSection';
import ColoredButton from './components/ColoredButton';
import StyleSection from './components/styleSection';
import FitSection from './components/fitSection';
import BottomSection from './components/BottomSection';

function App() {
  const [fashionSense, setFashionSense] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [color, setColor] = useState('');
  const [style, setStyle] = useState('');
  const [fit, setFit] = useState('');

  function generateOutfit(fashionSense) {
    // Call the API to generate the outfit
    console.log('beginning outfit generation');
    axios.get('http://localhost:3000/generateOutfit', { params: { outfitDescription: fashionSense } })
      .then(response => {
        console.log('response', response)
        setImageUrl(response.data.url);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
      });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the function to generate the outfit
    generateOutfit(fashionSense);
  };

  const icon = '../../icons/day.svg';

  return (
    <div className="App">
      <Navbar />
      <ForeCast />

      <ColorSection />
      <BottomSection />

      {/* color, fit, style */}
      {setFashionSense }
      
      {/* <form onSubmit={handleSubmit}>
        <label>
          Describe your fashion sense:
          <input type="text" value={fashionSense} onChange={e => setFashionSense(e.target.value)} />
        </label>
        <button type="submit">Generate Outfit</button>
      </form>

      {imageUrl && <img src={imageUrl} alt="Generated outfit" />} */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;

