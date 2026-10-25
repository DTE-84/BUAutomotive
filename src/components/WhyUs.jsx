import React from 'react';
import './WhyUs.css';
import { CheckCircle2, ShieldCheck, Users, Wrench } from 'lucide-react';
import { site } from '../siteConfig.js';

const promises = [
  {
    icon: <Users size={28} />,
    title: 'Straight Talk',
    text: 'We explain what\'s wrong in plain English and show you the problem when we can.',
  },
  {
    icon: <CheckCircle2 size={28} />,
    title: 'Your OK First',
    text: 'No surprise bills. We call with a price before any work beyond what you approved.',
  },
  {
    icon: <Wrench size={28} />,
    title: 'Fair, Honest Pricing',
    text: 'Small-town overhead means big-shop quality without the big-shop invoice.',
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'We Stand Behind It',
    text: 'If something isn\'t right with our work, bring it back. Our name is on the sign.',
  },
];

const WhyUs = () => {
  return (
    <section className="why-section" id="why-us">
      <div className="section-container">
        <div className="why-header reveal">
          <p className="eyebrow">The Uppinghouse Difference</p>
          <h2 className="section-title">Treated Like a Neighbor. Serviced Like a Pro.</h2>
        </div>

        <div className="why-grid">
          {promises.map((p, i) => (
            <div key={p.title} className="why-card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="why-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="motto-band">
        <div className="checker-strip" aria-hidden="true"></div>
        <blockquote className="motto-quote reveal">
          <p>
            &ldquo;{site.motto.split(',')[0]},{' '}
            <span className="text-accent">{site.motto.split(',')[1].trim()}.&rdquo;</span>
          </p>
          <cite>— {site.owner}</cite>
        </blockquote>
        <div className="checker-strip" aria-hidden="true"></div>
      </div>
    </section>
  );
};

export default WhyUs;
