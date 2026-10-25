import React from 'react';
import './Services.css';
import { Car, Cog, Disc, Gauge, Tractor, Zap } from 'lucide-react';

const servicesData = [
  {
    id: 'repair',
    icon: <Car size={30} />,
    title: 'General Auto Repair',
    description: 'Oil changes, tune-ups, belts, hoses, batteries and everything that keeps your daily driver dependable.',
  },
  {
    id: 'diagnostics',
    icon: <Zap size={30} />,
    title: 'Diagnostics & Electrical',
    description: 'Check engine light on? Modern scan tools and old-school know-how to find the real problem — not just guess at parts.',
  },
  {
    id: 'brakes',
    icon: <Disc size={30} />,
    title: 'Brakes & Suspension',
    description: 'Pads, rotors, lines, shocks, struts and steering. Stop straight, ride smooth and handle like you should.',
  },
  {
    id: 'engine',
    icon: <Cog size={30} />,
    title: 'Engine & Drivetrain',
    description: 'From leaks and misfires to major engine and transmission work, done carefully and explained clearly.',
  },
  {
    id: 'diesel',
    icon: <Tractor size={30} />,
    title: 'Diesel, Farm & Fleet',
    description: 'Pickups, semis and the equipment that keeps the farm running. We know downtime costs you money.',
  },
  {
    id: 'performance',
    icon: <Gauge size={30} />,
    title: 'Performance & Race',
    description: 'Builds, tuning and setup backed by race-shop training. Whether it\'s the street or the track, we make it faster.',
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="section-container">
        <div className="services-header reveal">
          <p className="eyebrow">What We Do</p>
          <h2 className="section-title">
            Full-Service Shop. <span className="text-accent">No Runaround.</span>
          </h2>
          <p className="section-lead">
            Bring it in — car, truck, tractor or race car. If it has an engine, we can get it running right.
          </p>
        </div>

        <div className="services-grid">
          {servicesData.map((service, i) => (
            <article
              key={service.id}
              className="service-card reveal"
              style={{ transitionDelay: `${(i % 3) * 90}ms` }}
            >
              <span className="service-number">{String(i + 1).padStart(2, '0')}</span>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-text">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
