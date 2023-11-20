import React from 'react';
import './defaultstyle.css';

function StyleDefault(){
    const styles = ["style1","style2", "style3"]

    return (
        <div className="styles-container">
          {styles.map(style => (
            <StyleDisplay key={style} style={style} />
          ))}
        </div>
      );
    }
    
    function StyleDisplay({ style }) {
      return (
        <div className="style-info">
          <h2>{style}</h2>
        </div>
      );
    }
    
export default StyleDefault;
