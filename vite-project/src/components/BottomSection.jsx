import React from 'react';
import StyleSection from './styleSection';
import FitSection from './fitSection';
import PersonalStyle from './PersonalStyle';
import ColoredButton from './ColoredButton';
import './BottomSection.css';

const BottomSection = ({setStyle, setFit, color, style, fit, setImageUrl, imageUrl}) => {
    return (
        <div className='bottom-section'>
            <div className='left'>
                <div className='style-fit-buttons-container'>
                    <StyleSection setStyle={setStyle}/>
                    <div className='random'></div>
                    <FitSection setFit={setFit}/>
                </div>
                <div className='personal-style'>
                    <PersonalStyle color={color} style={style} fit={fit} setImageUrl={setImageUrl}/>
                </div>
            </div>
            <div className='right'>
                <img src={imageUrl} alt="" className='outfit' />
                <div className='discard-save-buttons'>
                    <ColoredButton color="#FF6060" text="Discard" fontSize="20px" />
                    <ColoredButton color="#71DC4C" text="Save Outfit" fontSize="20px" />
                </div>
            </div>

        </div>
    );
};

export default BottomSection;
