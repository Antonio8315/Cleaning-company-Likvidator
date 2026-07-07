// src/sections/Reviews.jsx
import { Link } from 'react-router-dom';
import { ReviewCart } from '../components/ReviewCart';
import './Reviews.css';

export function MainReviews() {
  const reviewsData = [
    {
      id: 1,
      text: "Тра-та-та",
      author: "Дмитро",
      rating: 5,
      date: "3rd Травень 2024 2:01pm"
    },
    {
      id: 2,
      text: "Тра-та-та",
      author: "Сергій",
      rating: 5,
      date: "25th Лютий 2024 5:10pm"
    },
    {
      id: 3,
      text: "Тра-та-та",
      author: "Денис",
      rating: 5,
      date: "13th Жовтень 2022 12:04pm"
    }
  ];

  return (
    <section className="reviews-section">
      {/* Заголовок секції */}
      <div className="reviews-header">
        <h2>ВІДГУКИ ПРО КОМПАНІЮ «ЛІКВІДАТОР»</h2>
        <div className="reviews-underline"></div>
      </div>

      {/* Контейнер для трьох карток */}
      <div className="reviews-grid">
        {reviewsData.map(review => (
          <ReviewCart
            key={review.id}
            text={review.text}
            author={review.author}
            rating={review.rating}
            date={review.date}
          />
        ))}
      </div>

      {/* Нижня кнопка */}
      <Link to="/reviews" className="reviews-load-more-btn">
        Подивитись усі відгуки...
      </Link>

    </section>
  );
}