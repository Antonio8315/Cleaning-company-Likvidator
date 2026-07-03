// src/components/ServiceItem.jsx
import { useState } from 'react';
import { ServiceModal } from './ServiceModal';
import './ServiceItem.css';

export function ServiceItem({ icon, title, description }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <>
    <div className="service-item" onClick={() => setIsModalOpen(true)} style={{ cursor: 'pointer' }}>
      {/* Синій кружечок з іконкою всередині */}
      <div className="service-item-icon-wrapper">
        <img src={icon} alt={title} className="service-item-icon" />
      </div>
      
      {/* Текстовий блок справа */}
      <div className="service-item-text">
        <h4 className="service-item-title">{title}</h4>
        {description && <span className="service-item-desc">{description}</span>}
      </div>
    </div>

    <ServiceModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
        icon={icon}
      />
    </>
  );
}