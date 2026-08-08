import React from 'react';
import './Footer.css';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="section-container footer-grid">
        <div className="footer-brand">
          <h3 className="footer-logo">UPPINGHOUSE <span className="text-green">PERFORMANCE</span></h3>
          <p className="footer-tagline">
            High-fidelity mechanics and precision engineering for every machine on the road.
          </p>
        </div>
        
        <div className="footer-contact">
          <h4 className="footer-heading">Contact & Booking</h4>
          <ul className="contact-list">
            <li>
              <Phone size={18} className="text-green" />
              <span>(555) 019-8274</span> {/* Filler data */}
            </li>
            <li>
              <Mail size={18} className="text-green" />
              <span>service@uppinghouse.repair</span> {/* Filler data */}
            </li>
            <li>
              <MapPin size={18} className="text-green" />
              <span>100 Main St, Plainville</span> {/* Filler data */}
            </li>
          </ul>
        </div>
        
        <div className="footer-hours">
          <h4 className="footer-heading">Operating Hours</h4>
          <ul className="hours-list">
            <li>
              <Clock size={18} className="text-green" />
              <span>Mon - Fri: 8:00 AM - 6:00 PM</span>
            </li>
            <li className="hours-note">Weekend service available by appointment for performance and commercial clients.</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="section-container footer-bottom-flex">
          <p>&copy; {new Date().getFullYear()} Uppinghouse Performance & Repair. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
