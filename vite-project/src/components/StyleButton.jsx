import React, { useState } from 'react';
import './StyleButton.css';

const StyleButton = ({ icon, name, onClick }) => {
    const [isClicked, setIsClicked] = useState(false);
    const isIconAString = typeof icon === 'string';

    const handleClick = () => {
        setIsClicked(!isClicked);
        onClick();
    };

    return (
        <button className={`card ${isClicked ? 'clicked' : ''}`} onClick={handleClick}>
            {icon && (
                <div className="icon">
                    {isIconAString ? <img src={icon} alt={name} /> : icon}
                </div>
            )}
            <div className="name">{name}</div>
        </button>
    );
};

export default StyleButton;

