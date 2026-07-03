// src/pages/ReviewsPage.jsx
import { Header } from "../sections/Header.jsx";
import { ReviewsHero } from "../sections/ReviewsHero.jsx";
import { Reviews } from '../sections/Reviews.jsx';
import { Footer } from '../sections/Footer.jsx';

export function ReviewsPage() {
  return (
    <>
      <Header />
      {/* <main style={{ padding: '120px 20px', minHeight: '70vh', textAlign: 'center' }}> */}
        
        {/* Твоя майбутня форма або список відгуків буде тут */}
        <ReviewsHero />
      {/* </main> */}
        <Reviews />
      <Footer />
    </>
  );
}
