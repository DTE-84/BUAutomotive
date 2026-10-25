import React, { useId } from 'react';

// Adjustable wrench over a red-to-gold swirl, redrawn from the logo on Bobby's business card.
// Each swoosh is a circle with an offset circle cut out of it, leaving a tapered crescent.
const SWOOSHES = [
  { cx: 33, cy: 37, r: 23, dx: 4.2, dy: -3.4, cut: 22.6 },
  { cx: 35.5, cy: 35, r: 15.5, dx: 3.4, dy: -2.8, cut: 15.2 },
  { cx: 38, cy: 33, r: 8.5, dx: 2.6, dy: -2.2, cut: 8.3 },
];

const LogoMark = ({ className, wrenchColor = '#e3261b', outline = 'var(--color-black)' }) => {
  const id = useId().replace(/:/g, '');

  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <defs>
        <linearGradient id={`swirl-${id}`} x1="0" y1="10" x2="0" y2="62" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#d8231a" />
          <stop offset="0.55" stopColor="#ff4d1a" />
          <stop offset="1" stopColor="#f6a623" />
        </linearGradient>
        {SWOOSHES.map((s, i) => (
          <mask key={i} id={`cut-${id}-${i}`} maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
            <rect width="64" height="64" fill="#fff" />
            <circle cx={s.cx + s.dx} cy={s.cy + s.dy} r={s.cut} fill="#000" />
          </mask>
        ))}
        <mask id={`jaw-${id}`} maskUnits="userSpaceOnUse" x="-20" y="-20" width="80" height="40">
          <rect x="-20" y="-20" width="80" height="40" fill="#fff" />
          <path d="M -12 -2.4 L 0.5 -2.4 L 0.5 2.4 L -12 4.2 Z" fill="#000" />
        </mask>
      </defs>

      {SWOOSHES.map((s, i) => (
        <circle key={i} cx={s.cx} cy={s.cy} r={s.r} fill={`url(#swirl-${id})`} mask={`url(#cut-${id}-${i})`} />
      ))}

      {/* Wrench drawn along the x axis from the head (0,0), then rotated into place */}
      <g transform="translate(13.5 12.5) rotate(45)">
        <g mask={`url(#jaw-${id})`} fill={wrenchColor} stroke={outline} strokeWidth="2" paintOrder="stroke">
          <path d="M 4 -3 L 43 -2.6 A 2.6 2.6 0 0 1 43 2.6 L 4 3.4 Z" />
          <path d="M -8.5 -5.5 Q -6 -9 0 -8.5 Q 7 -7.5 8 0 Q 7.5 6.5 1 7.6 L -6.5 7.4 Q -9.5 5.5 -9 2.5 Z" />
        </g>
        <circle cx="41.5" cy="0" r="1.3" fill={outline} />
        <rect x="4.2" y="-4.6" width="3.6" height="9.2" rx="1" fill="none" stroke={outline} strokeWidth="0.9" />
      </g>
    </svg>
  );
};

export default LogoMark;
