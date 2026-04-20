import React from 'react';
import './Process.css';

// SVG icons replacing emojis
const IconPen = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M22 4L28 10L12 26H6V20L22 4Z" fill="currentColor" opacity="0.85"/>
    <path d="M19 7L25 13" stroke="rgba(0,0,0,0.2)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);
const IconPhone = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="9" y="3" width="14" height="26" rx="3" fill="currentColor" opacity="0.85"/>
    <rect x="12" y="6" width="8" height="14" rx="1" fill="rgba(0,0,0,0.2)"/>
    <circle cx="16" cy="24" r="1.5" fill="rgba(0,0,0,0.35)"/>
  </svg>
);
const IconCity = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="3" y="14" width="8" height="14" rx="1" fill="currentColor" opacity="0.7"/>
    <rect x="12" y="8" width="10" height="20" rx="1" fill="currentColor" opacity="0.9"/>
    <rect x="23" y="17" width="6" height="11" rx="1" fill="currentColor" opacity="0.6"/>
    <rect x="14" y="11" width="2" height="2" fill="rgba(0,0,0,0.25)"/>
    <rect x="18" y="11" width="2" height="2" fill="rgba(0,0,0,0.25)"/>
    <rect x="14" y="16" width="2" height="2" fill="rgba(0,0,0,0.25)"/>
    <rect x="18" y="16" width="2" height="2" fill="rgba(0,0,0,0.25)"/>
  </svg>
);
const IconBamboo = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="13" y="2" width="4" height="28" rx="2" fill="currentColor" opacity="0.9"/>
    <rect x="7" y="8" width="4" height="20" rx="2" fill="currentColor" opacity="0.7"/>
    <rect x="19" y="5" width="4" height="22" rx="2" fill="currentColor" opacity="0.8"/>
    <path d="M13 10 Q8 8 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    <path d="M17 14 Q22 12 24 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
  </svg>
);
const IconParty = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M6 26L14 8L26 20Z" fill="currentColor" opacity="0.85" strokeLinejoin="round"/>
    <circle cx="24" cy="8" r="3" fill="currentColor" opacity="0.7"/>
    <path d="M20 4L22 6M28 10L26 12M24 4L24 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
  </svg>
);
const IconHome = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M4 16L16 5L28 16" fill="currentColor" opacity="0.6"/>
    <rect x="7" y="15" width="18" height="13" rx="1" fill="currentColor" opacity="0.85"/>
    <rect x="13" y="20" width="6" height="8" rx="1" fill="rgba(0,0,0,0.25)"/>
  </svg>
);

const steps = [
  { num: '01', icon: <IconPen />, id: 'register', title: '線上報名', desc: '點擊報名按鈕，填寫基本資料，不到2分鐘完成報名。額滿為止，先搶先贏！' },
  { num: '02', icon: <IconPhone />, id: 'confirm', title: '收到確認', desc: '報名後24小時內收到確認通知，裡面有活動詳細資訊、地點與注意事項。' },
  { num: '03', icon: <IconCity />, id: 'gather', title: '當天集合', desc: '依時間到達會場，超美入口打個卡，進入夢幻夜市模式，一切從這裡開始。' },
  { num: '04', icon: <IconBamboo />, id: 'wrap', title: '學習包粽', desc: '跟著老師傅的節奏，從選葉、舀米、放料到綁繩，每一步都有人指導，超簡單。' },
  { num: '05', icon: <IconParty />, id: 'enjoy', title: '享受夜市', desc: '包完粽子後，自由探索所有攤位，吃好吃滿，拍個美照，把夜晚玩到最後一刻。' },
  { num: '06', icon: <IconHome />, id: 'takehome', title: '帶粽回家', desc: '帶走你親手包的粽子、獨家紀念品，還有這個夏夜留下的所有美好回憶。' },
];

export default function Process() {
  return (
    <section className="process" id="process">
      <div className="process-bg" />

      <div className="process-container">
        <div className="process-header fade-up">
          <div className="section-label">
            <span aria-hidden="true">✦</span> How It Works
          </div>
          <h2 className="section-title process-title">參與流程</h2>
          <p className="process-sub">六個步驟，帶你走進粽夏夜之夢</p>
        </div>

        <div className="process-timeline">
          {steps.map((step, i) => (
            <div key={step.id} className={`process-step fade-up delay-${(i % 3) + 1}`}>
              <div className="step-number" aria-hidden="true">{step.num}</div>
              <div className="step-connector" aria-hidden="true" />
              <div className="step-card">
                <div className="step-icon" aria-hidden="true">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
