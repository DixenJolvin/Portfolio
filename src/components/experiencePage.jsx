import React, { useEffect } from 'react';
import '../styles/experiencePage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const ExperiencePage = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const experiences = [
    {
      type: 'education',
      title: 'MCA',
      institution: 'Manipal Institute of Technology',
      duration: 'Aug 2023 – Aug 2025',
      summary: 'Postgraduate studies in Computer Applications.',
      icon: <FaGraduationCap />,
      bgColor: '#666'
    },
    {
      type: 'internship',
      title: 'Software Developer Intern',
      institution: 'Elogixa Technology India Pvt Ltd',
      duration: 'Jan 2025 – Jun 13, 2025',
      summary: 'Worked on web-based tools and internal systems.',
      icon: <FaBriefcase />,
      bgColor: '#888'
    },
  ];

  return (
   <section id="experience">
    <div className="experience-container" id="experience">
      <h3 className="experience-title" data-aos="fade-up">Experience</h3>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div className="timeline-item" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
            <div 
              className={`timeline-icon ${exp.type}`}
              style={{ backgroundColor: exp.bgColor }}
            >
              {exp.icon}
            </div>
            <div className="timeline-content">
              <h3 className="timeline-role">{exp.title}</h3>
              <p className="timeline-org">{exp.institution}</p>
              <div className="timeline-duration">{exp.duration}</div>
              <p className="timeline-summary">{exp.summary}</p>
              <div 
                className="accent-line"
                style={{ backgroundColor: exp.bgColor }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
   </section>  
  );
};

export default ExperiencePage;