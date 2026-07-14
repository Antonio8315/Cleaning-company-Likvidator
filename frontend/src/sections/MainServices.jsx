
import { useState } from 'react';
import { ServiceItem } from '../components/ServiceItem';

import './MainServices.css';
import house from '../assets/icons/ServicesIcons/house.png';
import house3 from '../assets/icons/ServicesIcons/house3.png';

import alchemy from '../assets/icons/ServicesIcons/alchemy.png';
import bed from '../assets/icons/ServicesIcons/bed.png';

export function MainServices() {
    const privateServices = [
        { id: 1, icon: house, title: 'Прибирання квартир' },
        { id: 3, icon: house, title: 'Генеральне прибирання квартир' },
        { id: 5, icon: house3, title: 'Прибирання приватних будинків' },
        { id: 7, icon: alchemy, title: 'Хімчистка м\'яких меблів', description: '(25 хв - 1,5 години)' },
        { id: 8, icon: bed, title: 'Хімчистка матрасів', description: '(25 хв - 1,5 години)' },
        { id: 9, icon: alchemy, title: 'Хімчистка коврів', description: '(~ 2 години)' },

    ];

    return (
        <section className="mainservices-section">
            <div className="services-header">
                <h2>ТОП - ПОСЛУГИ</h2>
                <div className="title-underline"></div>
            </div>
            
            <div className="services-main-container">
                <div className="services-column-group" id="MainServices">
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

            </div>
        </section>
    );
}
