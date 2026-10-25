import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Ticker from './components/Ticker.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import WhyUs from './components/WhyUs.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import useReveal from './useReveal.js';

function App() {
  useReveal();

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <About />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
