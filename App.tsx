import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Partnership } from './components/Partnership';
import { Education } from './components/Education';
import { SkoolPromo } from './components/SkoolPromo';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-white font-sans selection:bg-primary selection:text-black">
      <Header />
      <main>
        <Hero />
        <Services />
        <Partnership />
        <Education />
        <SkoolPromo />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;