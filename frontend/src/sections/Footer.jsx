// src/sections/Footer.jsx
import './Footer.css';

// Імпортуємо іконки соцмереж (експортуй їх з Figma або завантаж png/svg)
import iconFb from '../assets/icons/FooterIcons/facebook.svg';
import iconInsta from '../assets/icons/FooterIcons/instagram.svg';
import iconViber from '../assets/icons/FooterIcons/viber.svg';
import iconYt from '../assets/icons/FooterIcons/youtube.svg';
import googleRatingBadge from '../assets/icons/FooterIcons/google-rating.png';
export function Footer() {
    const popularServices = [
        "Прибирання квартир",
        "Прибирання після пожежі",
        "Прибирання після ремонту",
        "Генеральне прибирання квартир",
        "Прибирання офісів",
        "Хімчистка килимів",
        "Хімчистка м’яких меблів",
        "Хімчистка салону автомобіля",
        "Карта сайту"
    ];

    return (
        <footer className="footer-section">
            <div className="footer-container">

                {/* ЛІВА КОЛОНКА: ПОПУЛЯРНІ ПОСЛУГИ */}
                <div className="footer-column">
                    <h3 className="footer-title">ПОПУЛЯРНІ ПОСЛУГИ</h3>
                    <ul className="footer-services-list">
                        {popularServices.map((service, index) => (
                            <li key={index}>
                                <a href={`#${service.toLowerCase().replace(/ /g, '-')}`}>{service}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* ПРАВА КОЛОНКА: СОЦМЕРЕЖІ ТА ЧАС РОБОТИ */}
                <div className="footer-column footer-right">
                    <div className="footer-socials-block">
                        <h3 className="footer-title">МИ В СОЦМЕРЕЖАХ</h3>
                        <div className="footer-social-icons">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                                <img src={iconFb} alt="Facebook" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer">
                                <img src={iconInsta} alt="Instagram" />
                            </a>
                            <a href="viber://chat?number=your_number" target="_blank" rel="noreferrer">
                                <img src={iconViber} alt="Viber" />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noreferrer">
                                <img src={iconYt} alt="YouTube" />
                            </a>
                        </div>
                    </div>

                    <div className="footer-hours-block">
                        <h4 className="footer-hours-title">Час роботи:</h4>
                        <p className="footer-hours-text">Цілодобово</p>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-bottom-container">

                    {/* Копірайт */}
                    <div className="footer-copyright">
                        <span className="copyright-icon">©</span>
                        <p className="copyright-text">
                            Ліквідатор – клінінгова компанія в м. Чернівці
                        </p>
                    </div>

                    {/* Текст reCAPTCHA */}
                    <div className="footer-recaptcha">
                        <p>
                            This site is protected by reCAPTCHA and the Google{' '}
                            <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> and{' '}
                            <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms of Service</a> apply.
                        </p>
                    </div>

                    {/* Віджет Google Rating праворуч */}
                    <div className="footer-google-rating">
                        <img src={googleRatingBadge} alt="Google Rating 4.6" />
                    </div>

                </div>
            </div>
        </footer>
    );
}