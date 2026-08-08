import React from 'react';
import './About.css';
import { MapPin, ShieldCheck, Zap } from 'lucide-react';

const About = () => {
  return (
    <section className="about-section section-container" id="about">
      <div className="about-grid">
        <div className="about-image-wrapper">
          <div className="about-image-card">
            {/* The user will drop the performance_vehicle generated image here */}
            <div className="image-placeholder">
               <div className="overlay-glitch"></div>
            </div>
            <div className="experience-badge">
              <span className="years">20+</span>
              <span className="label">Years of Mastery</span>
            </div>
          </div>
        </div>
        
        <div className="about-content">
          <h2 className="section-title">The <span className="text-gradient">Two-Lift</span> Advantage</h2>
          <p className="about-description">
            Located in the heart of Plainville, our shop operates on a philosophy of high-fidelity mechanics. We don't just swap parts; we diagnose, engineer, and optimize.
          </p>
          <p className="about-description">
            With two dedicated state-of-the-art lifts, we maintain a hyper-focused environment. This means your vehicle—whether a precision racecar or a heavy-duty semi—gets undivided attention and expert craftsmanship.
          </p>
          
          <ul className="about-features">
            <li>
              <div className="feature-icon"><MapPin size={24} /></div>
              <div className="feature-text">
                <h4>Plainville Base</h4>
                <p>Local roots, world-class execution.</p>
              </div>
            </li>
            <li>
              <div className="feature-icon"><Zap size={24} /></div>
              <div className="feature-text">
                <h4>High-Fidelity Diagnostics</h4>
                <p>Data integrity meets mechanical expertise.</p>
              </div>
            </li>
            <li>
              <div className="feature-icon"><ShieldCheck size={24} /></div>
              <div className="feature-text">
                <h4>Uncompromising Quality</h4>
                <p>Built on trust, verified by performance.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
