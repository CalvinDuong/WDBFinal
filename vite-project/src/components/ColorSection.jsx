import StyleButton from "./styleButton";
import './ColorSection.css'

const colorCodes = [
    { color: 'Red', hexCode: '#F89090' },
    { color: 'Orange', hexCode: '#F8C290' },
    { color: 'Yellow', hexCode: '#ECDA7A' },
    { color: 'Green', hexCode: '#5FC75D' },
    { color: 'Blue', hexCode: '#5ABCF2' },
    { color: 'Purple', hexCode: '#9A42DF' },
    { color: 'Black', hexCode: '#000000' },
    { color: 'White', hexCode: '#FFFFFF' },
    { color: 'Brown', hexCode: '#8A6124' },
];

const ColoredCircle = ({ hexCode }) => {
    const circleStyle = {
        backgroundColor: hexCode,
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        marginBottom: '25px'
    };

    return <div style={circleStyle} />;
};

const ColorSection = ({setColor}) => {
    return (
        <div>
            <h1 className="color-title"> Color Scheme</h1>
            <div className="color-section">
                {colorCodes.map((item, index) => (
                    <StyleButton icon={<ColoredCircle hexCode={item.hexCode} />} name={item.color} onClick={() => setColor(item.color)} />
                ))}
            </div>
        </div>
    );
};

export default ColorSection;