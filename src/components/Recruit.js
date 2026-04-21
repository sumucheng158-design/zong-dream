import React from 'react';
import './Recruit.css';
import { FORM_URL, EVENT_DATE_ZH, EVENT_TIME } from '../config';
import { IconBamboo, IconBowl, IconCamera, IconHandshake, IconMedal, IconMoon, IconFlash, IconCheck, IconDeco } from './Icons';

// SVG Icons replacing emojis

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
                <li><CheckItem>活動日期：{EVENT_DATE_ZH}（端午節當天）</CheckItem></li>
                <li><CheckItem>活動時間：{EVENT_TIME}</CheckItem></li>
                <li><CheckItem>報名截止：額滿為止</CheckItem></li>
                <li><CheckItem>報名費用：免費（限量開放）</CheckItem></li>
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
            加入粽夏夜 <IconDeco className="deco-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

function CheckItem({ children }) {
  return (
    <span className="check-item">
      <IconCheck className="check-icon" />
      {children}
    </span>
  );
}
