import React, { useEffect, useRef } from 'react';
import './Hero.css';

const FORM_URL = 'https://www.surveycake.com/s/K9BoY';

function LanternString({ count = 8, top = '8%', delay = 0 }) {
  return (
    <div className="lantern-string" style={{ top, animationDelay: `${delay}s` }}>
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

function Particle({ style }) {
  return <div className="particle" style={style} />;
}

export default function Hero() {
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    left: `${Math.random() * 100}%`,
    bottom: `${Math.random() * 40}%`,
    animationDelay: `${Math.random() * 5}s`,
    animationDuration: `${3 + Math.random() * 4}s`,
    width: `${2 + Math.random() * 3}px`,
    height: `${2 + Math.random() * 3}px`,
  }));

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
      {particles.map((p, i) => <Particle key={i} style={p} />)}

      {/* Steam effects */}
      <div className="steam-group">
        {[0, 1, 2].map(i => <div key={i} className="steam" style={{ animationDelay: `${i * 0.8}s`, left: `${48 + i * 3}%` }} />)}
      </div>

      {/* Content */}
      <div className="hero-content">
        <div className="hero-logo-wrap fade-in visible">
          <img src="/logo.png" alt="粽夏夜 ZONG DREAM" className="hero-logo" />
        </div>

        <div className="hero-tag fade-up visible delay-1">
          <span>✦</span> 2025 端午節限定 <span>✦</span>
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
          <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary pulse-btn hero-cta-main">
            🎋 立即報名包粽夥伴
          </a>
          <a href="#about" className="btn-outline">
            了解活動 ↓
          </a>
        </div>

        <div className="hero-stats fade-up visible delay-5">
          <div className="stat">
            <span className="stat-num">6.29</span>
            <span className="stat-label">活動日期</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">夜市</span>
            <span className="stat-label">沉浸式場景</span>
          </div>
          <div className="stat-divider" />
          <div className="stat">
            <span className="stat-num">∞</span>
            <span className="stat-label">粽子種類</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span>向下探索</span>
        <div className="scroll-arrow" />
      </div>
    </section>
  );
}
