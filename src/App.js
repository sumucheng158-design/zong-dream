import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Zongzi from './components/Zongzi';
import Recruit from './components/Recruit';
import Process from './components/Process';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import useScrollAnimation from './hooks/useScrollAnimation';
import './App.css';

export default function App() {
  useScrollAnimation();

  // Re-run observer on route changes / dynamic content
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Zongzi />
        <Recruit />
        <Process />
        <Gallery />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
