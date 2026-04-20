import React from 'react';
import './About.css';

// SVG icons replacing emojis
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
const IconCandle = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <rect x="12" y="14" width="8" height="16" rx="2" fill="currentColor" opacity="0.85"/>
    <path d="M16 14 Q14 10 15 7 Q16 4 16 4 Q16 4 17 7 Q18 10 16 14Z" fill="currentColor" opacity="0.9"/>
    <ellipse cx="16" cy="14" rx="4" ry="1.5" fill="currentColor" opacity="0.5"/>
  </svg>
);
const IconBean = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="16" cy="16" rx="10" ry="8" fill="currentColor" opacity="0.85"/>
    <path d="M9 13 Q12 10 16 12 Q20 14 22 19" stroke="rgba(0,0,0,0.25)" strokeWidth="2" strokeLinecap="round" fill="none"/>
  </svg>
);
const IconSparkle = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M16 4 L17.5 13 L26 14 L17.5 15.5 L16 24 L14.5 15.5 L6 14 L14.5 13Z" fill="currentColor" opacity="0.9"/>
    <path d="M26 6 L26.8 10 L30 10.5 L26.8 11 L26 15 L25.2 11 L22 10.5 L25.2 10Z" fill="currentColor" opacity="0.6"/>
    <path d="M7 20 L7.6 23 L10 23.4 L7.6 23.8 L7 27 L6.4 23.8 L4 23.4 L6.4 23Z" fill="currentColor" opacity="0.5"/>
  </svg>
);
const IconPin = () => (
  <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M16 3C11.58 3 8 6.58 8 11C8 17.5 16 29 16 29C16 29 24 17.5 24 11C24 6.58 20.42 3 16 3Z" fill="currentColor" opacity="0.85"/>
    <circle cx="16" cy="11" r="3.5" fill="rgba(0,0,0,0.3)"/>
  </svg>
);

const aboutCards = [
  { icon: <IconBamboo />, id: 'bamboo', title: '端午文化', text: '探索屈原傳說、龍舟文化、香包習俗，重新認識這個古老節日的靈魂。' },
  { icon: <IconCandle />, id: 'candle', title: '夜市氛圍', text: '燈串閃爍、蒸氣飄香，整個空間就是一幅會呼吸的端午畫卷。' },
  { icon: <IconBean />, id: 'bean', title: '親手包粽', text: '不需要任何經驗，在老師傅的帶領下，包出一顆屬於你的粽子故事。' },
  { icon: <IconSparkle />, id: 'sparkle', title: '夢幻體驗', text: '精心設計的光影場景，讓每一個瞬間都值得被記錄、被珍藏。' },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-bg" />
      <div className="about-container">
        <div className="about-left fade-up">
          <div className="section-label">
            <span className="label-deco" aria-hidden="true">✦</span> About The Festival
          </div>
          <h2 className="section-title about-title">
            粽夏夜之夢<br />
            <span>是什麼？</span>
          </h2>
          <div className="about-divider" />
          <p className="about-text">
            端午節不只是吃粽子的節日，它是一個關於傳承、創造、與人相聚的夏夜儀式。
          </p>
          <p className="about-text">
            「粽夏夜之夢」是一場沉浸式夜市體驗，我們把端午節的靈魂打包成一個充滿燈火、香氣、笑聲的夢幻空間。
            你可以動手包粽子、品嚐傳統與創意的碰撞，在暖黃燈光下感受最真實的台灣味。
          </p>
          <p className="about-text highlight-text">
            <span className="hl-icon" aria-hidden="true"><IconPin /></span>
            不只是活動，是一場你會記得一輩子的端午夢。
          </p>
        </div>

        <div className="about-right fade-up delay-2">
          <div className="about-cards">
            {aboutCards.map((card, i) => (
              <div key={card.id} className={`about-card fade-up delay-${i + 2}`}>
                <div className="card-icon" aria-hidden="true">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Origin story */}
      <div className="origin-strip fade-up">
        <div className="origin-content">
          <div className="origin-year">西元前278年</div>
          <div className="origin-line" />
          <div className="origin-text">
            屈原投江，百姓以粽葉包米投入江中，既是祭祀也是守護。
            兩千年後的今天，我們用同樣的粽葉，包入對這個時代的愛與期待。
          </div>
        </div>
      </div>
    </section>
  );
}
