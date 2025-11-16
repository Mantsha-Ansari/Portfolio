import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github,Linkedin, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const res = await fetch('https://formspree.io/f/mdkywyjb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };
    
  const contactInfo = [
    {
      icon: <Mail />,
      title: "Email",
      value: "mantsha866@gmail.com",
      link: "mailto:mantsha866@gmail.com"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91-9871510339",
      link: "tel:+919871510339"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Delhi, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      name: "GitHub",
      url: "https://github.com/Mantsha-Ansari",
      color: "#333"
    },
    {
      icon: <Linkedin size={24} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mantsha-ansari-496598290",
      color: "#0077b5"
    },
    {
      icon: <Mail size={24} />,
      name: "Email",
      url: "mailto:mantsha866@gmail.com",
      color: "#ea4335"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <div className="section-header">
          <span className="section-tag">Get in touch</span>
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Ready to start your next project? Let's discuss how we can bring your ideas to life
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-header">
              <div className="info-icon">
                <MessageCircle size={32} />
              </div>
              <div>
                <h3>Let's discuss your project</h3>
                <p>
                  I'm always open to discussing new opportunities, interesting projects, 
                  or just having a chat about technology and innovation.
                </p>
              </div>
            </div>

            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-icon">
                    {item.icon}
                  </div>
                  <div className="contact-text">
                    <h4>{item.title}</h4>
                    {item.link !== '#' ? (
                      <a href={item.link}>{item.value}</a>
                    ) : (
                      <p>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="availability">
              <div className="status-indicator">
                <div className="status-dot"></div>
                <span>Available for freelance work</span>
              </div>
              <p>Currently accepting new projects and collaborations</p>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Send me a message</h3>
                <p>Fill out the form below and I'll get back to you as soon as possible</p>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project or just say hello..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="success-message">
                  <div className="success-icon">✓</div>
                  <div>
                    <h4>Message sent successfully!</h4>
                    <p>Thank you for reaching out. I'll get back to you soon.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="error-message">
                  <div className="error-icon">✗</div>
                  <div>
                    <h4>Something went wrong</h4>
                    <p>Please try again or contact me directly via email.</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;