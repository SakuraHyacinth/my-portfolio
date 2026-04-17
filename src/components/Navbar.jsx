import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);

    const links = [
        { label: 'Home', path: '/' },
        { label: 'Projects', path: '/#projects' },
        { label: 'About', path: '/#about' },
        { label: 'Blog', path: '/blog' },
    ];

    function handleNav(path) {
        setMenuOpen(false);
        if (path.startsWith('/#')) {
            navigate('/');
            setTimeout(() => {
                const id = path.slice(2);
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            navigate(path);
            window.scrollTo(0, 0);
        }
    }

    function isActive(path) {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path.split('#')[0]) && path !== '/';
    }

    return (
        <nav className="navbar">
            <div className="navbar-inner" style={{ position: 'relative' }}>
                <div className="navbar-logo" onClick={() => handleNav('/')} style={{ cursor: 'pointer' }}>
                    <span className="paw">🐾</span>
                    Whisker Dev
                </div>

                <div className={`navbar-links${menuOpen ? ' open' : ''}`}>
                    {links.map(link => (
                        <button
                            key={link.path}
                            className={`nav-link${isActive(link.path) ? ' active' : ''}`}
                            onClick={() => handleNav(link.path)}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                <button
                    className="navbar-menu-btn"
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? '✕' : '☰'}
                </button>
            </div>
        </nav>
    );
}