import React from 'react';
import Header from './components/Header';
import TrustSection from './components/TrustSection';
import Services from './components/Services';
import Process from './components/Process';
import Differentiation from './components/Differentiation';
import UseCases from './components/UseCases';
import Technology from './components/Technology';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <TrustSection />
      <Services />
      <Process />
      <Differentiation />
      <UseCases />
      <Technology />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;