import StyleButton from "./styleButton";
// import './FitSection.css'

const fitIcons = [
    { fit: 'fitted', icon: '../../public/icons/icons8-loose-jeans-96.png' },
    { fit: 'loose', icon: '../../public/icons/icons8-tight-jeans-96.png' },
];

const FitSection = () => {
    return (
        <div>
            <h1 className="color-title">Fit</h1>
            <div className="color-section">
                {fitIcons.map((item, index) => (
                    <StyleButton icon={item.icon} name={item.fit} onClick={null} />
                ))}
            </div>
        </div>
    );
};

export default FitSection;
