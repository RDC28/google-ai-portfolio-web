
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 font-sans">
      <main className="container mx-auto px-6 md:px-12 py-12">
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;
