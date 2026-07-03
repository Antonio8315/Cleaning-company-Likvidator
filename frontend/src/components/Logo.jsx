import './Logo.css';
import logoIcon from '../assets/logo.png'
import { Link } from 'react-router-dom';

export function Logo() {
    return (
        <div className="logo-container">
            <Link to="/" className="link-logo">
            <img src={logoIcon} alt="Likvidator Logo" className="logo"/>
            <h1 className="logo-text">Likvidator</h1>
            </Link>
        </div>
    );
}
