import React from 'react';
import logo from './Photos&Videos/download.png'; // Replace with your actual logo image

const Header = () => {
  const whatsappNumber = '+79214286021'; // Replace with the desired WhatsApp phone number

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/shop">Shop</a></li>
            <li><a href="/about">About</a></li>
            {/* Directly open WhatsApp chat with the specified phone number */}
            <li><a href={`https://wa.me/${whatsappNumber}`} target="_blank">Chat</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
