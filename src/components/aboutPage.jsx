import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/aboutPage.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false, // Animates on scroll-up too
    });
  }, []);

  return (
  <section id="about">
    <div className="about-wrapper">
      <h2 className="section-title" data-aos="fade-down">About Me</h2>
      <div className="about-container" data-aos="fade-up">
        <div className="about-right">
          <p data-aos="fade-in" data-aos-delay="200">
            Hey! I’m Dixen Jolvin Rodrigues — a curious learner diving into the world of Full Stack Development. I love working with React and the MERN stack, and lately I’ve been trying my hands at Android development too.
            <br /><br />
            Most of my projects are built using React, Node.js, Express, and MongoDB. I’ve also played around with Firebase and enjoy learning new tools when the project calls for it.
            <br /><br />
            Outside of code, you’ll usually find me keeping up with tech news, current affairs, or watching sports. I’m also into gaming, movies, music, and occasionally trading my chair for a mountain trail — I love travelling and trekking whenever I get the chance.
          </p>
        </div>
      </div>
    </div>
  </section>  
  );
};

export default About;
