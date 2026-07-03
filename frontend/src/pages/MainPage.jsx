// src/pages/MainPage.jsx
import { Header } from "../sections/Header.jsx";
import { Hero } from '../sections/Hero.jsx';
import { Advantages } from '../sections/Advantages.jsx';
import { Services } from '../sections/Services.jsx';
import { Reviews } from '../sections/Reviews.jsx';
import { Workflow } from '../sections/Workflow.jsx';
import { About } from '../sections/About.jsx';
import { Footer } from '../sections/Footer.jsx';

export function MainPage() {
  return (
    <>
      <Header />
      <Hero />
      <Advantages />
      <Services />
      <Reviews />
      <Workflow />
      <About />
      <Footer />
    </>
  );
}
