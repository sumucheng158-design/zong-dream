import React, { useState } from 'react';
import './Zongzi.css';

const zongziTypes = [
  {
    id: 1,
    emoji: '🎋',
    name: '南部傳統粽',
    type: 'classic',
    tag: '經典傳承',
    color: '#8B7355',
    desc: '用月桂葉包裹糯米、豬肉、花生和蛋黃。每一口都是幾十年的記憶，是阿嬤的手藝，是家的味道。',
    ingredients: ['長糯米', '三層豬肉', '滷蛋黃', '蝦米', '香菇', '月桂葉'],
  },
  {
    id: 2,
    emoji: '🌶️',
    name: '麻辣鮮肉粽',
    type: 'creative',
    tag: '創意新潮',
    color: '#c0392b',
    desc: '融合四川麻辣的火爆個性，與傳統粽子的溫婉包容。一口咬下，是南北交融的味覺革命。',
    ingredients: ['糯米', '麻辣豬肉', '花椒', '辣豆瓣', '花生', '竹葉'],
  },
  {
    id: 3,
    emoji: '🌿',
    name: '素食香菇粽',
    type: 'classic',
    tag: '清淡養生',
    color: '#27ae60',
    desc: '獻給追求清淡的你。以香菇、芋頭、花生為主角，用最簡單的食材，堆疊出最深層的鮮味。',
    ingredients: ['長糯米', '乾香菇', '芋頭', '花生', '醬油', '月桂葉'],
  },
  {
    id: 4,
    emoji: '🫐',
    name: '紫米甜粽',
    type: 'creative',
    tag: '甜蜜驚喜',
    color: '#8e44ad',
    desc: '紫米與紅豆的夢幻組合，淋上一勺桂花蜜，甜而不膩。送給所有愛甜食的靈魂。',
    ingredients: ['紫米', '紅豆', '桂花蜜', '黑糖', '桂葉', '棉繩'],
  },
  {
    id: 5,
    emoji: '🧀',
    name: '起司培根粽',
    type: 'creative',
    tag: '台灣限定',
    color: '#e67e22',
    desc: '大膽的跨界實驗！融合義式起司與美式培根，用竹葉包裹一個屬於這個時代的創意宣言。',
    ingredients: ['糯米', '培根', '馬茲瑞拉起司', '玉米粒', '黑胡椒', '竹葉'],
  },
  {
    id: 6,
    emoji: '🌸',
    name: '蓮子蛋黃粽',
    type: 'classic',
    tag: '細膩精緻',
    color: '#c0748a',
    desc: '清甜蓮子搭配鹹香蛋黃，一鹹一甜的完美平衡。這是最適合在夢幻燈光下品嚐的粽子。',
    ingredients: ['糯米', '蓮子', '鹹蛋黃', '豬油', '醬油', '月桂葉'],
  },
];

export default function Zongzi() {
  const [filter, setFilter] = useState('all');
  const [hovered, setHovered] = useState(null);

  const filtered = zongziTypes.filter(z => filter === 'all' || z.type === filter);

  return (
    <section className="zongzi" id="zongzi">
      <div className="zongzi-bg" />

      <div className="zongzi-container">
        <div className="zongzi-header fade-up">
          <div className="section-label">✦ Zongzi Collection</div>
          <h2 className="section-title zongzi-title">
            粽子展示館
          </h2>
          <p className="zongzi-sub">傳統與創意的碰撞，每一顆粽子都是一個故事</p>

          <div className="zongzi-filter">
            {[
              { key: 'all', label: '全部' },
              { key: 'classic', label: '經典傳統' },
              { key: 'creative', label: '創意特調' },
            ].map(f => (
              <button key={f.key} className={`filter-btn ${filter === f.key ? 'active' : ''}`} onClick={() => setFilter(f.key)}>
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="zongzi-grid">
          {filtered.map((z, i) => (
            <div
              key={z.id}
              className={`zongzi-card fade-up delay-${(i % 3) + 1}`}
              onMouseEnter={() => setHovered(z.id)}
              onMouseLeave={() => setHovered(null)}
              style={{ '--card-color': z.color }}
            >
              <div className="zongzi-emoji">{z.emoji}</div>
              <div className={`zongzi-tag tag-${z.type}`}>{z.tag}</div>
              <h3 className="zongzi-name">{z.name}</h3>
              <p className="zongzi-desc">{z.desc}</p>
              <div className={`zongzi-ingredients ${hovered === z.id ? 'show' : ''}`}>
                <div className="ing-label">食材：</div>
                <div className="ing-list">
                  {z.ingredients.map(ing => <span key={ing} className="ing-tag">{ing}</span>)}
                </div>
              </div>
              <div className="card-glow" style={{ background: `radial-gradient(circle at 50% 50%, ${z.color}22 0%, transparent 70%)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
