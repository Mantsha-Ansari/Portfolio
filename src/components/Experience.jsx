import { Briefcase, MapPin, Calendar, GraduationCap, Award } from "lucide-react";
import "./Experience.css";

function Experience() {
    const experiences = [
        {
            title: "Project Trainee (Information Technology)",
            company: "HCDS Technologies",
            location: "Delhi",
            duration: "Dec 2024 – June 2025",
            type: "Internship",
            description: [
                "Worked on diverse real-world software projects, enhancing backend and frontend systems",
                "Built automated systems, dashboards, and tools using Python, JavaScript, and web technologies",
                "Collaborated with a team to deliver end-to-end solutions from development to deployment",
                "Gained valuable hands-on experience with debugging, API integration, and performance optimization"
            ],
            technologies: ["React", "Python", "JavaScript", "MySQL", "API Integration", "Web Technologies"]
        }
    ];

    const education = [
        {
            degree: "Bachelor of Computer Application",
            institution: "Indira Gandhi National Open University",
            duration: "2022 – 2025",
            status: "Completed",
            description: "Comprehensive computer science education focusing on programming, web technologies, database management, and software development practices."
        }
    ];

    const certifications = [
        {
            name: "Certificate in AI Tools",
            issuer: "Be10x",
            date: "November 2023",
            type: "Professional Development"
        },
        {
            name: "Internship Completion Certificate",
            issuer: "HCDS Technologies",
            date: "June 2025",
            type: "Work Experience"
        },
        {
            name: "Deloitte Job Simulation on Forage",
            issuer: "Deloitte",
            date: "July 2025",
            type: "Virtual Experience"
        }
    ];


    return (
        <section id="experience" className="experience">
            <div className="experience-container">
                <div className="section-header">
                    <span className="section-tag">My Journey</span>
                    <h2 className="section-title">Experience & Education</h2>
                    <p className="section-subtitle">
                        My professional journey and academic background in technology
                    </p>
                </div>
                <div className="content-layout">
                    <div className="experience-section">
                        <div className="subsection-header">
                            <div className="subsection-icon">
                                <Briefcase />
                            </div>
                            <h3>Professional Experience</h3>
                        </div>
                        <div className="timeline">
                            {experiences.map((exp, index) => (
                            <div className="timeline-item" key={index}>
                                    <div className="timeline-marker">
                                        <div className="marker-dot"></div>
                                        <div className="marker-line"></div>
                                    </div>
                                    <div className="experience-card">
                                        <div className="card-header">
                                            <div className="job-info">
                                                <h4 className="job-title">{exp.title}</h4>
                                                <div className="company-info">
                                                    <span className="company">{exp.company}</span>
                                                    <span className="job-type">{exp.type}</span>
                                                </div>
                                            </div>
                                            <div className="job-meta">
                                                <div className="meta-item">
                                                    <MapPin size={16} />
                                                    <span>{exp.location}</span>
                                                </div>
                                                <div className="meta-item">
                                                    <Calendar size={16} />
                                                    <span>{exp.duration}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-content">
                                            <ul className="job-description">
                                                {exp.description.map((desc, idx) => (
                                                    <li key={idx}>{desc}</li>
                                                ))}
                                            </ul>
                                            <div className="technologies">
                                                <span className="tech-label">Technologies:</span>
                                                <div className="tech-tags">
                                                    {exp.technologies.map((tech, idx) => (
                                                        <span key={idx} className="tech-tag">{tech}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Education & Certifications */}
                    <div className="sidebar">
                        {/* Education */}
                        <div className="education-section">
                            <div className="subsection-header">
                                <div className="subsection-icon">
                                    <GraduationCap size={24} />
                                </div>
                                <h3>Education</h3>
                            </div>
                            {education.map((edu, index) => (
                                <div key={index} className="education-card">
                                    <div className="edu-header">
                                        <h4 className="degree">{edu.degree}</h4>
                                        <span className="status">{edu.status}</span>
                                    </div>
                                    <div className="institution">{edu.institution}</div>
                                    <div className="edu-duration">{edu.duration}</div>
                                    <p className="edu-description">{edu.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Certifications */}
                        <div className="certifications-section">
                            <div className="subsection-header">
                                <div className="subsection-icon">
                                    <Award size={24} />
                                </div>
                                <h3>Certifications</h3>
                            </div>

                            <div className="certifications-list">
                                {certifications.map((cert, index) => (
                                    <div key={index} className="certification-card">
                                        <div className="cert-header">
                                            <h4 className="cert-name">{cert.name}</h4>
                                            <span className="cert-type">{cert.type}</span>
                                        </div>
                                        <div className="cert-meta">
                                            <span className="cert-issuer">{cert.issuer}</span>
                                            <span className="cert-date">{cert.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Experience;