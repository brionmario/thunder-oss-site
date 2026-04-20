// Thunder — Icons + Logo + small primitives (vanilla JSX)

const TIcons = {
  bolt: 'M13 2L3 14h7l-1 8 10-12h-7l1-8z',
  apple: 'M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z',
  windows: 'M3 5.5 11 4v7H3zM3 12h8v7l-8-1.5zM12 3.9 21 3v8h-9zM12 12h9v9l-9-1.1z',
  linux: 'M12 2a5 5 0 0 0-5 5c0 1 .3 2 .7 2.8-.8.8-1.7 2-1.7 3.2 0 .8.3 1.4.7 2L5 18c-.7.7-1 1.4-1 2 0 1 1 2 2 2h12c1 0 2-1 2-2 0-.6-.3-1.3-1-2l-1.7-3c.4-.6.7-1.2.7-2 0-1.2-.9-2.4-1.7-3.2.4-.8.7-1.8.7-2.8a5 5 0 0 0-5-5z M9 7c0 .6.2 1 .5 1s.5-.4.5-1-.2-1-.5-1-.5.4-.5 1z M14 7c0 .6.2 1 .5 1s.5-.4.5-1-.2-1-.5-1-.5.4-.5 1z',
  docker: 'M2 11h3V8H2v3zm4 0h3V8H6v3zm0-4h3V4H6v3zm4 4h3V8h-3v3zm0-4h3V4h-3v3zm4 4h3V8h-3v3zM22 10.5s-.7 1.5-2.4 1.5c-1.5 0-2.3-.4-2.3-.4s-1.8 4.4-6.5 4.4C4.5 16 2 11.5 2 11.5s3-.5 4.5.5c0 0 1 1 2.5 1s3-1 3-1 1.5 1 3 1c2 0 2.5-1 2.5-1s.5 0 1.5-.5c.7-.3 3 0 3 0z',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  key: 'M21 2l-9.6 9.6a6 6 0 1 1-3 3L2 21l3 3 4-4v-3h3l1-1v-3h3l4-4z',
  rocket: 'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2zM9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5',
  box: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z M3.3 7 12 12l8.7-5 M12 22V12',
  terminal: 'M4 17l6-6-6-6M12 19h8',
  code: 'M16 18l6-6-6-6M8 6l-6 6 6 6',
  zap: 'M13 2L3 14h7l-1 8 10-12h-7l1-8z',
  bot: 'M12 8V4H8 M16 4h-4v4h4zM3 12h18v8H3zM7 16h.01M17 16h.01',
  check: 'M20 6L9 17l-5-5',
  github: 'M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.84-2.34 4.68-4.57 4.93.36.31.69.92.69 1.85V21c0 .27.16.59.67.5A10 10 0 0 0 22 12 10 10 0 0 0 12 2z',
  arrow: 'M5 12h14M12 5l7 7-7 7',
  arrowRight: 'M5 12h14M12 5l7 7-7 7',
  copy: 'M16 4h-8a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM4 12V4a2 2 0 0 1 2-2h8',
  users: 'M9 11a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2',
  download: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3',
  feather: 'M12 2a10 10 0 0 0-3 0M2 12a10 10 0 0 0 0 3',
  server: 'M2 5h20v5H2zM2 14h20v5H2zM6 8h.01M6 17h.01M11 8h.01M11 17h.01',
  lock: 'M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 10 0v4',
  book: 'M4 19.5A2.5 2.5 0 0 1 6.5 17H20M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z',
  feather2: 'M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5zM16 8 2 22M17.5 15H9',
  copy2: 'M20 9h-9a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2zM5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1',
  slack: 'M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5zM20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5zM3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5s.67-1.5 1.5-1.5zM14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5zM10 9.5c0 .83-.67 1.5-1.5 1.5h-5C2.67 11 2 10.33 2 9.5S2.67 8 3.5 8h5c.83 0 1.5.67 1.5 1.5z'
};

const TIcon = ({ name, size = 20, stroke = 2, fill = 'none', style = {} }) => {
  const d = TIcons[name] || '';
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}>
      {d.split('M').filter(Boolean).map((p, i) => <path key={i} d={'M' + p} />)}
    </svg>
  );
};

// Filled bolt (for logo)
const BoltMark = ({ size = 32, animated = true }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" style={{ display: 'block', filter: animated ? 'drop-shadow(0 0 16px rgba(122,240,184,0.5))' : 'none' }}>
    <defs>
      <linearGradient id="bolt-g" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0%" stopColor="#7af0b8" />
        <stop offset="60%" stopColor="#10996b" />
        <stop offset="100%" stopColor="#0a6b4a" />
      </linearGradient>
    </defs>
    {/* Geometric bolt — angular, flat-faceted */}
    <path
      d="M23 3 L9 22 L18 22 L15 37 L31 16 L22 16 Z"
      fill="url(#bolt-g)"
      stroke="#7af0b8"
      strokeWidth="0.5"
      strokeLinejoin="round"
    />
    {/* Inner highlight */}
    <path
      d="M23 3 L14 18 L18 18 Z"
      fill="rgba(255,255,255,0.22)"
    />
  </svg>
);

const Logo = ({ size = 26 }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    <BoltMark size={size + 6} />
    <span style={{
      fontSize: size - 2,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--t-text)'
    }}>Thunder</span>
  </div>
);

// A decorative SVG background with scattered faint bolts
const BoltsBg = () => (
  <svg className="bolts-bg" viewBox="0 0 1200 400" preserveAspectRatio="none">
    {[[100,60,28],[260,160,22],[470,40,30],[680,200,24],[890,80,32],[1050,260,26],[180,300,20],[560,320,18],[950,330,22]].map(([x,y,s],i) => (
      <g key={i} transform={`translate(${x},${y}) scale(${s/40})`} opacity="0.6">
        <path d="M23 3 L9 22 L18 22 L15 37 L31 16 L22 16 Z" fill="#7af0b8"/>
      </g>
    ))}
  </svg>
);

Object.assign(window, { TIcons, TIcon, BoltMark, Logo, BoltsBg });
