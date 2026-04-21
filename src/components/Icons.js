/**
 * src/components/Icons.js
 * 全站共用 SVG icon 元件
 *
 * 使用方式：
 *   import { IconBamboo, IconCamera } from './Icons';
 *
 * 每個 icon 接受 className prop，可從呼叫端傳入樣式類別名。
 */

export const IconBamboo = ({ className = '' }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <rect x="13" y="2" width="4" height="28" rx="2" fill="currentColor" opacity="0.9"/>
    <rect x="7" y="8" width="4" height="20" rx="2" fill="currentColor" opacity="0.7"/>
    <rect x="19" y="5" width="4" height="22" rx="2" fill="currentColor" opacity="0.8"/>
    <path d="M13 10 Q8 8 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <path d="M17 14 Q22 12 24 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <path d="M13 18 Q8 16 6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

export const IconLine = ({ className = '' }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <rect x="3" y="3" width="26" height="26" rx="7" fill="currentColor" opacity="0.15"/>
    <path d="M16 7C10.477 7 6 10.81 6 15.5c0 3.07 1.96 5.76 4.9 7.31-.19.7-.69 2.53-.79 2.92-.12.48.17.47.36.34.15-.1 2.4-1.63 3.37-2.29.69.1 1.41.15 2.16.15 5.523 0 10-3.81 10-8.5S21.523 7 16 7z" fill="currentColor" opacity="0.9"/>
    <path d="M13 17v-4M13 13h2.5M13 15h2M19 17v-4M17 13v4h2" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconCamera = ({ className = '' }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <path d="M11 6L9 9H4C2.9 9 2 9.9 2 11V25C2 26.1 2.9 27 4 27H28C29.1 27 30 26.1 30 25V11C30 9.9 29.1 9 28 9H23L21 6H11Z" fill="currentColor" opacity="0.85"/>
    <circle cx="16" cy="18" r="5" fill="rgba(0,0,0,0.25)"/>
    <circle cx="16" cy="18" r="3" fill="rgba(255,255,255,0.15)"/>
  </svg>
);

export const IconMoon = ({ className = '' }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <path d="M22 6C14 8 9 15 11 23C13 30 21 34 28 30C20 30 14 24 14 17C14 10 17 5 22 6Z" fill="currentColor" opacity="0.9"/>
    <circle cx="25" cy="9" r="1.5" fill="currentColor" opacity="0.5"/>
    <circle cx="8" cy="12" r="1" fill="currentColor" opacity="0.4"/>
  </svg>
);

export const IconLantern = ({ className = '' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <line x1="24" y1="2" x2="24" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <ellipse cx="24" cy="13" rx="8" ry="3" fill="currentColor" opacity="0.5"/>
    <path d="M16 13 Q13 24 16 35 Q24 40 32 35 Q35 24 32 13Z" fill="currentColor" opacity="0.85"/>
    <ellipse cx="24" cy="35" rx="8" ry="3" fill="currentColor" opacity="0.5"/>
    <line x1="24" y1="38" x2="24" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <ellipse cx="24" cy="24" rx="5" ry="6" fill="rgba(255,220,120,0.4)"/>
  </svg>
);

export const IconPot = ({ className = '' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <ellipse cx="24" cy="32" rx="16" ry="10" fill="currentColor" opacity="0.85"/>
    <ellipse cx="24" cy="22" rx="16" ry="6" fill="currentColor" opacity="0.7"/>
    <rect x="8" y="22" width="32" height="10" fill="currentColor" opacity="0.85"/>
    <rect x="5" y="20" width="5" height="8" rx="2" fill="currentColor" opacity="0.6"/>
    <rect x="38" y="20" width="5" height="8" rx="2" fill="currentColor" opacity="0.6"/>
    <path d="M18 16 Q20 10 22 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    <path d="M24 14 Q26 8 28 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
    <path d="M30 16 Q32 10 34 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

export const IconFirework = ({ className = '' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <circle cx="24" cy="20" r="4" fill="currentColor" opacity="0.9"/>
    {[0,45,90,135,180,225,270,315].map((deg, i) => (
      <line
        key={i}
        x1="24" y1="20"
        x2={24 + 14 * Math.cos((deg * Math.PI) / 180)}
        y2={20 + 14 * Math.sin((deg * Math.PI) / 180)}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity={0.5 + (i % 3) * 0.15}
      />
    ))}
    <circle cx="24" cy="20" r="2" fill="rgba(255,230,100,0.8)"/>
  </svg>
);

export const IconSparkle = ({ className = '' }) => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <path d="M24 6L26.5 20 L40 22 L26.5 24 L24 38 L21.5 24 L8 22 L21.5 20Z" fill="currentColor" opacity="0.9"/>
    <path d="M38 9L39.2 15 L45 15.8 L39.2 16.6 L38 23 L36.8 16.6 L31 15.8 L36.8 15Z" fill="currentColor" opacity="0.6"/>
    <path d="M10 30L10.8 34 L15 34.6 L10.8 35.2 L10 40 L9.2 35.2 L5 34.6 L9.2 34Z" fill="currentColor" opacity="0.5"/>
  </svg>
);

export const IconBowl = ({ className = '' }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <path d="M4 14 Q4 26 16 26 Q28 26 28 14Z" fill="currentColor" opacity="0.85"/>
    <rect x="4" y="12" width="24" height="3" rx="1.5" fill="currentColor" opacity="0.6"/>
    <rect x="10" y="26" width="12" height="2.5" rx="1.25" fill="currentColor" opacity="0.5"/>
    <path d="M11 8 Q12 4 13 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    <path d="M16 7 Q17 3 18 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    <path d="M21 8 Q22 4 23 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
  </svg>
);

export const IconHandshake = ({ className = '' }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <path d="M2 10 L10 10 L14 14 L18 12 L26 12 L30 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5"/>
    <path d="M2 22 L8 22 C8 22 10 26 14 26 L18 26 C22 26 24 22 24 22 L30 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5"/>
    <path d="M10 10 L10 22 M22 12 L22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    <path d="M14 14 L14 26 M18 12 L18 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.85"/>
  </svg>
);

export const IconMedal = ({ className = '' }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <path d="M12 4 L16 10 L20 4Z" fill="currentColor" opacity="0.6"/>
    <circle cx="16" cy="21" r="9" fill="currentColor" opacity="0.85"/>
    <circle cx="16" cy="21" r="6" fill="rgba(0,0,0,0.2)"/>
    <path d="M13 21 L15 23 L19 18" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconFlash = ({ className = '' }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <path d="M18 3 L8 18 L15 18 L14 29 L24 14 L17 14 Z" fill="currentColor" opacity="0.9"/>
  </svg>
);

export const IconCheck = ({ className = 'check-icon' }) => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <path d="M3 8 L6.5 11.5 L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const IconDeco = ({ className = '' }) => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <path d="M8 2L9 6.5L13.5 7.5L9 8.5L8 13L7 8.5L2.5 7.5L7 6.5Z" fill="currentColor"/>
  </svg>
);

export const IconHeart = ({ className = '' }) => (
  <svg viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <path d="M10 16S1 10.5 1 5C1 2.8 2.8 1 5 1C6.8 1 8.4 2.1 10 4C11.6 2.1 13.2 1 15 1C17.2 1 19 2.8 19 5C19 10.5 10 16 10 16Z" fill="#e8941a" opacity="0.85"/>
  </svg>
);

export const IconPen = ({ className = '' }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <path d="M22 4L28 10L12 26H6V20L22 4Z" fill="currentColor" opacity="0.85"/>
    <path d="M19 7L25 13" stroke="rgba(0,0,0,0.2)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const IconPhone = ({ className = '' }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <rect x="9" y="3" width="14" height="26" rx="3" fill="currentColor" opacity="0.85"/>
    <rect x="12" y="6" width="8" height="14" rx="1" fill="rgba(0,0,0,0.2)"/>
    <circle cx="16" cy="24" r="1.5" fill="rgba(0,0,0,0.35)"/>
  </svg>
);

export const IconCity = ({ className = '' }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <rect x="3" y="14" width="8" height="14" rx="1" fill="currentColor" opacity="0.7"/>
    <rect x="12" y="8" width="10" height="20" rx="1" fill="currentColor" opacity="0.9"/>
    <rect x="23" y="17" width="6" height="11" rx="1" fill="currentColor" opacity="0.6"/>
    <rect x="14" y="11" width="2" height="2" fill="rgba(0,0,0,0.25)"/>
    <rect x="18" y="11" width="2" height="2" fill="rgba(0,0,0,0.25)"/>
    <rect x="14" y="16" width="2" height="2" fill="rgba(0,0,0,0.25)"/>
    <rect x="18" y="16" width="2" height="2" fill="rgba(0,0,0,0.25)"/>
  </svg>
);

export const IconParty = ({ className = '' }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <path d="M6 26L14 8L26 20Z" fill="currentColor" opacity="0.85" strokeLinejoin="round"/>
    <circle cx="24" cy="8" r="3" fill="currentColor" opacity="0.7"/>
    <path d="M20 4L22 6M28 10L26 12M24 4L24 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

export const IconHome = ({ className = '' }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <path d="M4 16L16 5L28 16" fill="currentColor" opacity="0.6"/>
    <rect x="7" y="15" width="18" height="13" rx="1" fill="currentColor" opacity="0.85"/>
    <rect x="13" y="20" width="6" height="8" rx="1" fill="rgba(0,0,0,0.25)"/>
  </svg>
);

// ── About.js icons ────────────────────────────────────────────

export const IconCandle = ({ className = '' }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <rect x="12" y="14" width="8" height="16" rx="2" fill="currentColor" opacity="0.85"/>
    <path d="M16 14 Q14 10 15 7 Q16 4 16 4 Q16 4 17 7 Q18 10 16 14Z" fill="currentColor" opacity="0.9"/>
    <ellipse cx="16" cy="14" rx="4" ry="1.5" fill="currentColor" opacity="0.5"/>
  </svg>
);

export const IconBean = ({ className = '' }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <ellipse cx="16" cy="16" rx="10" ry="8" fill="currentColor" opacity="0.85"/>
    <path d="M9 13 Q12 10 16 12 Q20 14 22 19" stroke="rgba(0,0,0,0.25)" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>
);

export const IconPin = ({ className = '' }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <path d="M16 3C11.58 3 8 6.58 8 11C8 17.5 16 29 16 29C16 29 24 17.5 24 11C24 6.58 20.42 3 16 3Z" fill="currentColor" opacity="0.85"/>
    <circle cx="16" cy="11" r="3.5" fill="rgba(0,0,0,0.3)"/>
  </svg>
);

/**
 * IconSparkleSm — 32×32 版本，供 About.js 使用
 * （Gallery 使用的 IconSparkle 是 48×48 版本）
 */
export const IconSparkleSm = ({ className = '' }) => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
    <path d="M16 4 L17.5 13 L26 14 L17.5 15.5 L16 24 L14.5 15.5 L6 14 L14.5 13Z" fill="currentColor" opacity="0.9"/>
    <path d="M26 6 L26.8 10 L30 10.5 L26.8 11 L26 15 L25.2 11 L22 10.5 L25.2 10Z" fill="currentColor" opacity="0.6"/>
    <path d="M7 20 L7.6 23 L10 23.4 L7.6 23.8 L7 27 L6.4 23.8 L4 23.4 L6.4 23Z" fill="currentColor" opacity="0.5"/>
  </svg>
);
