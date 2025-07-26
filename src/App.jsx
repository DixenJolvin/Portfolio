import React from 'react';
import Navbar from './components/navBar';
import Homepage from './components/homePage';
import Aboutpage from './components/aboutPage'; 
import Projectpage from './components/projectPage'; 
import Skillspage from './components/skillsPage'; 
import Experiencepage from './components/experiencePage';
import Contactpage from './components/contactPage';

const App = () => {
  return (
    <div>
      <Navbar />

      {/* Push content below fixed navbar */}
      
        <Homepage />
        <Aboutpage />
        <Projectpage />
        <Skillspage />
        <Experiencepage />
        <Contactpage />
      

      {/* Add smooth scrolling and spacing for anchor links */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }

      `}</style>
    </div>
  );
};

export default App;
