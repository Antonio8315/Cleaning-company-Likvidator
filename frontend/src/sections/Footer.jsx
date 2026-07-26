import iconFb from "../assets/icons/FooterIcons/facebook.svg";
import iconInsta from "../assets/icons/FooterIcons/instagram.svg";
import iconViber from "../assets/icons/FooterIcons/viber.svg";
import iconYt from "../assets/icons/FooterIcons/youtube.svg";
import googleRatingBadge from "../assets/icons/FooterIcons/google-rating.png";

import { Link } from "react-router-dom";

import "./Footer.css";

export function Footer() {
  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column footer-about">
          <h3 className="footer-logo">Likvidator</h3>
          <p className="footer-text">
            Професійні клінінгові послуги для приватних осіб та бізнесу.
            Забезпечуємо бездоганну чистоту, свіжість та затишок у вашому
            приміщенні. Працюємо швидко, якісно та безпечно!
          </p>
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Likvidator. Всі права захищені.
          </p>
        </div>

        <div className="footer-column footer-nav">
          <h4>Популярні послуги</h4>
          <ul className="footer-links">
            <li>
              <Link
                to="/#MainServices"
                onClick={() => handleScrollToSection("MainServices")}
              >
                Прибирання квартир
              </Link>
            </li>
            <li>
              <Link
                to="/#MainServices"
                onClick={() => handleScrollToSection("MainServices")}
              >
                Генеральне прибирання
              </Link>
            </li>
            <li>
              <Link
                to="/#MainServices"
                onClick={() => handleScrollToSection("MainServices")}
              >
                Хімчистка м'яких меблів
              </Link>
            </li>
            <li>
              <Link
                to="/#MainServices"
                onClick={() => handleScrollToSection("MainServices")}
              >
                Хімчистка килимів
              </Link>
            </li>
            <li>
              <Link to="/reviews">Почитати відгуки</Link>
            </li>
          </ul>
        </div>

        <div className="footer-column footer-contacts">
          <h4>Наші контакти</h4>
          <div className="contact-info">
            <ul
              className="contact-list"
              style={{ alignItems: "center", justifyContent: "center" }}
            >
              <li>
                <span className="contact-icon">📍</span>
                <span>м. Чернівці, вул. Головна, 1</span>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <a href="tel:+380000000000">+38 (000) 000-00-00</a>
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <a href="mailto:info@likvidator.com">info@likvidator.com</a>
              </li>
              <li className="work-hours">
                <span className="contact-icon">🕒</span>
                <div>
                  <strong>Графік роботи:</strong>
                  <p>Пн - Нд: 08:00 - 20:00</p>
                  <p className="no-days-off">Працюємо без вихідних</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
