import React, { useState } from 'react';
import './Gallery.css';

// SVG icons replacing emojis — each reflects the scene
const IconLantern = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <line x1="24" y1="2" x2="24" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <ellipse cx="24" cy="13" rx="8" ry="3" fill="currentColor" opacity="0.5"/>
    <path d="M16 13 Q13 24 16 35 Q24 40 32 35 Q35 24 32 13Z" fill="currentColor" opacity="0.85"/>
    <ellipse cx="24" cy="35" rx="8" ry="3" fill="currentColor" opacity="0.5"/>
    <line x1="24" y1="38" x2="24" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <ellipse cx="24" cy="24" rx="5" ry="6" fill="rgba(255,220,120,0.4)"/>
  </svg>
);
const IconBamboo = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="20" y="3" width="6" height="42" rx="3" fill="currentColor" opacity="0.9"/>
    <rect x="10" y="12" width="6" height="30" rx="3" fill="currentColor" opacity="0.7"/>
    <rect x="30" y="7" width="6" height="34" rx="3" fill="currentColor" opacity="0.8"/>
    <path d="M20 15 Q12 12 9 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    <path d="M26 22 Q34 18 37 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    <path d="M20 28 Q12 24 9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
  </svg>
);
const IconMoon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M32 8C20 10 12 20 14 32C16 42 26 48 36 44C26 44 18 36 18 26C18 16 24 8 32 8Z" fill="currentColor" opacity="0.9"/>
    <circle cx="36" cy="12" r="2" fill="currentColor" opacity="0.5"/>
    <circle cx="40" cy="22" r="1.5" fill="currentColor" opacity="0.4"/>
    <circle cx="10" cy="14" r="1.5" fill="currentColor" opacity="0.4"/>
  </svg>
);
const IconPot = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
const IconFirework = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
const IconSparkle = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M24 6L26.5 20 L40 22 L26.5 24 L24 38 L21.5 24 L8 22 L21.5 20Z" fill="currentColor" opacity="0.9"/>
    <path d="M38 9L39.2 15 L45 15.8 L39.2 16.6 L38 23 L36.8 16.6 L31 15.8 L36.8 15Z" fill="currentColor" opacity="0.6"/>
    <path d="M10 30L10.8 34 L15 34.6 L10.8 35.2 L10 40 L9.2 35.2 L5 34.6 L9.2 34Z" fill="currentColor" opacity="0.5"/>
  </svg>
);

// Accent colors for each gallery tile
const galleryItems = [
  { id: 'lantern', icon: <IconLantern />, label: '燈籠長廊', desc: '數百盞手工燈籠排列成長廊，走進去就像走進一場夢', aspect: 'tall', accent: 'rgba(240,112,48,0.18)', border: 'rgba(240,112,48,0.35)' },
  { id: 'bamboo', icon: <IconBamboo />, label: '竹影包粽區', desc: '老師傅現場示範，新手也能包出完美粽子', aspect: 'wide', accent: 'rgba(80,180,80,0.12)', border: 'rgba(80,180,80,0.3)' },
  { id: 'moon', icon: <IconMoon />, label: '夜市全景', desc: '入夜後的會場，光影交錯，美得像一幅畫', aspect: 'normal', accent: 'rgba(100,120,220,0.12)', border: 'rgba(100,120,220,0.3)' },
  { id: 'pot', icon: <IconPot />, label: '蒸粽現場', desc: '熱氣蒸騰，粽香四溢，這是端午節最美的煙火', aspect: 'normal', accent: 'rgba(245,200,66,0.1)', border: 'rgba(245,200,66,0.3)' },
  { id: 'firework', icon: <IconFirework />, label: '燈火晚會', desc: '活動尾聲的燈火儀式，願望隨燈光升向夜空', aspect: 'wide', accent: 'rgba(220,80,160,0.12)', border: 'rgba(220,80,160,0.3)' },
  { id: 'sparkle', icon: <IconSparkle />, label: '市集攤位', desc: '精心佈置的夜市攤位，每個角落都是拍照亮點', aspect: 'tall', accent: 'rgba(245,200,66,0.1)', border: 'rgba(245,200,66,0.25)' },
];

// SVG camera icon for the note
const IconCamera = () => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="gallery-note-icon">
    <path d="M9 3L7.17 5H4C2.9 5 2 5.9 2 7V19C2 20.1 2.9 21 4 21H20C21.1 21 22 20.1 22 19V7C22 5.9 21.1 5 20 5H16.83L15 3H9ZM12 18C9.24 18 7 15.76 7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 15.76 14.76 18 12 18Z" fill="currentColor"/>
    <circle cx="12" cy="13" r="3" fill="currentColor" opacity="0.5"/>
  </svg>
);

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-bg" />
      <div className="gallery-container">
        <div className="gallery-header fade-up">
          <div className="section-label">
            <span aria-hidden="true">✦</span> Atmosphere
          </div>
          <h2 className="section-title gallery-title">活動氛圍</h2>
          <p className="gallery-sub">每一個角落，都是夢的一部分</p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className={`gallery-item gi-${item.aspect} fade-up delay-${(i % 3) + 1}`}
              onClick={() => setActive(active === item.id ? null : item.id)}
              role="button"
              tabIndex={0}
              aria-label={`${item.label}：${item.desc}`}
              onKeyDown={e => e.key === 'Enter' && setActive(active === item.id ? null : item.id)}
            >
              <div
                className="gi-placeholder"
                style={{ '--gi-accent': item.accent, '--gi-border': item.border }}
              >
                <div className="gi-icon">{item.icon}</div>
                <div className="gi-label-static">{item.label}</div>
                <div className="gi-overlay">
                  <span className="gi-label">{item.label}</span>
                  <span className="gi-desc">{item.desc}</span>
                </div>
                <div className="gi-corner tl" /><div className="gi-corner tr" />
                <div className="gi-corner bl" /><div className="gi-corner br" />
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-note fade-up">
          <IconCamera />
          <p>活動現場將設有專業攝影師，提供夥伴們精美活動照片留念</p>
        </div>
      </div>
    </section>
  );
}
