// src/components/ReviewCart.jsx
import './ReviewCart.css';
import starIcon from '../assets/star.svg';
export function ReviewCart({ text, author, rating, date, isWhiteDate }) {
  // Створюємо масив для рендерингу зірочок
  const stars = Array(rating).fill(starIcon).map((icon, index) => (
    <img key={index} src={icon} alt="star" className="review-star" />
  ));

  return (
    <div className="review-cart">
      {/* Світло-сірий блок для тексту відгуку */}
      <div className="review-text-bubble">
        <p>{text}</p>
      </div>
      
      {/* Мета-дані автора знизу */}
      <div className="review-meta">
        <span className="review-author">{author}</span>
        <div className="review-stars">
          {stars.map((star, index) => (
            <span key={index}>{star}</span>
          ))}
        </div>
        <span className={`review-cart-date ${isWhiteDate ? 'white-text' : ''}`}>
          {date}
        </span>
      </div>
    </div>
  );
}