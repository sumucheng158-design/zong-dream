import React from 'react';
import './Footer.css';

const FORM_URL = 'https://www.surveycake.com/s/K9BoY';

// Pure SVG lantern component — replaces 🏮 emoji
function SvgLantern({ style }) {
  return (
    <svg
      viewBox="0 0 24 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="svg-lantern"
      style={style}
      aria-hidden="true"
    >
      {/* Top cap */}
      <ellipse cx="12" cy="7" rx="6" ry="2" fill="#c9a227" opacity="0.8"/>
      {/* String */}
      <line x1="12" y1="0" x2="12" y2="7" stroke="#c9a227" strokeWidth="1" opacity="0.6"/>
      {/* Body */}
      <path d="M6 7 Q3 18 6 29 Q12 33 18 29 Q21 18 18 7Z" fill="#e8941a" opacity="0.85"/>
      {/* Inner glow */}
      <path d="M8 10 Q6 18 8 27 Q12 30 16 27 Q18 18 16 10Z" fill="#ffd966" opacity="0.35"/>
      {/* Ribs */}
      <path d="M6.5 13 Q12 11 17.5 13" stroke="#c9a227" strokeWidth="0.8" opacity="0.5" fill="none"/>
      <path d="M5.5 19 Q12 17 18.5 19" stroke="#c9a227" strokeWidth="0.8" opacity="0.5" fill="none"/>
      <path d="M6.5 25 Q12 23 17.5 25" stroke="#c9a227" strokeWidth="0.8" opacity="0.5" fill="none"/>
      {/* Bottom cap */}
      <ellipse cx="12" cy="29" rx="6" ry="2" fill="#c9a227" opacity="0.7"/>
      {/* Tassel */}
      <line x1="12" y1="31" x2="12" y2="38" stroke="#e8941a" strokeWidth="1.5" strokeLinecap="round" opacity="0.7"/>
      <line x1="10" y1="35" x2="10" y2="40" stroke="#e8941a" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
      <line x1="14" y1="35" x2="14" y2="40" stroke="#e8941a" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
    </svg>
  );
}

// Deco star replacing ✦ in button
const IconDeco = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="footer-deco-icon">
    <path d="M8 2L9 6.5L13.5 7.5L9 8.5L8 13L7 8.5L2.5 7.5L7 6.5Z" fill="currentColor"/>
  </svg>
);

// Heart icon replacing ❤️
const IconHeart = () => (
  <svg viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="footer-heart">
    <path d="M10 16S1 10.5 1 5C1 2.8 2.8 1 5 1C6.8 1 8.4 2.1 10 4C11.6 2.1 13.2 1 15 1C17.2 1 19 2.8 19 5C19 10.5 10 16 10 16Z" fill="#e8941a" opacity="0.85"/>
  </svg>
);

// Bamboo icon for CTA button
const IconBamboo = () => (
  <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="footer-btn-icon">
    <rect x="8" y="1" width="3" height="18" rx="1.5" fill="currentColor" opacity="0.9"/>
    <rect x="4" y="5" width="3" height="13" rx="1.5" fill="currentColor" opacity="0.7"/>
    <rect x="12" y="3" width="3" height="14" rx="1.5" fill="currentColor" opacity="0.8"/>
    <path d="M8 7 Q5 5 4 3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
    <path d="M11 10 Q14 8 15 6" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.6"/>
  </svg>
);

const LANTERN_COUNT = 5;

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-bg" />

      {/* Final CTA banner */}
      <div className="footer-cta-banner fade-up">
        <div className="fcb-glow" />
        <div className="fcb-content">
          <div className="fcb-lanterns" aria-hidden="true">
            {Array.from({ length: LANTERN_COUNT }).map((_, i) => (
              <SvgLantern key={i} style={{ animationDelay: `${i * 0.3}s` }} />
            ))}
          </div>
          <h2 className="fcb-title">
            粽夏夜，等你一起做夢
          </h2>
          <p className="fcb-sub">
            2026年最夢幻的端午夜市體驗，名額有限，不留遺憾
          </p>
          <div className="fcb-cta-group">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary pulse-btn fcb-cta"
              aria-label="立即報名包粽夥伴（開啟新視窗）"
            >
              <IconBamboo /> 立即報名包粽夥伴
            </a>
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              aria-label="加入粽夏夜（開啟新視窗）"
            >
              加入粽夏夜 <IconDeco />
            </a>
          </div>
          <div className="fcb-deadline">
            <span className="fcb-clock" aria-hidden="true">
              {/* Clock icon */}
              <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 4.5V8L10.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            活動日期：2026.06.19 ｜ 名額有限，即刻報名
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <div className="footer-logo-area">
            <img src="/logo.png" alt="粽夏夜 ZONG DREAM" className="footer-logo" width="48" height="48" />
            <div>
              <div className="footer-brand">粽夏夜ZONG DREAM</div>
              <div className="footer-tagline">沉浸式端午節體驗</div>
            </div>
          </div>

          <div className="footer-links-grid">
            <div className="footer-col">
              <h4>快速連結</h4>
              <ul>
                <li><a href="#about">活動介紹</a></li>
                <li><a href="#zongzi">粽子展示</a></li>
                <li><a href="#recruit">招募夥伴</a></li>
                <li><a href="#process">參與流程</a></li>
                <li><a href="#faq">常見問題</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>報名資訊</h4>
              <ul>
                <li><a href={FORM_URL} target="_blank" rel="noopener noreferrer">立即報名</a></li>
                <li><span>活動日期：2025.06.19</span></li>
                <li><span>活動時間：16:00 — 22:00</span></li>
                <li><span>費用：完全免費</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-copyright">
          <span>© 2026粽夏夜ZONG DREAM. All rights reserved.</span>
          <span className="footer-made">
            用 <IconHeart /> 與粽葉製作
          </span>
        </div>
      </div>
    </footer>
  );
}
