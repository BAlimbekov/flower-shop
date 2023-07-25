import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <h3>Flower Shop</h3>
            <p>
            Невский пр., 67 Литера, Санкт-Петербург, 191025
            </p>
          </div>
          <div className="footer-right">
            <h3>Contact Us</h3>
            <p>
              Email: info@flowershop.com <br />
              Phone: +1 (123) 456-7890
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Flower Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
//Невский пр., 67 Литера А, Санкт-Петербург, 191025