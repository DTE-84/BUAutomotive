import React from 'react';
import './Logo.css';
import LogoMark from './LogoMark.jsx';

const Logo = ({ size = 'md' }) => {
  return (
    <span className={`logo logo-${size}`}>
      <LogoMark className="logo-mark" />
      <span className="logo-text">
        <span className="logo-name">Uppinghouse</span>
        <span className="logo-sub">Performance &amp; Auto Repair</span>
      </span>
    </span>
  );
};

export default Logo;
