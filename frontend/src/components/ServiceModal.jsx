// src/components/ServiceModal.jsx
import './ServiceModal.css';
import apartmentImg from '../assets/icons/ServicesImages/CleaningApartments.webp'; // Тимчасово твоє фото, або інше для квартир

export function ServiceModal({ isOpen, onClose, title, description, icon }) {
  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Дякуємо! Заявку на "${title}" прийнято. Ми зв'яжемося з вами.`);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-window" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose}>&times;</button>
        
        <div className="modal-body">
          {/* Ліва частина: Динамічна інформація */}
          <div className="modal-info-side">
            {/* Використовуємо іконку або дефолтне фото */}
            <div className="modal-service-icon-bg">
              <img src={icon} alt={title} className="modal-service-img-preview" />
            </div>
            <h2>{title}</h2>
            <p className="service-description">
              {description || "Професійні клінінгові послуги від компанії Likvidator. Швидко, якісно та за доступною ціною."}
            </p>
            <div className="service-price">Ціна: <span>Розраховується індивідуально</span></div>
          </div>

          {/* Права частина: Форма */}
          <div className="modal-form-side">
            <h3>Швидке замовлення</h3>
            <form onSubmit={handleSubmit} className="service-order-form">
              <label>Ваше ім'я</label>
              <input type="text" placeholder="Антон" required />

              <label>Телефон</label>
              <input type="tel" placeholder="+380" required />

              <label>Зручна дата</label>
              <input type="date" required />

              <button type="submit" className="btn-submit-order">Надіслати заявку</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}