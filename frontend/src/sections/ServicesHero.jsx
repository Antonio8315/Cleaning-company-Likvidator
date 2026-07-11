import './Hero.css';
import bgImage from '../assets/hero-bg.jpg'; 

export function ServicesHero() {
  return (
    <section className="hero-section">
      {/* Оверлей (затемнення фону), щоб чорний текст краще читався на строкатому фоні */}
      <div className="hero-overlay"></div>
      
      {/* Контентний блок */}
      <div className="hero-content">
        <h1 className="hero-title">
          Послуги
        </h1>
      </div>
    </section>
  );
}