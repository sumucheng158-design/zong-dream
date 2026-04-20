import React, { useState, useEffect, useCallback } from 'react';
import './Navbar.css';

const FORM_URL = 'https://www.surveycake.com/s/K9BoY';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40);
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [handleScroll]);

  // Close menu on Escape key
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { label: '活動介紹', href: '#about' },
    { label: '粽子展示', href: '#zongzi' },
    { label: '招募夥伴', href: '#recruit' },
    { label: '參與流程', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} role="navigation" aria-label="主選單">
      <a href="#hero" className="navbar-logo" aria-label="回到頂部 — 粽夏夜 ZONG DREAM">
        <img src="/logo.png" alt="粽夏夜 ZONG DREAM" width="72" height="72" />
      </a>

      {/* Overlay for mobile */}
      {menuOpen && (
        <div className="navbar-overlay" onClick={closeMenu} aria-hidden="true" />
      )}

      <ul
        className={`navbar-links ${menuOpen ? 'open' : ''}`}
        role="list"
        aria-label="頁面導覽"
      >
        {navLinks.map(link => (
          <li key={link.href} role="listitem">
            <a href={link.href} onClick={closeMenu}>{link.label}</a>
          </li>
        ))}
      </ul>

      <a
        href={FORM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary navbar-cta pulse-btn"
        aria-label="立即報名包粽夥伴（開啟新視窗）"
      >
        立即報名 <span className="nav-cta-deco">✦</span>
      </a>

      <button
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(prev => !prev)}
        aria-label={menuOpen ? '關閉選單' : '開啟選單'}
        aria-expanded={menuOpen}
        aria-controls="navbar-links"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
    </nav>
  );
}
