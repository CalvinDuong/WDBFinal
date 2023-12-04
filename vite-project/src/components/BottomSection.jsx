import React from 'react';
import StyleSection from './styleSection';
import FitSection from './fitSection';
import PersonalStyle from './PersonalStyle';
import ColoredButton from './ColoredButton';
import './BottomSection.css';

const BottomSection = () => {
    return (
        <div className='bottom-section'>
            <div className='left'>
                <div className='style-fit-buttons-container'>
                    <StyleSection />
                    <div className='random'></div>
                    <FitSection />
                </div>
                <div className='personal-style'>
                    <PersonalStyle />
                </div>
            </div>
            <div className='right'>
                <img src="https://hard-drive.net/wp-content/uploads/2023/04/yoshi.jpg.webp" alt="" className='outfit' />
                <div className='discard-save-buttons'>
                    <ColoredButton color="#FF6060" text="Discard" fontSize="20px" />
                    <ColoredButton color="#71DC4C" text="Save Outfit" fontSize="20px" />
                </div>
            </div>

        </div>
    );
};

export default BottomSection;
