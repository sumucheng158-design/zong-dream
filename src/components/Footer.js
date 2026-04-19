import React from 'react';
import './Footer.css';

const FORM_URL = 'https://www.surveycake.com/s/K9BoY';

export default function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-bg" />

      {/* Final CTA banner */}
      <div className="footer-cta-banner fade-up">
        <div className="fcb-glow" />
        <div className="fcb-content">
          <div className="fcb-lanterns">
            {'🏮🏮🏮🏮🏮'.split('').map((l, i) => (
              <span key={i} style={{ animationDelay: `${i * 0.3}s` }} className="fcb-lantern">{l}</span>
            ))}
          </div>
          <h2 className="fcb-title">
            粽夏夜，等你一起做夢
          </h2>
          <p className="fcb-sub">
            2025 年最夢幻的端午夜市體驗，名額有限，不留遺憾
          </p>
          <div className="fcb-cta-group">
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary pulse-btn fcb-cta">
              🎋 立即報名包粽夥伴
            </a>
            <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
              加入粽夏夜 ✦
            </a>
          </div>
          <div className="fcb-deadline">⏰ 活動日期：2025.06.29 ｜ 名額有限，即刻報名</div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <div className="footer-logo-area">
            <img src="/logo.png" alt="粽夏夜 ZONG DREAM" className="footer-logo" />
            <div>
              <div className="footer-brand">粽夏夜 ZONG DREAM</div>
              <div className="footer-tagline">端午節最夢幻的夜市體驗</div>
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
                <li><span>活動日期：2025.06.29</span></li>
                <li><span>時間：16:00 — 22:00</span></li>
                <li><span>費用：完全免費</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-copyright">
          <span>© 2025 粽夏夜 ZONG DREAM. All rights reserved.</span>
          <span className="footer-made">用 ❤️ 與粽葉製作</span>
        </div>
      </div>
    </footer>
  );
}
