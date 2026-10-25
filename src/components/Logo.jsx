import React from 'react';
import './Logo.css';

const Logo = ({ size = 'md' }) => {
  return (
    <span className={`logo logo-${size}`}>
      <svg className="logo-mark" viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="10" fill="var(--color-accent)" />
        <path d="M14 12h10v26a8 8 0 0 0 16 0V12h10v26a18 18 0 0 1-36 0z" fill="var(--color-white)" />
      </svg>
      <span className="logo-text">
        <span className="logo-name">Uppinghouse</span>
        <span className="logo-sub">Performance &amp; Auto Repair</span>
      </span>
    </span>
  );
};

export default Logo;
