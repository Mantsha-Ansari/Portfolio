import { useState } from 'react';
import { ExternalLink, Github, Filter, X } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Task Management Application",
      description: "A responsive React-based task management application featuring drag-and-drop and multi-format file upload capabilities, enhancing user experience in managing task attachments.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "JavaScript", "CSS3", "Local Storage"],
      category: "Web Application",
      githubUrl: "https://github.com/Mantsha-Ansari",
      demoUrl: "#",
      features: [
        "Drag and drop task management functionality",
        "Multi-format file upload capabilities",
        "Dynamic filtering by project, status, and priority",
        "Responsive design for all devices",
        "React hooks and component-driven architecture",
        "Interactive UI components with state management"
      ]
    },
    {
      id: 2,
      title: "E-Commerce Website",
      description: "Built a responsive e-commerce site for electronics with integrated functionalities for product listing, detailed product pages, shopping cart, and secure checkout process.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
      category: "Web Application",
      githubUrl: "https://github.com/Mantsha-Ansari",
      demoUrl: "#",
      features: [
        "Product listing and detailed product pages",
        "Shopping cart functionality with local storage",
        "Secure checkout process simulation",
        "Responsive design with CSS animations",
        "Interactive elements for better user engagement",
        "Modern UI/UX design principles"
      ]
    },
    {
      id: 3,
      title: "Airline Management System",
      description: "Designed a GUI-based system using Java Swing for airline check-in with PNR-based passenger data fetch and boarding pass generation capabilities.",
      image: "https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Java", "Swing", "AWT", "File I/O"],
      category: "Desktop Application",
      githubUrl: "https://github.com/Mantsha-Ansari",
      features: [
        "PNR-based passenger data retrieval system",
        "Automated boarding pass generation",
        "Random terminal, gate, and seat assignment",
        "User-friendly GUI interface with Java Swing",
        "File I/O operations for data persistence",
        "Exception handling and input validation"
      ]
    },
    {
      id: 4,
      title: "Offer Letter Generation System",
      description: "Automated the generation of professional offer letters using Python with data integration from Excel files, PDF generation, and email functionality.",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["Python", "Pandas", "ReportLab", "SMTP"],
      category: "Automation Tool",
      githubUrl: "https://github.com/Mantsha-Ansari",
      features: [
        "Excel data integration with Pandas",
        "PDF generation with custom templates using ReportLab",
        "Automated email sending via SMTP",
        "Exception handling and data validation",
        "Batch processing capabilities",
        "Professional document formatting"
      ]
    }
  ];

  const categories = ['All', 'Web Application', 'Desktop Application', 'Automation Tool'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            A showcase of my recent work and technical projects
          </p>
        </div>

        <div className="filter-section">
          <div className="filter-header">
            <Filter size={20} />
            <span>Filter by category:</span>
          </div>
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button 
                    className="view-details-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Details
                  </button>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  {project.demoUrl && project.demoUrl !== '#' && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
                    <Github size={18} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedProject && (
          <div className="project-modal" onClick={() => setSelectedProject(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="close-modal" onClick={() => setSelectedProject(null)}>
                <X size={24} />
              </button>
              
              <div className="modal-header">
                <img src={selectedProject.image} alt={selectedProject.title} className="modal-image" />
                <div className="modal-info">
                  <span className="modal-category">{selectedProject.category}</span>
                  <h3 className="modal-title">{selectedProject.title}</h3>
                </div>
              </div>
              
              <div className="modal-body">
                <p className="modal-description">{selectedProject.description}</p>
                
                <div className="modal-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="modal-technologies">
                  <h4>Technologies Used:</h4>
                  <div className="tech-list">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="modal-links">
                  {selectedProject.demoUrl && selectedProject.demoUrl !== '#' && (
                    <a href={selectedProject.demoUrl} target="_blank" rel="noopener noreferrer" className="modal-link">
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer" className="modal-link">
                    <Github size={18} />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;