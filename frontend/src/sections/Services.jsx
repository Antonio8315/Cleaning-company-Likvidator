// src/sections/Services.jsx
import { useState } from 'react';
import { ServiceItem } from '../components/ServiceItem';

import './Services.css';
import house from '../assets/icons/ServicesIcons/house.png';
import house2 from '../assets/icons/ServicesIcons/house2.png';
import house3 from '../assets/icons/ServicesIcons/house3.png';

import star from '../assets/icons/ServicesIcons/star.png';
import extinguisher from '../assets/icons/ServicesIcons/extinguisher.png';
import alchemy from '../assets/icons/ServicesIcons/alchemy.png';
import bed from '../assets/icons/ServicesIcons/bed.png';
import brush from '../assets/icons/ServicesIcons/brush.png';
import clock from '../assets/icons/ServicesIcons/clock.png';
import cubes from '../assets/icons/ServicesIcons/cubes.png';
import car from '../assets/icons/ServicesIcons/car.png';

export function Services() {
  const privateServices = [
    { id: 1, icon: house, title: 'Прибирання квартир' },
    { id: 2, icon: house2, title: 'Прибирання після ремонту' },
    { id: 3, icon: house, title: 'Генеральне прибирання квартир' },
    { id: 4, icon: star, title: 'Генеральне прибирання' },
    { id: 5, icon: house3, title: 'Прибирання приватних будинків' },
    { id: 6, icon: extinguisher, title: 'Прибирання після пожежі' },
    { id: 7, icon: alchemy, title: 'Хімчистка м\'яких меблів', description: '(25 хв - 1,5 години)'  },
    { id: 8, icon: bed, title: 'Хімчистка матрасів', description: '(25 хв - 1,5 години)' },
    { id: 9, icon: alchemy, title: 'Хімчистка коврів', description: '(~ 2 години)' },
    { id: 10, icon: house, title: 'Мийка вікон', description: '(25 хв - 1,5 години)' },
    { id: 11, icon: brush, title: 'Мийка фасадів' },
  ];

  const businessServices = [
    { id: 1, icon: house, title: 'Прибирання парадних' },
    { id: 2, icon: house2, title: 'Прибирання офісів' },
    { id: 3, icon: house, title: 'Прибирання після ремонту' },
    { id: 4, icon: house, title: 'Генеральне прибирання офісів' },
    { id: 5, icon: clock, title: 'Щоденне прибирання' },
    { id: 6, icon: cubes, title: 'Прибирання складських приміщень' },
    { id: 7, icon: car, title: 'Прибирання паркінгу' },
    { id: 8, icon: house, title: 'Мийка вікон' },
    { id: 9, icon: brush, title: 'Мийка фасадів' },
    { id: 10, icon: alchemy, title: 'Хімчистка м\'яких меблів', description: '(25 хв - 1,5 години)' },
  ];

  return (
    <section className="services-section">
      <div className="services-header">
        <h2>НАШІ ПОСЛУГИ</h2>
        <div className="title-underline"></div>
      </div>

      <div className="services-main-container">
        
        {/* КОЛОНКА 1: ДЛЯ ПРИВАТНИХ ОСІБ */}
        <div className="services-column-group">
          <h3 className="group-title-orange">ДЛЯ ПРИВАТНИХ ОСІБ</h3>
          <div className="services-sub-grid">
            {privateServices.map(service => (
              <ServiceItem 
                key={service.id} 
                icon={service.icon} 
                title={service.title} 
                description={service.description} 
              />
            ))}
          </div>
        </div>

        {/* КОЛОНКА 2: ДЛЯ ОРГАНІЗАЦІЙ */}
        <div className="services-column-group">
          <h3 className="group-title-orange">ДЛЯ ОРГАНІЗАЦІЙ</h3>
          <div className="services-sub-grid">
            {businessServices.map(service => (
              <ServiceItem 
                key={service.id} 
                icon={service.icon} 
                title={service.title} 
                description={service.description} 
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}