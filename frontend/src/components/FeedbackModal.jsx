// src/components/FeedbackModal.jsx
import { useState } from 'react';
import './FeedbackModal.css';

export function FeedbackModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleRatingSubmit = (stars) => {
    setRating(stars);
    alert(`Дякуємо за вашу оцінку: ${stars} з 5!`);
    onClose(); // Закриваємо модалку після вибору
  };

  return (
    <div className="feedback-overlay" onClick={onClose}>
      <div className="feedback-window" onClick={(e) => e.stopPropagation()}>
        <button className="feedback-close-btn" onClick={onClose}>&times;</button>
        
        <div className="feedback-content">
          {/* Хмарка з серцем, як на зображення.png */}
          <div className="feedback-bubble">
            <span className="feedback-heart">❤</span>
          </div>

          <h2 className="feedback-title">Your feedback means a lot</h2>
          <p className="feedback-subtitle">rate your experience</p>

          {/* Інтерактивні зірочки */}
          <div className="feedback-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                className={`star-button ${star <= (hover || rating) ? 'on' : 'off'}`}
                onClick={() => handleRatingSubmit(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(rating)}
              >
                <span className="star">&#9733;</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}