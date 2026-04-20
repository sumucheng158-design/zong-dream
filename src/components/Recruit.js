import React from 'react';
import './Recruit.css';

const FORM_URL = 'https://www.surveycake.com/s/K9BoY';

// SVG Icons replacing emojis
const IconBamboo = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="13" y="2" width="4" height="28" rx="2" fill="currentColor" opacity="0.9"/>
    <rect x="7" y="8" width="4" height="20" rx="2" fill="currentColor" opacity="0.7"/>
    <rect x="19" y="5" width="4" height="22" rx="2" fill="currentColor" opacity="0.8"/>
    <path d="M13 10 Q8 8 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <path d="M17 14 Q22 12 24 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <path d="M13 18 Q8 16 6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
  </svg>
);
const IconBowl = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M4 14 Q4 26 16 26 Q28 26 28 14Z" fill="currentColor" opacity="0.85"/>
    <rect x="4" y="12" width="24" height="3" rx="1.5" fill="currentColor" opacity="0.6"/>
    <rect x="10" y="26" width="12" height="2.5" rx="1.25" fill="currentColor" opacity="0.5"/>
    <path d="M11 8 Q12 4 13 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    <path d="M16 7 Q17 3 18 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    <path d="M21 8 Q22 4 23 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
  </svg>
);
const IconCamera = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M11 6L9 9H4C2.9 9 2 9.9 2 11V25C2 26.1 2.9 27 4 27H28C29.1 27 30 26.1 30 25V11C30 9.9 29.1 9 28 9H23L21 6H11Z" fill="currentColor" opacity="0.85"/>
    <circle cx="16" cy="18" r="5" fill="rgba(0,0,0,0.25)"/>
    <circle cx="16" cy="18" r="3" fill="rgba(255,255,255,0.15)"/>
  </svg>
);
const IconHandshake = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M2 10 L10 10 L14 14 L18 12 L26 12 L30 10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.5"/>
    <path d="M2 22 L8 22 C8 22 10 26 14 26 L18 26 C22 26 24 22 24 22 L30 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5"/>
    <path d="M10 10 L10 22 M22 12 L22 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
    <path d="M14 14 L14 26 M18 12 L18 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.85"/>
  </svg>
);
const IconMedal = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M12 4 L16 10 L20 4Z" fill="currentColor" opacity="0.6"/>
    <circle cx="16" cy="21" r="9" fill="currentColor" opacity="0.85"/>
    <circle cx="16" cy="21" r="6" fill="rgba(0,0,0,0.2)"/>
    <path d="M13 21 L15 23 L19 18" stroke="rgba(255,255,255,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconMoon = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M22 6C14 8 9 15 11 23C13 30 21 34 28 30C20 30 14 24 14 17C14 10 17 5 22 6Z" fill="currentColor" opacity="0.9"/>
    <circle cx="25" cy="9" r="1.5" fill="currentColor" opacity="0.5"/>
    <circle cx="8" cy="12" r="1" fill="currentColor" opacity="0.4"/>
  </svg>
);
const IconFlash = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M18 3 L8 18 L15 18 L14 29 L24 14 L17 14 Z" fill="currentColor" opacity="0.9"/>
  </svg>
);
const IconCheck = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="check-icon">
    <path d="M3 8 L6.5 11.5 L13 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const IconDeco = () => (
  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="deco-icon">
    <path d="M8 2L9 6.5L13.5 7.5L9 8.5L8 13L7 8.5L2.5 7.5L7 6.5Z" fill="currentColor"/>
  </svg>
);

const perks = [
  { icon: <IconBamboo />, id: 'wrapping', title: '免費包粽體驗', desc: '全程材料、工具提供，從零開始學會手作粽子，帶一顆親手包的粽子回家。' },
  { icon: <IconBowl />,   id: 'food',     title: '夜市美食吃到飽', desc: '活動當晚，所有夜市攤位免費暢吃。夜市靈魂在於——吃飽才有力氣包粽。' },
  { icon: <IconCamera />, id: 'photo',    title: '夢幻場景拍照', desc: '燈串、蒸氣、復古場景設計，讓你的每一張照片都是IG爆讚的質感大片。' },
  { icon: <IconHandshake />, id: 'friends', title: '認識新朋友', desc: '和一群對生活有熱情的人一起，在揉米、包葉之間，展開一段新的友誼。' },
  { icon: <IconMedal />,  id: 'cert',     title: '包粽達人認證', desc: '活動結束後，獲得專屬「粽夏夜包粽夥伴」限定証書與紀念小物。' },
  { icon: <IconMoon />,   id: 'night',    title: '端午夜市夢幻夜', desc: '不只是活動，是一個你會想在記憶裡收藏的夜晚。光是來了，就值得了。' },
];

export default function Recruit() {
  return (
    <section className="recruit" id="recruit">
      <div className="recruit-bg" />

      {/* Decorative top divider */}
      <div className="section-divider" aria-hidden="true" />

      <div className="recruit-container">
        <div className="recruit-header fade-up">
          <div className="section-label">
            <span aria-hidden="true">✦</span> Join The Dream
          </div>
          <h2 className="section-title recruit-title">
            招募包粽夥伴
          </h2>
          <p className="recruit-subtitle">
            我們需要你——那個願意在端午夜市，<br />用雙手創造溫度的人。
          </p>
        </div>

        {/* Big CTA card */}
        <div className="recruit-hero-card fade-up delay-2">
          <div className="rhc-glow" />
          <div className="rhc-content">
            <div className="rhc-left">
              <div className="rhc-badge">名額有限</div>
              <h3 className="rhc-title">成為粽夏夜的一份子</h3>
              <p className="rhc-desc">
                不需要包粽子的經驗，只需要帶著好奇心與笑容出現。
                我們準備好一切，你只需要準備好自己。
              </p>
              <ul className="rhc-checklist">
                <li><CheckItem label="活動日期：2026年6月19日（端午節當天）" /></li>
                <li><CheckItem label="活動時間：下午4點 — 晚上10點" /></li>
                <li><CheckItem label="報名截止：額滿為止" /></li>
                <li><CheckItem label="報名費用：免費（限量開放）" /></li>
              </ul>
              <div className="rhc-cta-group">
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary pulse-btn rhc-cta"
                  aria-label="立即報名包粽夥伴（開啟新視窗）"
                >
                  <span className="rhc-btn-icon" aria-hidden="true"><IconBamboo /></span>
                  立即報名包粽夥伴
                </a>
                <div className="rhc-urgency">
                  <span className="rhc-flash" aria-hidden="true"><IconFlash /></span>
                  已有 <strong>47</strong> 位夥伴報名
                </div>
              </div>
            </div>
            <div className="rhc-right" aria-hidden="true">
              <div className="rhc-visual">
                <div className="rv-circle rv-c1" />
                <div className="rv-circle rv-c2" />
                <div className="rv-circle rv-c3" />
                <div className="rv-center-icon"><IconBamboo /></div>
                <div className="rv-badge rv-b1">好玩</div>
                <div className="rv-badge rv-b2">免費</div>
                <div className="rv-badge rv-b3">限量</div>
              </div>
            </div>
          </div>
        </div>

        {/* Perks grid */}
        <div className="perks-header fade-up">
          <h3>夥伴專屬福利</h3>
          <p>報名就有，完全免費</p>
        </div>
        <div className="perks-grid">
          {perks.map((p, i) => (
            <div key={p.id} className={`perk-card fade-up delay-${(i % 3) + 1}`}>
              <div className="perk-icon" aria-hidden="true">{p.icon}</div>
              <div className="perk-info">
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="recruit-bottom-cta fade-up">
          <p>等什麼？夢幻夜市只開一晚，錯過今年再等一年</p>
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary pulse-btn"
            style={{ fontSize: '1.1rem', padding: '1rem 2.8rem' }}
            aria-label="加入粽夏夜（開啟新視窗）"
          >
            加入粽夏夜 <IconDeco />
          </a>
        </div>
      </div>
    </section>
  );
}

function CheckItem({ label }) {
  return (
    <span className="check-item">
      <IconCheck />
      {label}
    </span>
  );
}
