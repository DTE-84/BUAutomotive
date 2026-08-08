import React from 'react';
import './Hero.css';
import { ArrowRight, Wrench } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="badge">
          <Wrench size={16} className="text-green" />
          <span>Precision. Performance. Power.</span>
        </div>
        <h1 className="hero-title">
          Elite Mechanics For <br />
          <span className="text-gradient">Every Machine</span>
        </h1>
        <p className="hero-subtitle">
          From high-performance racecars and heavy-duty semi-trucks to your daily driver. 
          State-of-the-art diagnostics and uncompromising quality in Plainville.
        </p>
        <div className="hero-actions">
          <button className="btn-primary">
            Request Consultation <ArrowRight size={20} />
          </button>
          <button className="btn-secondary">
            View Our Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
