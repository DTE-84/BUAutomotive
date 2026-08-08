import React from 'react';
import './Services.css';
import { Truck, Car, Settings2, Gauge } from 'lucide-react';

const servicesData = [
  {
    id: 'performance',
    icon: <Gauge size={32} />,
    title: 'Performance & Race',
    description: 'Track-ready precision. From engine building and tuning to suspension geometry for high-performance applications.',
  },
  {
    id: 'heavy-duty',
    icon: <Truck size={32} />,
    title: 'Heavy Duty & Semis',
    description: 'Comprehensive diesel mechanics and heavy-duty diagnostics to keep commercial fleets on the road.',
  },
  {
    id: 'foreign',
    icon: <Car size={32} />,
    title: 'Foreign & Exotic',
    description: 'Specialized tooling and deep expertise in European and Asian imports. Dealer-level diagnostics without the dealer price.',
  },
  {
    id: 'diagnostics',
    icon: <Settings2 size={32} />,
    title: 'Advanced Diagnostics',
    description: 'Data-driven electrical and mechanical troubleshooting to find the root cause, not just treat the symptoms.',
  }
];

const Services = () => {
  return (
    <section className="services-section section-container" id="services">
      <div className="services-header">
        <h2 className="section-title">Deep Expertise. <span className="text-green">Zero Compromise.</span></h2>
        <p className="section-description">
          Versatility built on a foundation of mastery. Whether it's a 500HP track car or an 80,000lb rig, we engineer solutions.
        </p>
      </div>

      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="glass-card service-card">
            <div className="service-icon-wrapper">
              {service.icon}
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-text">{service.description}</p>
            <div className="service-hover-line"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
