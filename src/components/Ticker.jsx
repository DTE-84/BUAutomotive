import React from 'react';
import './Ticker.css';

const items = [
  'Auto Repair',
  'Diagnostics',
  'Brakes & Suspension',
  'Engine & Transmission',
  'Diesel & Heavy Duty',
  'Performance Builds',
  'Farm & Fleet',
  'Oil & Maintenance',
];

const Ticker = () => {
  // Rendered twice so the marquee loops seamlessly.
  const row = [...items, ...items];

  return (
    <div className="ticker" aria-label="Services offered">
      <div className="ticker-track">
        {row.map((item, i) => (
          <span key={i} className="ticker-item" aria-hidden={i >= items.length}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;
