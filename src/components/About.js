import React from 'react';
import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-bg" />
      <div className="about-container">
        <div className="about-left fade-up">
          <div className="section-label">✦ About The Festival</div>
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
            📍 不只是活動，是一場你會記得一輩子的端午夢。
          </p>
        </div>

        <div className="about-right fade-up delay-2">
          <div className="about-cards">
            {[
              { icon: '🎋', title: '端午文化', text: '探索屈原傳說、龍舟文化、香包習俗，重新認識這個古老節日的靈魂。' },
              { icon: '🕯️', title: '夜市氛圍', text: '燈串閃爍、蒸氣飄香，整個空間就是一幅會呼吸的端午畫卷。' },
              { icon: '🫘', title: '親手包粽', text: '不需要任何經驗，在老師傅的帶領下，包出一顆屬於你的粽子故事。' },
              { icon: '✨', title: '夢幻體驗', text: '精心設計的光影場景，讓每一個瞬間都值得被記錄、被珍藏。' },
            ].map((card, i) => (
              <div key={i} className={`about-card fade-up delay-${i + 2}`}>
                <div className="card-icon">{card.icon}</div>
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
          <div className="origin-year">西元前 278</div>
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
