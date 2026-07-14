
import './ServiceModal.css';
import apartmentImg from '../assets/icons/ServicesImages/CleaningApartments.webp'; 
import { useState } from 'react';
import { FeedbackModal } from '../components/FeedbackModal';

export function ServiceModal({ isOpen, onClose, title, description, icon }) {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Дякуємо! Заявку на "${title}" прийнято. Ми зв'яжемося з вами.`);
    setIsFeedbackOpen(true);
  };

  const handleCloseEverything = () => {
    setIsFeedbackOpen(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>

        <div className="modal-body">
          {}
          <div className="modal-info-side">
            {}
            <div className="modal-service-icon-bg">
              <img src={icon} alt={title} className="modal-service-img-preview" />
            </div>
            <h2 className="service-title">{title}</h2>
            <p className="service-description">
              {description || "Професійні клінінгові послуги від компанії Likvidator. Швидко, якісно та за доступною ціною."}
            </p>
            <div className="service-price">Ціна: <span>Розраховується індивідуально</span></div>
          </div>

          {}
          <div className="modal-form-side">
            <h3>Швидке замовлення</h3>
            <form onSubmit={handleSubmit} className="service-order-form">
              <label>Ваше ПІП</label>
              <input type="text" placeholder="" required />

              <label>Телефон</label>
              <input type="tel" placeholder="+380" required />

              <label>Зручна дата</label>
              <input type="date" required />

              <button type="submit" className="btn-submit-order">Надіслати заявку</button>
            </form>
          </div>
        </div>
      </div>
      <div>

        {}
        <FeedbackModal
          isOpen={isFeedbackOpen}
          onClose={() => handleCloseEverything()}
        />
      </div>
    </div>
  );
}