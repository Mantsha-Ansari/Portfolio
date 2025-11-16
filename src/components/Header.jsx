import './Header.css';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <div className="gradient-orb orb-2"></div>
                <div className="logo">
                    <span className="logo-text">Mantsha</span>
                    <span className="logo-dot">.</span>
                </div>


                <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
                    <a href="#home" onClick={() => scrollToSection('home')}>Home</a>
                    <a href="#about" onClick={() => scrollToSection('about')}>About</a>
                    <a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a>
                    <a href="#Experience" onClick={() => scrollToSection('experience')} >Experience</a>
                    <a href="#Projects" onClick={() => scrollToSection('projects')}>Projects</a>
                    <a href="#Contact" onClick={() => scrollToSection('contact')}>Contact</a>
                </nav>
                <button
                    className="menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </header>
    )
}

export default Header;