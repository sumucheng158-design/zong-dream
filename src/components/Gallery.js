import React, { useState } from 'react';
import './Gallery.css';
import { IconLantern, IconBamboo, IconMoon, IconPot, IconFirework, IconSparkle, IconCamera } from './Icons';

// SVG icons replacing emojis — each reflects the scene

// Accent colors for each gallery tile
const galleryItems = [
  { id: 'lantern', icon: <IconLantern />, image:'/images/gallery/lantern.jpg' , label: '燈籠長廊', desc: '數百盞手工燈籠排列成長廊，走進去就像走進一場夢', aspect: 'tall', accent: 'rgba(240,112,48,0.18)', border: 'rgba(240,112,48,0.35)' },
  { id: 'bamboo', icon: <IconBamboo />, image: '/images/gallery/leaf.jpg', label: '竹影包粽區', desc: '老師傅現場示範，新手也能包出完美粽子', aspect: 'wide', accent: 'rgba(80,180,80,0.12)', border: 'rgba(80,180,80,0.3)' },
  { id: 'moon', icon: <IconMoon />, image: '/images/gallery/nightmarket.jpg', label: '夜市全景', desc: '入夜後的會場，光影交錯，美得像一幅畫', aspect: 'normal', accent: 'rgba(100,120,220,0.12)', border: 'rgba(100,120,220,0.3)' },
  { id: 'pot', icon: <IconPot />, image: '/images/gallery/bamboo.jpg', label: '蒸粽現場', desc: '熱氣蒸騰，粽香四溢，這是端午節最美的煙火', aspect: 'normal', accent: 'rgba(245,200,66,0.1)', border: 'rgba(245,200,66,0.3)' },
  { id: 'firework', icon: <IconFirework />, image: '/images/gallery/sparkle.jpg', label: '燈火晚會', desc: '活動尾聲的燈火儀式，願望隨燈光升向夜空', aspect: 'wide', accent: 'rgba(220,80,160,0.12)', border: 'rgba(220,80,160,0.3)' },
  { id: 'sparkle', icon: <IconSparkle />, image: '/images/gallery/market.jpg', label: '市集攤位', desc: '精心佈置的夜市攤位，每個角落都是拍照亮點', aspect: 'tall', accent: 'rgba(245,200,66,0.1)', border: 'rgba(245,200,66,0.25)' },
];

// SVG camera icon for the note

export default function Gallery() {
  const [active, setActive] = useState(null);

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-bg" />
      <div className="gallery-container">
        <div className="gallery-header fade-up">
          <div className="section-label">
            <span aria-hidden="true">✦</span> Atmosphere
          </div>
          <h2 className="section-title gallery-title">活動氛圍</h2>
          <p className="gallery-sub">每一個角落，都是夢的一部分</p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item, i) => (
            <div
              key={item.id}
              className={`gallery-item gi-${item.aspect} fade-up delay-${(i % 3) + 1}`}
              onClick={() => setActive(active === item.id ? null : item.id)}
              role="button"
              tabIndex={0}
              aria-label={`${item.label}：${item.desc}`}
              onKeyDown={e => e.key === 'Enter' && setActive(active === item.id ? null : item.id)}
            >
              <div
                className="gi-placeholder"
                style={{ '--gi-accent': item.accent, '--gi-border': item.border }}
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.label}
                    className="gi-image"
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="400"
                  />
                ) : (
                  <>
                    <div className="gi-icon">{item.icon}</div>
                    <div className="gi-label-static">{item.label}</div>
                    <div className="gi-overlay">
                      <span className="gi-label">{item.label}</span>
                      <span className="gi-desc">{item.desc}</span>
                    </div>
                    <div className="gi-corner tl" /><div className="gi-corner tr" />
                    <div className="gi-corner bl" /><div className="gi-corner br" />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-note fade-up">
          <IconCamera className="gallery-note-icon" />
          <p>活動現場將設有專業攝影師，提供夥伴們精美活動照片留念</p>
        </div>
      </div>
    </section>
  );
}
