import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutDoctor from '../components/AboutDoctor';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AboutDoctor />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
