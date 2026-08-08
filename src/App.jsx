import React from 'react';
import Hero from './components/Hero.jsx';
import Services from './components/Services.jsx';
import About from './components/About.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <Services />
      <About />
      <Footer />
    </div>
  );
}

export default App;
