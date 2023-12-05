import StyleButton from "./styleButton";
import './StyleSection.css'

const styleIcons = [
    { style: 'Casual', icon: '../../icons/icons8-clothes-96.png' },
    { style: 'Formal', icon: '../../icons/icons8-formal-outfit-96.png' },
    { style: 'Athletic', icon: '../../icons/icons8-trainers-96.png' },
];

const StyleSection = ({setStyle}) => {
    return (
        <div className="style-section">
            <h1 className="style-title">Style</h1>
            <div className="style-button-bar">
                {styleIcons.map((item, index) => (
                    <StyleButton icon={item.icon} name={item.style} onClick={() => setStyle(item.style)} />
                ))}
            </div>
        </div>
    );
};

export default StyleSection;