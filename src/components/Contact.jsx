import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">
          {`Have a project in mind? Let's work together!`}
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <h3 className="contact-info-title">{`Let's talk about everything!`}</h3>
            <p className="contact-info-text">
              {`I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.`}
            </p>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                </div>
                <div>
                  <h4 className="method-title">Email</h4>
                  <a href="mailto:aderrick649@gmail.com" className="method-link">
                    aderrick649@gmail.com 
                  </a>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon">
                  <i className="fa-solid fa-phone" aria-hidden="true"></i>
                </div>
                <div>
                  <h4 className="method-title">Phone</h4>
                  <a href="tel:+233541374216" className="method-link">
                    0541374216
                  </a>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon">
                  <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                </div>
                <div>
                  <h4 className="method-title">Location</h4>
                  <p className="method-text">Kasoa, Ghana</p>
                </div>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/showmandem" className="social-link" aria-label="GitHub" target='blank'>
                <i className="fa-brands fa-github" style={{ fontSize: '24px' }}></i>
              </a>
              <a href="https://www.linkedin.com/in/showmandem/" className="social-link" aria-label="LinkedIn" target='blank'>
                <i className="fa-brands fa-linkedin" style={{ fontSize: '24px' }}></i>
              </a>
              <a href="https://wa.me/233205873060" className="social-link" aria-label="WhatsApp" target='blank'>
                <i className="fa-brands fa-whatsapp" style={{ fontSize: '24px' }}></i>
              </a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="form-button">
              Send Message
            </button>
            {status && <p className="form-status">{status}</p>}
          </form>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2026 Derrick Owusu-Asare. All rights reserved.</p>
      </footer>
    </section>
  );
}

export default Contact;
