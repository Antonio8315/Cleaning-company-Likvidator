import './Header.css';
import { Logo } from "../components/Logo";
import { Navigation } from "../components/Navigation";
import { useState } from 'react';
import { AuthModal } from '../components/AuthModal';

export function Header() {
    const [authProps, setAuthProps] = useState({ isOpen: false, mode: 'login' });

    return (
        <header className="header">
            <Logo />
            <Navigation />

            <div style={{ display: 'flex', gap: '10px', marginLeft: 'auto' }}>
                <button className="btn btn-login" onClick={() => setAuthProps({ isOpen: true, mode: 'login' })}>
                    Login
                </button>
                <button className="btn btn-register" onClick={() => setAuthProps({ isOpen: true, mode: 'register' })}>
                    Sign in
                </button>
            </div>

            <AuthModal
                isOpen={authProps.isOpen}
                initialMode={authProps.mode}
                onClose={() => setAuthProps(prev => ({ ...prev, isOpen: false }))}
            />
        </header>
    );
}