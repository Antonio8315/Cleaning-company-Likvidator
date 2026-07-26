import { Link } from "react-router-dom";
import { ReviewCart } from "../components/ReviewCart";

import "./Reviews.css";

export function Reviews() {
  const reviewsData = [
    {
      id: 1,
      text: "Тра-та-та",
      author: "Дмитро",
      rating: 5,
      date: "3rd Травень 2024 2:01pm",
    },
    {
      id: 2,
      text: "Тра-та-та",
      author: "Сергій",
      rating: 5,
      date: "25th Лютий 2024 5:10pm",
    },
    {
      id: 3,
      text: "Тра-та-та",
      author: "Денис",
      rating: 5,
      date: "13th Жовтень 2022 12:04pm",
    },
    {
      id: 4,
      text: "Тра-та-та",
      author: "Галя",
      rating: 3,
      date: "15th Жовтень 2021 12:36pm",
    },
    {
      id: 5,
      text: "Тра-та-та",
      author: "Денис",
      rating: 4,
      date: "23th Жовтень 2022 17:44pm",
    },
    {
      id: 6,
      text: "Тра-та-та",
      author: "Оля",
      rating: 3,
      date: "15th Жовтень 2021 12:36pm",
    },
    {
      id: 7,
      text: "Тра-та-та",
      author: "Галя",
      rating: 3,
      date: "15th Жовтень 2025 14:41pm",
    },
    {
      id: 8,
      text: "Тра-та-та",
      author: "Міша",
      rating: 3,
      date: "15th Жовтень 2021 12:31pm",
    },
  ];

  return (
    <section className="reviews-section ">
      <div className="reviews-header">
        <h2>ВІДГУКИ ПРО КОМПАНІЮ «ЛІКВІДАТОР»</h2>
        <div className="reviews-underline"></div>
      </div>

      <div className="reviews-grid">
        {reviewsData.map((review) => (
          <ReviewCart
            key={review.id}
            text={review.text}
            author={review.author}
            rating={review.rating}
            date={review.date}
          />
        ))}
      </div>
    </section>
  );
}
