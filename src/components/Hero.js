import React from 'react';
import './Hero.css';

const FORM_URL = 'https://www.surveycake.com/s/K9BoY';
const LINE_URL = 'https://line.me/ti/g/zongdream2025'; // 替換為實際 LINE 社群連結

const IconBamboo = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="hero-btn-icon">
    <rect x="13" y="2" width="4" height="28" rx="2" fill="currentColor" opacity="0.9"/>
    <rect x="7" y="8" width="4" height="20" rx="2" fill="currentColor" opacity="0.7"/>
    <rect x="19" y="5" width="4" height="22" rx="2" fill="currentColor" opacity="0.8"/>
    <path d="M13 10 Q8 8 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <path d="M17 14 Q22 12 24 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <path d="M13 18 Q8 16 6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

const IconLine = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="hero-btn-icon">
    <rect x="3" y="3" width="26" height="26" rx="7" fill="currentColor" opacity="0.15"/>
    <path d="M16 7C10.477 7 6 10.81 6 15.5c0 3.07 1.96 5.76 4.9 7.31-.19.7-.69 2.53-.79 2.92-.12.48.17.47.36.34.15-.1 2.4-1.63 3.37-2.29.69.1 1.41.15 2.16.15 5.523 0 10-3.81 10-8.5S21.523 7 16 7z" fill="currentColor" opacity="0.9"/>
    <path d="M13 17v-4M13 13h2.5M13 15h2M19 17v-4M17 13v4h2" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

function LanternString({ count = 8, top = '8%', delay = 0 }) {
  return (
    <div className="lantern-string" style={{ top, animationDelay: `${delay}s` }} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="lantern-wrapper" style={{ animationDelay: `${i * 0.3 + delay}s` }}>
          <div className="lantern" style={{ background: i % 2 === 0 ? '#f07030' : '#e8941a' }}>
            <div className="lantern-inner" />
          </div>
        </div>
      ))}
    </div>
  );
}

// Pre-generate stable particle data (not re-random on every render)
const PARTICLES = Array.from({ length: 20 }, (_, i) => ({
  id: `p${i}`,
  left: `${(i * 5.13) % 100}%`,
  bottom: `${(i * 7.3) % 40}%`,
  animationDelay: `${(i * 0.37) % 5}s`,
  animationDuration: `${3 + (i * 0.41) % 4}s`,
  width: `${2 + (i * 0.17) % 3}px`,
  height: `${2 + (i * 0.17) % 3}px`,
}));

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Background layers */}
      <div className="hero-bg-gradient" />
      <div className="hero-radial-glow" />
      <div className="hero-noise" />

      {/* Lantern strings */}
      <LanternString count={9} top="0%" delay={0} />
      <LanternString count={6} top="2%" delay={0.5} />

      {/* Particles / fireflies */}
      {PARTICLES.map(p => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            bottom: p.bottom,
            animationDelay: p.animationDelay,
            animationDuration: p.animationDuration,
            width: p.width,
            height: p.height,
          }}
          aria-hidden="true"
        />
      ))}

      {/* Steam effects */}
      <div className="steam-group" aria-hidden="true">
        {[0, 1, 2].map(i => (
          <div
            key={i}
            className="steam"
            style={{ animationDelay: `${i * 0.8}s`, left: `${48 + i * 3}%` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-logo-wrap fade-in visible">
          <img src="/logo.png" alt="粽夏夜 ZONG DREAM" className="hero-logo" width="160" height="160" />
        </div>

        <div className="hero-tag fade-up visible delay-1" aria-label="2025 端午節限定">
          <span aria-hidden="true">✦</span> 2025 端午節限定 <span aria-hidden="true">✦</span>
        </div>

        <h1 className="hero-title fade-up visible delay-2">
          粽夏夜<br />
          <span className="hero-title-en">ZONG DREAM</span>
          <br />之夢
        </h1>

        <p className="hero-subtitle fade-up visible delay-3">
          當夜市燈火搖曳，當粽香飄散夜空<br />
          你是否也曾夢見，那個最美的端午夜晚？
        </p>

        <div className="hero-cta-group fade-up visible delay-4">
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary pulse-btn hero-cta-main"
            aria-label="立即報名包粽夥伴（開啟新視窗）"
          >
            <IconBamboo /> 立即報名包粽夥伴
          </a>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline hero-cta-line"
            aria-label="加入粽夏夜 LINE 社群（開啟新視窗）"
          >
            <IconLine /> 加入粽夏夜 +
          </a>
        </div>

        <div className="hero-stats fade-up visible delay-5">
          <div className="stat">
            <span className="stat-num">6.29</span>
            <span className="stat-label">活動日期</span>
          </div>
          <div className="stat-divider" aria-hidden="true" />
          <div className="stat">
            <span className="stat-num">夜市</span>
            <span className="stat-label">沉浸式場景</span>
          </div>
          <div className="stat-divider" aria-hidden="true" />
          <div className="stat">
            <span className="stat-num">∞</span>
            <span className="stat-label">粽子種類</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint" aria-hidden="true">
        <span>向下探索</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  );
}
