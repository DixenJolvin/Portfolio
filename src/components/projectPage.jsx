import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/projectPage.css";

const projects = [
  {
    title: "Exam Room Application",
    description:
      "An online platform for scheduling exams, managing cut-offs, and evaluating results efficiently with secure access and a user-friendly dashboard.",
    image: "/Exam_2.png",
    tech: ["Django", "React.js", "PostgreSQL", "JWT"],
    code: "https://github.com/DixenJolvin/Exam-Room-Application",
  },
  {
    title: "Contact Management System",
    description:
      "A backend application allowing users to securely manage personal contacts with login, registration, and JWT-based authentication.",
    image: "/contact_2.png",
    tech: ["Node.js", "Express.js", "MongoDB", "JWT"],
    code: "https://github.com/DixenJolvin/Contact_Management",
  },
  {
    title: "VenueVerse",
    description:
      "An Android app for browsing and booking venues online, built using Java and Firebase with real-time database support.",
    image: "/Venuev_2.png",
    tech: ["Java", "Firebase", "Android Studio"],
    code: "https://github.com/DixenJolvin/VenueVerse",
  },
  {
    title: "Sawmill Management System",
    description:
      "A web-based system where users can purchase furniture and book timber services, while admins manage products and appointments.",
    image: "/sawmill_2.png",
    tech: ["HTML", "CSS", "PHP", "MySQL"],
    code: "https://github.com/DixenJolvin/Saw-mill",
  },
  // Add more projects as needed
];

const ProjectPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // animate both on scroll down and up
    });
  }, []);

  return (
  <section id="projects">
    <div className="project-page" id="projects">
      <h2 className="section-title" data-aos="fade-up">
       My Projects
      </h2>
      {projects.map((project, index) => (
        <div
          className="project-card"
          data-aos="zoom-in-up"
          data-aos-delay={index * 100}
          key={index}
        >
          <img
            src={project.image}
            alt={project.title}
            className="project-image"
          />
          <div className="project-details">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="tech-stack">
              {project.tech.map((tech, idx) => (
                <span key={idx} className="tech-chip">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              <a
                href={project.code}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Code
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
   </section>   
  );
};

export default ProjectPage;
