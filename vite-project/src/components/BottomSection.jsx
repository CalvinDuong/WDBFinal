import React from 'react';
import StyleSection from './styleSection';
import FitSection from './fitSection';
import PersonalStyle from './PersonalStyle';
import './BottomSection.css';

const BottomSection = () => {
    return (
        <div className='bottom-section'>
            <div className='left'>
                <div className='style-fit-buttons-container'>
                    <StyleSection/>
                    <FitSection/>
                </div>
                <div className='personal-style'>
                    <PersonalStyle/>
                </div>
            </div>
            <div className='right'>

            </div>

        </div>
    );
};

export default BottomSection;
