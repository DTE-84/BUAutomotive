import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';

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
