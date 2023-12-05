import React, { useState, useRef } from 'react';
import axios from 'axios';

import ColoredButton from './ColoredButton';
import './PersonalStyle.css';

const PersonalStyle = ({ color, style, fit, setImageUrl }) => {
    const [prompt, setPrompt] = useState('');
    const textareaRef = useRef();

    const generateOutfit = (prompt) => {
        axios.get('http://localhost:3000/generateOutfit', { params: { outfitDescription: prompt } })
            .then(response => {
                console.log('response', response);
                console.log('url', response.data.url);
                setImageUrl(response.data.url);
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }

    const handleClick = () => {
        const outfitDescription = `An outfit that's color ${color}, has a ${fit} fit on the body, and have a ${style} style. More details about the outfit: ${textareaRef.current.value}`;
        setPrompt(outfitDescription);
        generateOutfit(outfitDescription);
    };

    return (
        <div className='personal-style-section'>
            <h1>Describe your outfit!</h1>
            <textarea id="personal-style" cols="70" rows="10" placeholder='Enter your style here' ref={textareaRef}></textarea>
            <ColoredButton color="#5ABCF2" text="Generate Outfit" fontSize="20px" className="generateButton" onClick={handleClick} />
            {/*{imageUrl && <img src={imageUrl} alt="Generated outfit" />} */}
        </div>
    );
};

export default PersonalStyle;