import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './styles/Footer.css';

function Footer() {

  return (
<div>
      <footer className="footer">
    <div className='social'>
      <SocialIcon className='social' url="https://github.com/BoxLegends"  bgColor="#3a3a3a"/>
      </div>
      <div className='social'>
      <SocialIcon url="https://www.linkedin.com/in/nicholas-burns-289592265/"  bgColor="#3a3a3a"/>
      </div>
      <h4>This app was made with React.<br></br>2023</h4>
      </footer>
    </div>
  );
}

export default Footer;