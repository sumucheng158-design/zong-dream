import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    id: 'experience',
    q: '我完全不會包粽子，可以參加嗎？',
    a: '當然可以！這正是我們舉辦這個活動的原因。現場有老師傅全程帶領，從最基礎的動作開始教起，完全不需要任何經驗。很多第一次包粽的夥伴最後都包出了完美的成品！',
  },
  {
    id: 'fee',
    q: '活動費用是多少？需要自備材料嗎？',
    a: '完全免費！報名即可參加，所有包粽材料、工具、圍裙都由活動方提供。你唯一需要帶的，是一顆好奇的心和輕鬆的心情。',
  },
  {
    id: 'time',
    q: '活動幾點開始？需要準時到嗎？',
    a: '活動從下午 4 點開始，晚上 10 點結束。包粽體驗有固定梯次，建議在下午 5 點前到場報到。夜市攤位從開場到結束全程開放，隨時都可以來逛。',
  },
  {
    id: 'location',
    q: '活動在哪裡舉辦？有停車場嗎？',
    a: '詳細地點將在報名確認信中提供。現場有規劃停車區域，同時也鼓勵夥伴搭乘大眾運輸，一起減少碳排放，讓端午節更環保。',
  },
  {
    id: 'guests',
    q: '我可以帶小朋友或朋友一起來嗎？',
    a: '非常歡迎！活動適合全年齡層參與，帶著朋友、家人一起來體驗端午節的溫度。請注意，每位參與者都需要單獨填寫報名表，名額有限，請各自完成報名。',
  },
  {
    id: 'cancel',
    q: '報名後如果臨時有事，可以取消嗎？',
    a: '可以的。若無法出席，請在活動前 3 天透過報名確認信上的聯絡方式通知我們，讓名額可以釋放給其他等待中的夥伴。感謝你的體貼！',
  },
  {
    id: 'rain',
    q: '活動當天如果下雨怎麼辦？',
    a: '活動設有室內備案場地，風雨無阻。如遇特殊天候狀況，我們會提前透過報名信件通知所有夥伴，請注意查收確認信。',
  },
  {
    id: 'takehome',
    q: '包好的粽子可以帶回家嗎？',
    a: '當然！你親手包的粽子就是你的，活動提供精美包裝袋讓你帶回家。可以自己吃，也可以送給家人，把這個夏夜的溫度一起分享出去。',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(null);
  const toggle = (id) => setOpen(open === id ? null : id);

  return (
    <section className="faq" id="faq">
      <div className="faq-bg" />
      <div className="faq-container">
        <div className="faq-header fade-up">
          <div className="section-label">
            <span aria-hidden="true">✦</span> FAQ
          </div>
          <h2 className="section-title faq-title">常見問題</h2>
          <p className="faq-sub">還有疑問？這裡應該有你要的答案</p>
        </div>

        <div className="faq-list" role="list">
          {faqs.map((item, i) => {
            const isOpen = open === item.id;
            return (
              <div
                key={item.id}
                className={`faq-item ${isOpen ? 'open' : ''}`}
                role="listitem"
              >
                <button
                  className="faq-question"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  id={`faq-btn-${item.id}`}
                >
                  <span>{item.q}</span>
                  <div className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</div>
                </button>
                <div
                  className="faq-answer"
                  id={`faq-answer-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${item.id}`}
                  aria-hidden={!isOpen}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
