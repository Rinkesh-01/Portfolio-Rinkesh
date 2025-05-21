import React from 'react';

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-container">
          
          <div className="contact-info">
            <p>
              I'm always interested in hearing about new projects and opportunities. Whether you have a
              question or just want to say hello, I'll try my best to get back to you!
            </p>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="contact-text">
                <h4>Email</h4>
                <p>rinkeshmalani0@gmail.com</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="contact-text">
                <h4>Phone</h4>
                <p>+9773400354</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <i className="fa-solid fa-location-crosshairs"></i>
              </div>
              <div className="contact-text">
                <h4>Location</h4>
                <p>Surat, Gujarat, India</p>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea className="form-control" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
