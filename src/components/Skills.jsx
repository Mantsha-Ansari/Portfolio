import { useState, useEffect, useRef } from 'react';
import { Code, Database, Wrench, Brain } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const [visibleSkills, setVisibleSkills] = useState(new Set());
    const skillsRef = useRef(null);

    const skillCategories = [
        {
            title: "Frontend Development",
            icon: <Code size={24} />,
            color: "#667eea",
            skills: [
                { name: "React", level: 85, icon: "⚛️" },
                { name: "JavaScript", level: 90, icon: "🟨" },
                { name: "HTML/CSS", level: 95, icon: "🎨" },
                { name: "Responsive Design", level: 88, icon: "📱" }
            ]
        },
        {
            title: "Backend Development",
            icon: <Database size={24} />,
            color: "#764ba2",
            skills: [
                { name: "Python", level: 80, icon: "🐍" },
                { name: "Java", level: 75, icon: "☕" },
                { name: "API Development", level: 78, icon: "🔗" },
                { name: "MySQL", level: 82, icon: "🗄️" }
            ]
        },
        {
            title: "Tools & Technologies",
            icon: <Wrench size={24} />,
            color: "#f093fb",
            skills: [
                { name: "Git", level: 85, icon: "🔧" },
                { name: "JSON", level: 90, icon: "📋" },
                { name: "Ajax", level: 75, icon: "🌐" },
                { name: "VS Code", level: 92, icon: "💻" }
            ]
        },
        {
            title: "Core Concepts",
            icon: <Brain size={24} />,
            color: "#4facfe",
            skills: [
                { name: "DSA", level: 70, icon: "🧮" },
                { name: "OOP", level: 80, icon: "🏗️" },
                { name: "Problem Solving", level: 85, icon: "🧩" },
                { name: "Debugging", level: 88, icon: "🔍" }
            ]
        }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.getAttribute('data-index') || '0');
                        setVisibleSkills(prev => new Set([...prev, index]));
                    }
                });
            },
            { threshold: 0.3 }
        );

        const skillElements = skillsRef.current?.querySelectorAll('.skill-item');
        skillElements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="skills">
            <div className="skills-container">
                <div className="section-header">
                    <span className="section-tag">What I know</span>
                    <h2 className="section-title">Skills & Technologies</h2>
                    <p className="section-subtitle">
                        A comprehensive overview of my technical expertise and proficiency levels
                    </p>
                </div>

                <div className="skills-grid" ref={skillsRef}>
                    {skillCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="skill-category">
                            <div className="category-header">
                                <div
                                    className="category-icon"
                                    style={{ background: `linear-gradient(135deg, ${category.color}, ${category.color}dd)` }}
                                >
                                    {category.icon}
                                </div>
                                <h3 className="category-title">{category.title}</h3>
                            </div>

                            <div className="skills-list">
                                {category.skills.map((skill, skillIndex) => {
                                    const globalIndex = categoryIndex * 10 + skillIndex;
                                    return (
                                        <div
                                            key={skillIndex}
                                            className="skill-item"
                                            data-index={globalIndex}
                                        >
                                            <div className="skill-header">
                                                <div className="skill-info">
                                                    <span className="skill-icon">{skill.icon}</span>
                                                    <span className="skill-name">{skill.name}</span>
                                                </div>
                                                <span className="skill-percentage">{skill.level}%</span>
                                            </div>

                                            <div className="skill-bar">
                                                <div
                                                    className="skill-progress"
                                                    style={{
                                                        width: visibleSkills.has(globalIndex) ? `${skill.level}%` : '0%',
                                                        background: `linear-gradient(135deg, ${category.color}, ${category.color}dd)`,
                                                        transition: 'width 1.5s cubic-bezier(0.4, 0, 0.2, 1)'
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;