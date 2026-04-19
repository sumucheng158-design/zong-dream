import React, { useState } from 'react';
import './Gallery.css';

const galleryItems = [
  { id: 1, emoji: '🏮', label: '燈籠長廊', desc: '數百盞手工燈籠排列成長廊，走進去就像走進一場夢', aspect: 'tall' },
  { id: 2, emoji: '🎋', label: '竹影包粽區', desc: '老師傅現場示範，新手也能包出完美粽子', aspect: 'wide' },
  { id: 3, emoji: '🌙', label: '夜市全景', desc: '入夜後的會場，光影交錯，美得像一幅畫', aspect: 'normal' },
  { id: 4, emoji: '🫕', label: '蒸粽現場', desc: '熱氣蒸騰，粽香四溢，這是端午節最美的煙火', aspect: 'normal' },
  { id: 5, emoji: '🎆', label: '燈火晚會', desc: '活動尾聲的燈火儀式，願望隨燈光升向夜空', aspect: 'wide' },
  { id: 6, emoji: '✨', label: '市集攤位', desc: '精心佈置的夜市攤位，每個角落都是拍照亮點', aspect: 'tall' },
];

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-bg" />
      <div className="gallery-container">
        <div className="gallery-header fade-up">
          <div className="section-label">✦ Atmosphere</div>
          <h2 className="section-title gallery-title">活動氛圍</h2>
          <p className="gallery-sub">每一個角落，都是夢的一部分</p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className={`gallery-item gi-${item.aspect} fade-up delay-${(i % 3) + 1}`}
              onClick={() => setActive(active === item.id ? null : item.id)}
            >
              <div className="gi-placeholder">
                <div className="gi-emoji">{item.emoji}</div>
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
          <span>📷</span>
          <p>活動現場將設有專業攝影師，提供夥伴們精美活動照片留念</p>
        </div>
      </div>
    </section>
  );
}
