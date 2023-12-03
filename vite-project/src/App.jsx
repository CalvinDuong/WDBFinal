import React, { useState } from 'react';
import Navbar from './components/navbar';
import ForeCast from './components/forecast';
import StyleDefault from './components/defaultstyle';
import Footer from './components/footer';
import axios from 'axios';
import LoginPage from './components/login';

function App() {
  const [fashionSense, setFashionSense] = useState('');
  const [imageUrl, setImageUrl] = useState('');

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

  return (
    <div className="App">
      <Navbar />
      <LoginPage />
      <h1> 7 Day Forecast</h1>
      <ForeCast></ForeCast>
      <h1> Pick A Style </h1>
      <StyleDefault></StyleDefault>
      <form onSubmit={handleSubmit}>
        <label>
          Describe your fashion sense:
          <input type="text" value={fashionSense} onChange={e => setFashionSense(e.target.value)} />
        </label>
        <button type="submit">Generate Outfit</button>
      </form>
      {imageUrl && <img src={imageUrl} alt="Generated outfit" />}
      <Footer />
    </div>
  );
}

export default App;

