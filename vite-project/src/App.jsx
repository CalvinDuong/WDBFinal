import React, { useState } from 'react';
import Navbar from './components/navbar';
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
      < Navbar />
      <form onSubmit={handleSubmit}>
        <label>
          Describe your fashion sense:
          <input type="text" value={fashionSense} onChange={e => setFashionSense(e.target.value)} />
        </label>
        <button type="submit">Generate Outfit</button>
      </form>
    </div>
  );
}

export default App;

