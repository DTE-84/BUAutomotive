import React from 'react';

// Decorative tach gauge for the hero. Values run 0–8 (x1000 RPM) across a 270° sweep.
const CX = 200;
const CY = 200;
const START = 135;
const SWEEP = 270;
const MAX = 8;
const REDLINE = 6.5;

const angleFor = (value) => START + (value / MAX) * SWEEP;

const point = (value, radius) => {
  const rad = (angleFor(value) * Math.PI) / 180;
  return [CX + radius * Math.cos(rad), CY + radius * Math.sin(rad)];
};

const arc = (from, to, radius) => {
  const [x1, y1] = point(from, radius);
  const [x2, y2] = point(to, radius);
  const large = ((to - from) / MAX) * SWEEP > 180 ? 1 : 0;
  return `M ${x1} ${y1} A ${radius} ${radius} 0 ${large} 1 ${x2} ${y2}`;
};

const ticks = [];
for (let v = 0; v <= MAX * 4; v += 1) {
  const value = v / 4;
  const major = v % 4 === 0;
  const [x1, y1] = point(value, major ? 142 : 150);
  const [x2, y2] = point(value, 162);
  ticks.push({ value, major, x1, y1, x2, y2 });
}

const Tachometer = () => {
  return (
    <svg className="tach" viewBox="0 0 400 400" role="img" aria-label="Tachometer gauge">
      <defs>
        <radialGradient id="tach-face" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor="#1f1f1f" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>
      </defs>

      <circle cx={CX} cy={CY} r="190" fill="#161616" stroke="#2f2f2f" strokeWidth="2" />
      <circle cx={CX} cy={CY} r="178" fill="url(#tach-face)" stroke="#000" strokeWidth="6" />

      <path d={arc(0, REDLINE, 168)} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="6" />
      <path d={arc(REDLINE, MAX, 168)} fill="none" stroke="var(--color-accent)" strokeWidth="10" />

      {ticks.map((t) => (
        <line
          key={t.value}
          x1={t.x1}
          y1={t.y1}
          x2={t.x2}
          y2={t.y2}
          stroke={t.value >= REDLINE ? 'var(--color-accent)' : '#fff'}
          strokeWidth={t.major ? 4 : 2}
          strokeLinecap="round"
          opacity={t.major ? 1 : 0.6}
        />
      ))}

      {ticks
        .filter((t) => t.major)
        .map((t) => {
          const [x, y] = point(t.value, 118);
          return (
            <text
              key={`n${t.value}`}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="central"
              className="tach-number"
              fill={t.value >= 7 ? 'var(--color-accent)' : '#fff'}
            >
              {t.value}
            </text>
          );
        })}

      <text x={CX} y={CY + 50} textAnchor="middle" className="tach-label">RPM × 1000</text>
      <text x={CX} y={CY + 80} textAnchor="middle" className="tach-brand">UPPINGHOUSE</text>

      <g className="tach-needle">
        <polygon points={`${CX - 18},${CY - 5} ${CX + 150},${CY - 1.5} ${CX + 150},${CY + 1.5} ${CX - 18},${CY + 5}`} fill="var(--color-accent)" />
      </g>
      <circle cx={CX} cy={CY} r="20" fill="#111" stroke="var(--color-accent)" strokeWidth="4" />
      <circle cx={CX} cy={CY} r="6" fill="var(--color-accent)" />
    </svg>
  );
};

export default Tachometer;
