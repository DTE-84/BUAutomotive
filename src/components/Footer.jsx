import React from 'react';
import './Footer.css';
import { Facebook, MapPin, Phone } from 'lucide-react';
import Logo from './Logo.jsx';
import { site, fullAddress, mapsLink, phoneHref } from '../siteConfig.js';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="checker-strip" aria-hidden="true"></div>
      <div className="footer-inner">
        <div className="footer-brand">
          <Logo size="lg" />
          <p className="footer-motto">{site.motto}.</p>
        </div>

        <nav className="footer-nav" aria-label="Footer">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#why-us">Why Us</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer-contact">
          <a href={phoneHref}><Phone size={18} /> {site.phone}</a>
          <a href={mapsLink} target="_blank" rel="noreferrer"><MapPin size={18} /> {fullAddress}</a>
          {site.facebook && (
            <a href={site.facebook} target="_blank" rel="noreferrer"><Facebook size={18} /> Facebook</a>
          )}
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
        <p>Proudly serving Plainville &amp; Adams County, Illinois.</p>
      </div>
    </footer>
  );
};

export default Footer;
