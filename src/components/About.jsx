import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="about-paragraph">
            I’m a passionate software developer with a strong focus on frontend web development
             and a growing interest in data analytics. I enjoy building responsive, user-friendly i
             nterfaces and using data to gain insights that support better decision-making.
            </p>
            <p className="about-paragraph">
              My journey into tech started with a curiosity about how websites work, 
              which led me to start building web applications using modern frontend tools and best practices. 
              Through personal and academic projects, 
              I’ve developed solutions that prioritize usability, performance, and clean design..
            </p>
            <p className="about-paragraph">
              Alongside frontend development, I’m exploring data analytics, 
              working with data to identify trends, visualize insights, and improve understanding of real-world problems. 
              When I’m not coding, I enjoy learning new technologies, improving my analytical skills, 
              and engaging with the tech community.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <div className="stat-number">2+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">5+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="about-image-wrapper">
              <img
                width="100%"
                height="100%"
                src="/Derrick1.jpg"
                alt="About Me"
                className='image-2'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
