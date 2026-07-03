// src/components/Navigation.jsx
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

export function Navigation() {
  const location = useLocation(); // Хук для визначення, на якій сторінці ми зараз

  const links = [
    { id: 'main', label: 'Головна', path: '/' },
    { id: 'services', label: 'Послуги', path: '/services' },
    { id: 'cart', label: 'Кошик', path: '/cart' },
    { id: 'reviews', label: 'Відгуки', path: '/reviews' },
  ];

  return (
    <nav>
      <ul className="navigation-list">
        {links.map(link => {
          // Перевіряємо, чи збігається поточний шлях в браузері з path посилання
          const isActive = location.pathname === link.path;

          return (
            <li key={link.id}>
              <Link 
                to={link.path} 
                className={`navigation-item ${
                  isActive ? 'navigation-item-active' : 'navigation-item-inactive'
                }`}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}