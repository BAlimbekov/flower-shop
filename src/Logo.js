
import React from 'react';
import photo from './Photos&Videos/download.png'; // Replace with your actual logo image

const Logo = () => {
  return (
    <div className='logoName-container'>
      <div className='logoDiv'>
        <img src={photo} alt="Flower Shop Logo" />
      </div>
      <div className='headerName'>Green House</div>
    </div>
  );
};

export default Logo;
