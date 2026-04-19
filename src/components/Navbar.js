import React, { useState, useEffect } from 'react';
import './Navbar.css';

const FORM_URL = 'https://www.surveycake.com/s/K9BoY';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: '活動介紹', href: '#about' },
    { label: '粽子展示', href: '#zongzi' },
    { label: '招募夥伴', href: '#recruit' },
    { label: '參與流程', href: '#process' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <a href="#hero" className="navbar-logo">
        <img src="/logo.png" alt="粽夏夜 ZONG DREAM" />
      </a>

      <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
        {navLinks.map(link => (
          <li key={link.href}>
            <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
          </li>
        ))}
      </ul>

      <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="btn-primary navbar-cta pulse-btn">
        立即報名包粽夥伴 ✦
      </a>

      <button className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label="選單">
        <span /><span /><span />
      </button>
    </nav>
  );
}
