
import './ReviewCart.css';
import starIcon from '../assets/star.svg';
export function ReviewCart({ text, author, rating, date}) {
  
  const stars = Array(rating).fill(starIcon).map((icon, index) => (
    <img key={index} src={icon} alt="star" className="review-star" />
  ));

  return (
    <div className="review-cart">
      {}
      <div className="review-text-bubble">
        <p>{text}</p>
      </div>
      
      {}
      <div className="review-meta">
        <span className="review-author">{author}</span>
        <div className="review-stars">
          {stars.map((star, index) => (
            <span key={index}>{star}</span>
          ))}
        </div>
        <span className="review-cart-date">
          {date}
        </span>
      </div>
    </div>
  );
}