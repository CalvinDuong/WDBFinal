import StyleButton from "./styleButton";
import './StyleSection.css'

const styleIcons = [
    { style: 'casual', icon: '../../icons/icons8-clothes-96.png' },
    { style: 'formal', icon: '../../icons/icons8-formal-outfit-96.png' },
    { style: 'athletic', icon: '../../icons/icons8-trainers-96.png' },
];

const StyleSection = () => {
    return (
        <div className="style-section">
            <h1 className="style-title">Style</h1>
            <div className="style-button-bar">
                {styleIcons.map((item, index) => (
                    <StyleButton icon={item.icon} name={item.style} onClick={null} />
                ))}
            </div>
        </div>
    );
};

export default StyleSection;