// src/components/ReviewsHero.jsx
import './Hero.css';
import bgImage from '../assets/hero-bg.jpg'; 

export function ReviewsHero() {
  return (
    <section className="hero-section">
      {/* Оверлей (затемнення фону), щоб чорний текст краще читався на строкатому фоні */}
      <div className="hero-overlay"></div>
      
      {/* Контентний блок */}
      <div className="hero-content">
        <h1 className="hero-title">
          Відгуки
        </h1>
      </div>
    </section>
  );
}