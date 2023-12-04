import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="contained">
          <div className="col-lg-12">
            <p>&copy; {new Date().getFullYear()} Outfit Forecast</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;