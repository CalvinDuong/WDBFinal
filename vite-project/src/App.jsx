import React, { useState } from 'react';
import Navbar from './components/navbar';
import ForeCast from './components/forecast';
import StyleDefault from './components/defaultstyle';
import Footer from './components/footer';
import './App.css';

function App() {
  const [fashionSense, setFashionSense] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Call the function to generate the outfit
    generateOutfit(fashionSense);
  };

  const generateOutfit = (fashionSense) => {
    // Logic to generate the outfit based on the user's fashion sense
    console.log(`Generating outfit for fashion sense: ${fashionSense}`);
  };

  return (
    <div className="App">
      <Navbar />
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
      <Footer />
    </div>
  );
}

export default App;

