import React from 'react';
import logo from './photo/download.png'; // Replace with your actual logo image

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <a href="/" className="logo">
            <div className='logoDiv'>
              <img src={logo} alt="Flower Shop Logo" />
            </div>  
            <div className='headerName'>Green House</div>   
          </a>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;