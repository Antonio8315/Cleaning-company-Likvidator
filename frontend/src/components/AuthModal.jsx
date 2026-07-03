// src/components/AuthModal.jsx
import { useEffect, useState } from 'react';
import './AuthModal.css';
import registerImg from '../assets/icons/RegisterImages/cleaner-bucket.jpg'; // Картинка для реєстрації

export function AuthModal({ isOpen, onClose, initialMode = 'login' }) {
  const [mode, setMode] = useState(initialMode); // 'login' або 'register'
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    agreeToTerms: false
  });

  useEffect(() => {
    if (isOpen) {
      setMode(initialMode);
    }
  }, [initialMode, isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mode === 'login') {
      console.log("Вхід в систему:", { email: formData.email, password: formData.password });
      // Тут логіка для Flask API (/api/auth/login)
    } else {
      console.log("Реєстрація користувача:", formData);
      // Тут логіка для Flask API (/api/auth/register)
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      {/* Динамічний клас додає модифікатор для компактного вигляду форми логіну */}
      <div className={`modal-content ${mode === 'login' ? 'login-layout' : ''}`} onClick={(e) => e.stopPropagation()}>
        
        <button className="modal-close-btn" onClick={onClose}>&times;</button>

        {/* Картинка показується ТІЛЬКИ в режимі реєстрації */}
        {mode === 'register' && (
          <div className="modal-image-side">
            <img src={registerImg} alt="Cleaning service" />
          </div>
        )}

        {/* Блок самої форми */}
        <div className="modal-form-side">
          {mode === 'login' ? (
            <>
              <h2 className="modal-title">Log in to your account</h2>
              <p className="modal-switch-text">
                Don't have an account? <span onClick={() => setMode('register')}>Sign Up</span>
              </p>
            </>
          ) : (
            <>
              <h2 className="modal-title">Sign up now!</h2>
              <p className="modal-subtitle">
                Enter your email address to create your account on our product
              </p>
            </>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            {/* Поле Username потрібне ТІЛЬКИ для реєстрації */}
            {mode === 'register' && (
              <div className="input-group">
                <input 
                  type="text" 
                  name="username"
                  placeholder="Username" 
                  value={formData.username}
                  onChange={handleChange}
                  required 
                />
              </div>
            )}

            <div className="input-group">
              <input 
                type="email" 
                name="email"
                placeholder="Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>

            <div className="input-group">
              <input 
                type="password" 
                name="password"
                placeholder="Password" 
                value={formData.password}
                onChange={handleChange}
                required 
              />
            </div>

            {/* Чекбокс потрібен ТІЛЬКИ для реєстрації */}
            {mode === 'register' ? (
              <div className="checkbox-group">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    required
                  />
                  <span className="checkbox-text">
                    I've read and agree to <a href="/privacy">Privacy Policy</a>
                  </span>
                </label>
              </div>
            ) : (
              // Можна додати посилання "Forgot password?" для логіну за бажанням
              <div className="forgot-password-placeholder"></div>
            )}

            <button type="submit" className="submit-auth-btn">
              {mode === 'login' ? 'Log in' : 'Create account'}
            </button>

            {/* Для форми логіну повернення назад на реєстрацію вже є зверху, 
                а для форми реєстрації додамо дрібне посилання внизу */}
            {mode === 'register' && (
              <p className="modal-back-to-login">
                Already have an account? <span onClick={() => setMode('login')}>Log in</span>
              </p>
            )}
          </form>
        </div>

      </div>
    </div>
  );
}