import React from 'react';
import './Hero.css';
import { ArrowRight, Clock, MapPin, Phone } from 'lucide-react';
import Tachometer from './Tachometer.jsx';
import { site, mapsLink, phoneHref } from '../siteConfig.js';

const Hero = () => {
  return (
    <section className="hero-section" id="top">
      <div className="hero-stripes" aria-hidden="true"></div>

      <div className="hero-inner">
        <div className="hero-content">
          <p className="eyebrow">Plainville, Illinois</p>
          <h1 className="hero-title">
            Little Town Feel,
            <span className="hero-title-accent">Big Time Service.</span>
          </h1>
          <p className="hero-subtitle">
            Honest repairs, sharp diagnostics and real performance know-how from {site.owner}
            {' '}— the mechanic Plainville has trusted for years. Daily drivers, farm trucks,
            diesels and race builds, all handled right the first time.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Schedule Service <ArrowRight size={20} />
            </a>
            <a href={phoneHref} className="btn btn-outline">
              <Phone size={18} /> Call the Shop
            </a>
          </div>
        </div>

        <div className="hero-gauge">
          <Tachometer />
        </div>
      </div>

      <div className="hero-infobar">
        <a href={mapsLink} target="_blank" rel="noreferrer" className="hero-info">
          <MapPin size={22} />
          <span>
            <strong>Find Us</strong>
            {site.address.street} {site.address.city}, {site.address.state}
          </span>
        </a>
        <div className="hero-info">
          <Clock size={22} />
          <span>
            <strong>Shop Hours</strong>
            {site.hours[0].days.replace(' – ', '–')}: {site.hours[0].time}
          </span>
        </div>
        <a href={phoneHref} className="hero-info">
          <Phone size={22} />
          <span>
            <strong>Call Today</strong>
            {site.phone}
          </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
