import { useState, useEffect } from 'react';
import { Download, Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import './Hero.css'

const titles = ['Software Engineer', 'React Developer', 'Frontend Developer', 'Tech Enthusiast'];

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [titles.length]);

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let index = 0;
    setDisplayText('');

    const typing = setInterval(() => {
      if (index < currentTitle.length) {
        setDisplayText(currentTitle.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typing);
      }
    }, 100);

    return () => clearInterval(typing);
  }, [currentIndex, titles]);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="greeting">
              <span className="wave">👋</span>
              <span>Hello, I'm</span>
            </div>
            <h1 className="hero-name">
              <span className="name-text">Mantsha Ansari</span>
            </h1>
            <div className="hero-title">
              <span className="typing-text">{displayText}</span>
              <span className="cursor">|</span>
            </div>
            <p className="hero-description">
              Enthusiastic Computer Applications graduate with strong foundational knowledge in
              programming and web technologies. Passionate about creating innovative solutions
              and building amazing user experiences.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">6+</span>
                <span className="stat-label">Months Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">4+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Technologies</span>
              </div>
            </div>
            <div className="hero-buttons">
              <button
                className="btn-primary">
                Get In Touch
              </button>
              <a
                href='Public\Mantsha (2).pdf'
                download
                className='btn-secondary'
                aria-label='Download CV'
              >
                <Download />
                Download CV
              </a>
            </div>

            <div className="socialLink">
              <a href="https://github.com/Mantsha-Ansari" target="_blank" rel="noopener noreferrer">
                <Github />
              </a>
              <a href="https://www.linkedin.com/in/mantsha-ansari-496598290" target="_blank" rel="noopener noreferrer">
                <Linkedin size={20} />
              </a>
              <a href="mailto:mantsha866@gmail.com">
                <Mail size={20} />
              </a>
            </div>

            <div onClick={scrollToAbout} className="scroll-indicator" >
              <ArrowDown />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero;
