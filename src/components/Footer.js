import React from 'react';
import GradientButton from './common/GradientButton';


const Footer = () => {

  return (
    <footer className="p-6">
      <div className="ml-2">
        <GradientButton
          text="Made by Power Group"
          onClick={(e =>
            e.preventDefault())
          }
        />
      </div>
    
    </footer>
  );
};

export default Footer;
