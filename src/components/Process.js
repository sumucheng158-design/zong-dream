import React from 'react';
import './Process.css';
import { IconPen, IconPhone, IconCity, IconBamboo, IconParty, IconHome } from './Icons';

// SVG icons replacing emojis

const steps = [
  { num: '01', icon: <IconPen />, id: 'register', title: '線上報名', desc: '點擊報名按鈕，填寫基本資料，不到2分鐘完成報名。額滿為止，先搶先贏！' },
  { num: '02', icon: <IconPhone />, id: 'confirm', title: '收到確認', desc: '報名後24小時內收到確認通知，裡面有活動詳細資訊、地點 Map 與注意事項。' },
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
