import React from 'react';
import './Countdown.css';
import { EVENT_DATE, EVENT_DATE_DISPLAY } from '../config';
import { useCountdown } from '../hooks/useCountdown';

function Pad({ value, label }) {
  const display = String(value).padStart(2, '0');
  return (
    <div className="cd-unit">
      <div className="cd-digits" aria-label={`${value} ${label}`}>
        {display.split('').map((d, i) => (
          <span key={i} className="cd-digit">{d}</span>
        ))}
      </div>
      <span className="cd-label">{label}</span>
    </div>
  );
}

export default function Countdown() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(EVENT_DATE);

  if (isExpired) {
    return (
      <div className="countdown countdown--expired" aria-live="polite">
        <span className="cd-expired-text">粽夏夜活動已開始！🎉</span>
      </div>
    );
  }

  return (
    <div
      className="countdown fade-up"
      role="timer"
      aria-label={`距離 ${EVENT_DATE_DISPLAY} 活動開始還有 ${days} 天 ${hours} 小時 ${minutes} 分 ${seconds} 秒`}
      aria-live="off"
    >
      <div className="cd-label-top">距離活動開始</div>
      <div className="cd-track">
        <Pad value={days}    label="天" />
        <span className="cd-sep" aria-hidden="true">:</span>
        <Pad value={hours}   label="時" />
        <span className="cd-sep" aria-hidden="true">:</span>
        <Pad value={minutes} label="分" />
        <span className="cd-sep" aria-hidden="true">:</span>
        <Pad value={seconds} label="秒" />
      </div>
    </div>
  );
}
