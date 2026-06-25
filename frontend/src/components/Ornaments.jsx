import React from "react";

/**
 * Ornaments inspired by Reference 2 design system.
 * Pure SVG, gold strokes, no fills — feels engraved / sigil-like.
 */

export const SigilLogo = ({ size = 200, className = "" }) => (
  <svg
    viewBox="0 0 200 240"
    width={size}
    height={(size * 240) / 200}
    className={className}
    aria-label="Nocturnal Nine sigil"
    role="img"
    fill="none"
  >
    <defs>
      <linearGradient id="sigilGold" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#E6D7A6" />
        <stop offset="55%" stopColor="#C8A66A" />
        <stop offset="100%" stopColor="#8a7048" />
      </linearGradient>
    </defs>

    {/* Top diamond */}
    <g stroke="url(#sigilGold)" strokeWidth="1.4">
      <path d="M100 6 l9 10 -9 10 -9 -10 z" />
      <line x1="100" y1="26" x2="100" y2="40" />
    </g>

    {/* Outer oval */}
    <ellipse
      cx="100"
      cy="130"
      rx="70"
      ry="92"
      stroke="url(#sigilGold)"
      strokeWidth="1.6"
    />
    <ellipse
      cx="100"
      cy="130"
      rx="64"
      ry="86"
      stroke="url(#sigilGold)"
      strokeWidth="0.6"
      opacity="0.5"
    />

    {/* Stylised N */}
    <g stroke="url(#sigilGold)" strokeWidth="3.4" strokeLinecap="round">
      <path d="M58 78 L58 184" />
      <path d="M58 78 L142 184" />
      <path d="M142 78 L142 184" />
    </g>

    {/* Overlapping 9 */}
    <g stroke="url(#sigilGold)" strokeWidth="3" fill="none">
      <circle cx="100" cy="116" r="26" />
      <path d="M126 116 C126 156 116 178 92 196" strokeLinecap="round" />
    </g>

    {/* Inner sparkles */}
    <g fill="url(#sigilGold)">
      <path d="M70 100 l2 4 4 2 -4 2 -2 4 -2 -4 -4 -2 4 -2 z" />
      <path d="M132 154 l1.5 3 3 1.5 -3 1.5 -1.5 3 -1.5 -3 -3 -1.5 3 -1.5 z" />
    </g>

    {/* Bottom tick */}
    <g stroke="url(#sigilGold)" strokeWidth="1.2">
      <line x1="100" y1="222" x2="100" y2="232" />
      <path d="M93 232 l7 6 7 -6" />
    </g>
  </svg>
);

export const DiamondDivider = ({ width = 360, className = "" }) => (
  <svg
    viewBox="0 0 360 18"
    width={width}
    height={18}
    className={className}
    aria-hidden="true"
    fill="none"
    stroke="#C8A66A"
  >
    <line x1="10" y1="9" x2="160" y2="9" strokeWidth="1" />
    <line x1="200" y1="9" x2="350" y2="9" strokeWidth="1" />
    <g transform="translate(180 9)">
      <path d="M0 -8 L8 0 L0 8 L-8 0 Z" strokeWidth="1.2" />
      <path d="M0 -4 L4 0 L0 4 L-4 0 Z" strokeWidth="0.8" opacity="0.7" />
    </g>
    <circle cx="10" cy="9" r="1.2" fill="#C8A66A" />
    <circle cx="350" cy="9" r="1.2" fill="#C8A66A" />
  </svg>
);

export const OrnateDivider = ({ width = 460, className = "" }) => (
  <svg
    viewBox="0 0 460 40"
    width={width}
    height={40}
    className={className}
    aria-hidden="true"
    fill="none"
    stroke="#C8A66A"
    strokeWidth="1"
  >
    <line x1="20" y1="20" x2="170" y2="20" />
    <line x1="290" y1="20" x2="440" y2="20" />
    <path d="M20 20 l-6 -4 -6 4 6 4 z" fill="#C8A66A" />
    <path d="M440 20 l6 -4 6 4 -6 4 z" fill="#C8A66A" />
    <g transform="translate(230 20)">
      <path d="M0 -10 L10 0 L0 10 L-10 0 Z" strokeWidth="1.2" />
      <path d="M0 -5 L5 0 L0 5 L-5 0 Z" strokeWidth="0.8" opacity="0.7" />
      <path d="M-12 0 C-22 -10 -36 -10 -46 0 C-36 6 -22 4 -14 1" />
      <path d="M12 0 C22 -10 36 -10 46 0 C36 6 22 4 14 1" />
      <circle cx="-50" cy="0" r="1.2" fill="#C8A66A" />
      <circle cx="50" cy="0" r="1.2" fill="#C8A66A" />
    </g>
  </svg>
);

export const CompassRose = ({ size = 64, className = "" }) => (
  <svg
    viewBox="0 0 80 80"
    width={size}
    height={size}
    className={className}
    aria-hidden="true"
    fill="none"
    stroke="#C8A66A"
    strokeWidth="1"
  >
    <circle cx="40" cy="40" r="18" opacity="0.5" />
    <path d="M40 4 L44 36 L40 40 L36 36 Z" fill="#C8A66A" opacity="0.85" />
    <path d="M40 76 L44 44 L40 40 L36 44 Z" fill="#C8A66A" opacity="0.85" />
    <path d="M4 40 L34 44 L40 40 L34 36 Z" fill="#C8A66A" opacity="0.55" />
    <path d="M76 40 L46 44 L40 40 L46 36 Z" fill="#C8A66A" opacity="0.55" />
    <g opacity="0.6">
      <line x1="14" y1="14" x2="30" y2="30" />
      <line x1="66" y1="14" x2="50" y2="30" />
      <line x1="14" y1="66" x2="30" y2="50" />
      <line x1="66" y1="66" x2="50" y2="50" />
    </g>
    <circle cx="40" cy="40" r="2.2" fill="#C8A66A" />
  </svg>
);

export const Sparkle = ({ size = 22, className = "" }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    className={className}
    aria-hidden="true"
    fill="none"
    stroke="#C8A66A"
    strokeWidth="0.9"
  >
    <path d="M12 1 L13.6 10.4 L23 12 L13.6 13.6 L12 23 L10.4 13.6 L1 12 L10.4 10.4 Z" />
    <circle cx="12" cy="12" r="0.9" fill="#C8A66A" />
  </svg>
);
