import React from "react";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About Me</h2>
          <div className="about-divider"></div>
        </div>

        <div className="about-grid">
          <div className="about-photo-wrapper">
            <div className="about-photo">
              <img src="../img/rinkesh.jpg" alt="" />
            </div>
          </div>

          <div className="about-content">
            <h3 className="about-role">Frontend Web Developer</h3>
            <p className="about-text">
              I'm a passionate and dedicated frontend developer with a strong
              foundation in HTML, CSS, JavaScript, and modern frameworks like
              React. As a recent graduate, I bring fresh perspectives and
              up-to-date skills to the web development field.
            </p>
            <p className="about-text">
              I focus on creating clean, responsive, and user-friendly
              interfaces that provide excellent user experiences. I'm constantly
              learning new technologies and techniques to improve my skills and
              keep up with industry trends.
            </p>

            <div className="about-details">
              <p>
                <span>Name:</span> Rinkesh Malani
              </p>
              <p>
                <span>Email:</span> rinkeshmalani0@gmail.com
              </p>
              <p>
                <span>From:</span> Surat
              </p>
              <p>
                <span>Experience:</span> Fresher
              </p>
            </div>

            <button className="download-btn">
              <a
                href="/pdf/rinkesh-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
