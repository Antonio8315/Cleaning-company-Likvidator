import { Header } from "../sections/Header.jsx";
import { ReviewsHero } from "../sections/ReviewsHero.jsx";
import { Reviews } from '../sections/Reviews.jsx';
import { Footer } from '../sections/Footer.jsx';

export function ReviewsPage() {
  return (
    <>
      <Header />
      <ReviewsHero />
      <Reviews />
      <Footer />
    </>
  );
}
