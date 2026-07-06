import './Advantages.css';
import memeImage from '../assets/priitula-meme.jpg';

import { Link } from 'react-router-dom';
import { CircleIcon } from '../components/CircleIcon';
import './Advantages.css';

import iconLike from '../assets/icons/like.png';
import iconArrows from '../assets/icons/arrows.png';
import iconStaff from '../assets/icons/staff.png';
import iconEquipment from '../assets/icons/equipment.png';

export function Advantages() {
  const advantagesData = [
    { id: 1, icon: iconLike, text: "Гарантія якості" },
    { id: 2, icon: iconArrows, text: "Широкий асортимент послуг" },
    { id: 3, icon: iconStaff, text: "Кваліфікований персонал" },
    { id: 4, icon: iconEquipment, text: "Професійне обладнання" },
  ];

  return (
    <section className="advantages-section">
      {/* Мемчик)) */}
      <div className="advantages-image-container" style={{ width: '50%' }}>
        <img src={memeImage} alt="Мем" className="advantages-image" style={{ width: '100%' }} />
      </div>
      <div className="advantages-content">
        <h2 className="advantages-title">НАШІ ПЕРЕВАГИ</h2>

        <ul className="advantages-list">
          {advantagesData.map(item => (
            <li key={item.id} className="advantages-item">
              {/* Викликаємо наш круглий компонент і передаємо іконку */}
              <CircleIcon iconUrl={item.icon} altText={item.text} />

              {/* Текст переваги поруч */}
              <span className="advantages-item-text">{item.text}</span>
            </li>
          ))}
        </ul>

        {/* Кнопка "Learn more" */}
        <div className="advantages-action">
          <Link to="#about" className="btn-learn-more">
            Про нас
          </Link>
          {/* <button className="btn-learn-more">Learn more</button> */}
        </div>

      </div>
    </section>
  );
}