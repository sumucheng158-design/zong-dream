import { useEffect } from 'react';

export default function useScrollAnimation() {
  useEffect(() => {
    const targets = document.querySelectorAll('.fade-up, .fade-in');

    // Immediately show elements already in viewport on load
    targets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible');
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Unobserve after triggering — no need to watch anymore
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: [0, 0.1],
        rootMargin: '0px 0px -30px 0px',
      }
    );

    // Only observe elements not yet visible
    targets.forEach((el) => {
      if (!el.classList.contains('visible')) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);
}
