import { useState, useEffect, useRef } from 'react';

/**
 * useCountUp — 數字滾動計數動畫 hook
 *
 * @param {number}  target      目標數字
 * @param {number}  duration    動畫總時間（毫秒），預設 1800
 * @param {boolean} triggerOnce 是否只在進入畫面時執行一次，預設 true
 * @returns {{ value: number, ref: React.RefObject }}
 *
 * 使用方式：
 *   const { value, ref } = useCountUp(200, 1600);
 *   <span ref={ref}>{value}+</span>
 */
export function useCountUp(target, duration = 1800, triggerOnce = true) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const hasRun = useRef(false);
  const rafRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // 如果使用者偏好減少動畫，直接跳到最終值
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (triggerOnce && hasRun.current) return;
        hasRun.current = true;

        const start = performance.now();

        const tick = (now) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // easeOutExpo 緩動函數
          const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          setValue(Math.round(eased * target));

          if (progress < 1) {
            rafRef.current = requestAnimationFrame(tick);
          }
        };

        rafRef.current = requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [target, duration, triggerOnce]);

  return { value, ref };
}
