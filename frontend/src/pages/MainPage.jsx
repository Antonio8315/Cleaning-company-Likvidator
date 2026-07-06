// src/pages/MainPage.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Header } from "../sections/Header.jsx";
import { Hero } from '../sections/Hero.jsx';
import { Advantages } from '../sections/Advantages.jsx';
import { MainServices } from '../sections/MainServices.jsx';
import { Reviews } from '../sections/Reviews.jsx';
import { Workflow } from '../sections/Workflow.jsx';
import { About } from '../sections/About.jsx';
import { Footer } from '../sections/Footer.jsx';

export function MainPage() {
  const location = useLocation();

  useEffect(() => {
    // Якщо в URL є хеш (наприклад, #about)
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    }
  }, [location]);

  return (
    <>
      <Header />
      <Hero />
      <Advantages />
      <MainServices />
      <Reviews />
      <Workflow />
      <About />
      <Footer />
    </>
  );
}
