import React from 'react';
import ColoredButton from './ColoredButton';
import './PersonalStyle.css';

const PersonalStyle = () => {
    return (
        <div className='personal-style-section'>
            <h1>What's your personal style?</h1>
            <textarea id="personal-style" cols="70" rows="10" placeholder='Enter your style here'></textarea>
            <ColoredButton color="#5ABCF2" text="Generate Outfit" fontSize="20px" />
        </div>
    );
};

export default PersonalStyle;