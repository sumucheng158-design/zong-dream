import { useState, useEffect } from 'react';

/**
 * useCountdown — 從現在到目標日期的倒數計時
 *
 * @param {Date} targetDate  活動日期（Date 物件）
 * @returns {{ days, hours, minutes, seconds, isExpired }}
 */
export function useCountdown(targetDate) {
  const calc = () => {
    const diff = targetDate.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    return {
      days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      isExpired: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calc);

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(id);
  }, []); // eslint-disable-line

  return timeLeft;
}
