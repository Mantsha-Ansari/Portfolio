import { Heart, ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: 'https://github.com/Mantsha-Ansari',
      name: 'GitHub'
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/mantsha-ansari-496598290',
      name: 'LinkedIn'
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:mantsha866@gmail.com',
      name: 'Email'
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <h3 className="footer-logo">
                <span className="logo-text">Mantsha</span>
                <span className="logo-dot">.</span>
              </h3>
              <p className="footer-description">
                Passionate software engineer creating innovative solutions with modern web technologies. 
                Let's build something amazing together.
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(link.href.substring(1));
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-services">
              <li>Web Development</li>
              <li>Frontend Design</li>
              <li>React Applications</li>
              <li>API Integration</li>
              <li>Database Design</li>
              <li>Technical Consulting</li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Get In Touch</h4>
            <div className="footer-contact">
              <p>mantsha866@gmail.com</p>
              <p>+91-9871510339</p>
              <p>Delhi, India</p>
              <div className="availability-status">
                <div className="status-dot"></div>
                <span>Available for work</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>
              © {currentYear} Made with <Heart size={16} className="heart-icon" /> by Mantsha Ansari
            </p>
          </div>
          
          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;