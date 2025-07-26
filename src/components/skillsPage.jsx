import React from 'react';
import '../styles/skillsPage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SkillsPage = () => {
  React.useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const allSkills = [
    'C', 'C++', 'Python', 'HTML', 'CSS', 'JavaScript', 
    'React', 'Node.js', 'Express.js', 'Android (Java)', 
    'MySQL', 'MongoDB'
  ];

  return (
    <section id="skills">
    <div className="skills-container" id="skills">
      <h2 className="skills-title" data-aos="fade-up">My Skills</h2>
      
      <div className="skills-cloud">
        {allSkills.map((skill, index) => (
          <div 
            className="skill-bubble" 
            key={skill} 
            data-aos="zoom-in" 
            data-aos-delay={index * 100}
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
    </section> 
  );
};

export default SkillsPage;