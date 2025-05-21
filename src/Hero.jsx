import { useState } from "react";

export default function HeroSection() {
  const [name, setName] = useState("Rinkesh Malani");

  return (
    <div className="hero-section">
      <div className="hero-container">
        <p className="hero-greeting">Hello, I'm</p>
        <h1 className="hero-name">{name}</h1>
        <h2 className="hero-role">Frontend Web Developer</h2>

        <p className="hero-description">
          I build engaging and responsive web experiences with modern
          technologies. Passionate about creating clean, user-friendly
          interfaces.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            {" "}
            <a href="https://github.com/Rinkesh-01" className="btn-primary">
              View My Work
            </a>
           
          </button>
          <button className="btn-outline">Contact Me</button>
        </div>
      </div>
    </div>
  );
}
