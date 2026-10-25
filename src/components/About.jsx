import React from 'react';
import './About.css';
import { Flag, Handshake, MapPin, Wrench } from 'lucide-react';
import LogoMark from './LogoMark.jsx';
import { site } from '../siteConfig.js';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="section-container about-grid">
        <div className="about-visual reveal">
          {/* To use a real photo of Bobby or the shop, replace this div with an <img className="about-photo" /> */}
          <div className="about-photo-placeholder" aria-hidden="true">
            <LogoMark className="about-photo-mark" outline="#1a1a1a" />
          </div>
          <div className="about-nameplate">
            <span className="about-nameplate-name">{site.owner}</span>
            <span className="about-nameplate-role">Owner &amp; Lead Mechanic</span>
          </div>
          <div className="about-badge">
            <span className="about-badge-years">{site.yearsExperience}</span>
            <span className="about-badge-label">Years Turning Wrenches</span>
          </div>
        </div>

        <div className="about-content reveal">
          <p className="eyebrow">Meet the Shop</p>
          <h2 className="section-title">
            Hometown Mechanic. <span className="text-accent">Race-Shop Skills.</span>
          </h2>
          <p className="about-text">
            {site.owner} has been the guy folks around Plainville call when something just isn&apos;t
            right. No fancy waiting room, no upsell script — just straight answers, fair prices and
            work he&apos;d put his own name on. Because he does.
          </p>
          <p className="about-text">
            Uppinghouse Performance &amp; Auto Repair is a family shop. With Bobby&apos;s daughter trained
            at NASCAR mechanic school, the same precision that goes into a race car now goes into
            every vehicle that rolls through our doors on Main Street.
          </p>

          <ul className="about-points">
            <li>
              <span className="about-point-icon"><Handshake size={22} /></span>
              <div>
                <h3>Family Owned &amp; Operated</h3>
                <p>You talk to the people actually working on your vehicle.</p>
              </div>
            </li>
            <li>
              <span className="about-point-icon"><Flag size={22} /></span>
              <div>
                <h3>NASCAR-Trained Next Generation</h3>
                <p>Race-shop discipline and modern technical training.</p>
              </div>
            </li>
            <li>
              <span className="about-point-icon"><MapPin size={22} /></span>
              <div>
                <h3>Right Here on Main Street</h3>
                <p>Local roots, local neighbors, local accountability.</p>
              </div>
            </li>
            <li>
              <span className="about-point-icon"><Wrench size={22} /></span>
              <div>
                <h3>Done Right the First Time</h3>
                <p>We diagnose before we replace, and we stand behind our work.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
