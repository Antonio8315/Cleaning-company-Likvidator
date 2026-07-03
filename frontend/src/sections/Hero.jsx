import './Hero.css';

export function Hero() {
  return (
    <section className="hero-section">
      {/* Оверлей (затемнення фону), щоб чорний текст краще читався на строкатому фоні */}
      <div className="hero-overlay"></div>
      
      {/* Контентний блок */}
      <div className="hero-content">
        <h1 className="hero-title">
          Прибирання <br /> будинків та котеджів
        </h1>
      </div>
    </section>
  );
}