import './Hero.css';

function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            {`Hi, I'm Derrick Owusu-Asare`}
          </h1>
          <p className="hero-subtitle">Software Engineer</p>
          <p className="hero-description">
            I create beautiful, functional web experiences that solve real problems
            and delight users. Passionate about clean code and elegant design.
          </p>
          <div className="hero-buttons">
            <button onClick={scrollToContact} className="btn btn-primary">
              Get In Touch
            </button>
            <a href="#projects" className="btn btn-secondary">
              View My Work
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-placeholder">
            <svg
              className="hero-bg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 300 300"
              width="300"
              height="300"
              aria-hidden="true"
            >
              <circle cx="150" cy="150" r="150" fill="#2563eb" opacity="0.1" />
              <circle cx="150" cy="150" r="120" fill="#2563eb" opacity="0.2" />
              <circle cx="150" cy="150" r="90" fill="#2563eb" opacity="0.3" />
            </svg>
            <img src="/Derrick.jpg" alt="Derrick Owusu-Asare portrait" className="hero-avatar" width="220" height="220" />
          </div>
        </div>
      </div>
     
    </section>
  );
}

export default Hero;
