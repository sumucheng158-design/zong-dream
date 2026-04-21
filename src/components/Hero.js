import React from 'react';
import './Hero.css';
import { FORM_URL, LINE_URL, EVENT_DATE_DISPLAY } from '../config';
import { IconBamboo, IconLine } from './Icons';
import { useCountUp } from '../hooks/useCountUp';
import Countdown from './Countdown';



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
  // Count-up animations for stats (第2、第3個數字格)
  // 第1格是日期文字，不需要動畫；第2、第3格目前是文字，以後若改為數字可加在這裡
  // 預留 participant count 作為未來範例
  const participants = useCountUp(200, 1800);

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
          <img src="/logo.png" alt="粽夏夜 ZONG DREAM" className="hero-logo" width="240" height="240" />
        </div>

        <div className="hero-tag fade-up visible delay-1" aria-label="2026端午節限定">
          <span aria-hidden="true">✦</span> 2026端午節限定 <span aria-hidden="true">✦</span>
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
            <IconBamboo className="hero-btn-icon" /> 立即報名包粽夥伴
          </a>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline hero-cta-line"
            aria-label="加入粽夏夜 LINE 社群（開啟新視窗）"
          >
            <IconLine className="hero-btn-icon" /> 加入粽夏夜 +
          </a>
        </div>

        {/* 倒數計時器 */}
        <Countdown />

        <div className="hero-stats fade-up visible delay-5">
          <div className="stat">
            <span className="stat-num">{EVENT_DATE_DISPLAY.replace('2026.', '')}</span>
            <span className="stat-label">活動日期</span>
          </div>
          <div className="stat-divider" aria-hidden="true" />
          <div className="stat">
            <span
              ref={participants.ref}
              className="stat-num"
              aria-label={`超過 ${participants.value} 人`}
            >
              {participants.value}+
            </span>
            <span className="stat-label">預期參與人數</span>
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
