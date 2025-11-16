import './About.css';
import { Heart, Coffee, Code } from 'lucide-react';

function About() {
    return (
        <section id="about" className="about">
            <div className="about-container">
                <div className="section-header">
                    <span className="section-tag">Get to know me</span>
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">
                        Passionate about creating innovative solutions and building amazing user experiences
                    </p>
                </div>
                <div className="about-content">
                    <div className="about-text">
                        <div className="text-content">
                            <p className="intro-text">
                                I'm <strong>Mantsha Ansari</strong>, an enthusiastic and detail-oriented Computer Applications
                                graduate with strong foundational knowledge in programming and web technologies.
                            </p>

                            <p>
                                Proficient in <strong>React, Python, Java, HTML, CSS, JavaScript, and MySQL</strong>.
                                I gained practical experience through a 6-month internship at HCDS Technologies,
                                contributing to real-world projects including dashboards, automation tools, and user-centric applications.
                            </p>

                            <p>
                                I'm eager to apply my technical skills and problem-solving mindset in a dynamic IT environment
                                while continuously learning and growing as a software professional. My goal is to create
                                impactful solutions that make a difference.
                            </p>
                            <div />
                        </div>
                    </div>
                    <div className="about-sidebar">
                        <div className="sidebar-card">
                            <div className="sidebar-header">
                                <Coffee />
                                <span>When I'm not coding...</span>
                            </div>

                            <ul className="sidebar-list">
                                <li className="sidebar-item">
                                    <div className="bullet"></div>
                                    <span>Learning new technologies and frameworks</span>
                                </li>
                                <li className="sidebar-item">
                                    <div className="bullet"></div>
                                    <span>Contributing to open-source projects</span>
                                </li>
                                <li className="sidebar-item">
                                    <div className="bullet"></div>
                                    <span>Reading tech blogs and staying updated</span>
                                </li>
                                <li className="sidebar-item">
                                    <div className="bullet"></div>
                                    <span>Building side projects for fun</span>
                                </li>
                            </ul>

                            <div className="sidebar-quote">
                                <p>
                                    "The best way to learn is by building real projects that solve real problems."
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="about-highlights">
                    <div className="highlight-card">
                        <Code className="highlight-icon" />
                        <div className="highlight-text-content">
                            <h4 className="highlight-title">Clean Code</h4>
                            <p className="highlight-text">Writing maintainable, scalable solutions</p>
                        </div>
                    </div>
                    <div className="highlight-card">
                        <Heart className="highlight-icon heart" />
                        <div className="highlight-text-content">
                            <h4 className="highlight-title">User-Focused</h4>
                            <p className="highlight-text">Designing with users in mind</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;