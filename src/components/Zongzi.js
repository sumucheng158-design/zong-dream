import React, { useState } from 'react';
import './Zongzi.css';

// Each zongzi gets a decorative SVG badge instead of emoji
// The badge shows the color accent + a character or shape
const ZongziBadge = ({ color, symbol }) => (
  <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="zongzi-badge-svg">
    {/* Diamond-ish zongzi silhouette */}
    <path
      d="M28 6 L48 22 L42 46 L14 46 L8 22 Z"
      fill={color}
      opacity="0.18"
    />
    <path
      d="M28 6 L48 22 L42 46 L14 46 L8 22 Z"
      stroke={color}
      strokeWidth="1.5"
      fill="none"
      opacity="0.6"
    />
    {/* Leaf wrap line */}
    <path d="M18 16 Q28 12 38 16" stroke={color} strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
    {/* Center symbol text rendered via foreignObject-safe approach: use circle + text positioning */}
    <text
      x="28" y="33"
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize="14"
      fontWeight="700"
      fill={color}
      opacity="0.9"
      fontFamily="'Noto Serif TC', serif"
    >{symbol}</text>
  </svg>
);

const zongziTypes = [
  {
    id: 'classic-south',
    badge: <ZongziBadge color="#c9a227" symbol="傳" />,
    name: '南部傳統粽',
    type: 'classic',
    tag: '經典傳承',
    color: '#8B7355',
    desc: '用月桂葉包裹糯米、豬肉、花生和蛋黃。每一口都是幾十年的記憶，是阿嬤的手藝，是家的味道。',
    ingredients: ['長糯米', '三層豬肉', '滷蛋黃', '蝦米', '香菇', '月桂葉'],
  },
  {
    id: 'spicy',
    badge: <ZongziBadge color="#c0392b" symbol="辣" />,
    name: '麻辣鮮肉粽',
    type: 'creative',
    tag: '創意新潮',
    color: '#c0392b',
    desc: '融合四川麻辣的火爆個性，與傳統粽子的溫婉包容。一口咬下，是南北交融的味覺革命。',
    ingredients: ['糯米', '麻辣豬肉', '花椒', '辣豆瓣', '花生', '竹葉'],
  },
  {
    id: 'veg',
    badge: <ZongziBadge color="#27ae60" symbol="素" />,
    name: '素食香菇粽',
    type: 'classic',
    tag: '清淡養生',
    color: '#27ae60',
    desc: '獻給追求清淡的你。以香菇、芋頭、花生為主角，用最簡單的食材，堆疊出最深層的鮮味。',
    ingredients: ['長糯米', '乾香菇', '芋頭', '花生', '醬油', '月桂葉'],
  },
  {
    id: 'purple',
    badge: <ZongziBadge color="#8e44ad" symbol="甜" />,
    name: '紫米甜粽',
    type: 'creative',
    tag: '甜蜜驚喜',
    color: '#8e44ad',
    desc: '紫米與紅豆的夢幻組合，淋上一勺桂花蜜，甜而不膩。送給所有愛甜食的靈魂。',
    ingredients: ['紫米', '紅豆', '桂花蜜', '黑糖', '桂葉', '棉繩'],
  },
  {
    id: 'cheese',
    badge: <ZongziBadge color="#e67e22" symbol="創" />,
    name: '起司培根粽',
    type: 'creative',
    tag: '台灣限定',
    color: '#e67e22',
    desc: '大膽的跨界實驗！融合義式起司與美式培根，用竹葉包裹一個屬於這個時代的創意宣言。',
    ingredients: ['糯米', '培根', '馬茲瑞拉起司', '玉米粒', '黑胡椒', '竹葉'],
  },
  {
    id: 'lotus',
    badge: <ZongziBadge color="#c0748a" symbol="精" />,
    name: '蓮子蛋黃粽',
    type: 'classic',
    tag: '細膩精緻',
    color: '#c0748a',
    desc: '清甜蓮子搭配鹹香蛋黃，一鹹一甜的完美平衡。這是最適合在夢幻燈光下品嚐的粽子。',
    ingredients: ['糯米', '蓮子', '鹹蛋黃', '豬油', '醬油', '月桂葉'],
  },
];

const filters = [
  { key: 'all', label: '全部' },
  { key: 'classic', label: '經典傳統' },
  { key: 'creative', label: '創意特調' },
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
          <div className="section-label">
            <span aria-hidden="true">✦</span> Zongzi Collection
          </div>
          <h2 className="section-title zongzi-title">
            粽子展示館
          </h2>
          <p className="zongzi-sub">傳統與創意的碰撞，每一顆粽子都是一個故事</p>

          <div className="zongzi-filter" role="group" aria-label="篩選粽子類型">
            {filters.map(f => (
              <button
                key={f.key}
                className={`filter-btn ${filter === f.key ? 'active' : ''}`}
                onClick={() => setFilter(f.key)}
                aria-pressed={filter === f.key}
              >
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
              <div className="zongzi-badge" aria-hidden="true">{z.badge}</div>
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
