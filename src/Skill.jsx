import { useState, useEffect } from 'react';

export default function Skill() {
  const [animated, setAnimated] = useState(false);
  
  const skills = [
    { name: 'HTML5', percentage: 90, color: 'orange' },
    { name: 'CSS3', percentage: 85, color: 'blue' },
    { name: 'JavaScript', percentage: 80, color: 'yellow' },
    { name: 'React', percentage: 75, color: 'cyan' },
    { name: 'Tailwind CSS', percentage: 65, color: 'lightcyan' },
    { name: 'Git', percentage: 75, color: 'red' },
    { name: 'Responsive Design', percentage: 85, color: 'purple' },
  ];
   const technologies = [
    { name: 'Npm' },
    { name: 'Chatgpt' },
    { name: 'DevC' },
    { name: 'VS Code' },
    { name: 'GitHub' },
    { name: 'AI tool' },
  ];


  useEffect(() => {
    setAnimated(true);
  }, []);

  return (
    <section id="skills">
    <div className="skills-section">
      <div className="skills-container">
        <h2 className="skills-title">
          My Skills
          <div className="skills-underline"></div>
        </h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-block">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-percentage">{skill.percentage}%</span>
              </div>
              <div className="skill-bar-bg">
                <div
                  className="skill-bar-fill"
                  style={{
                    width: animated ? `${skill.percentage}%` : '0%',
                    backgroundColor: skill.color,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="technologies-section">
      <div className="technologies-container">
        <h2 className="technologies-title">
          Other Technologies &amp; Tools
        </h2>

        <div className="technologies-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="technology-item">
              {tech.name}
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
    </section>
    
  );
}
