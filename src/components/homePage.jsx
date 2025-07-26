import React, { useState, useEffect } from "react";
import "../styles/homePage.css";
import Dixen77 from '../assets/Dixen77.jpg';

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    // Trigger typing animation on mount
    setTimeout(() => setIsTyping(true), 500);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleProfileHover = (e) => {
    e.currentTarget.style.transform = 'scale(1.05) rotate(2deg)';
  };

  const handleProfileLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
  };

  const handleButtonHover = (e, scale = 1.1) => {
    e.currentTarget.style.transform = `scale(${scale}) translateY(-2px)`;
    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
  };

  const handleButtonLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1) translateY(0px)';
    e.currentTarget.style.boxShadow = 'none';
  };

  return (
    <section id="home" className="homepage" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Subtle parallax background effect */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          pointerEvents: 'none',
          transition: 'background 0.3s ease'
        }}
      />

      <div className="home-container">
        {/* LEFT - PROFILE IMAGE */}
        <div className="left">
          <div 
            className="profile-pic-container"
            style={{
              transform: `translateY(${Math.sin(Date.now() * 0.001) * 5}px)`,
              transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <img 
              src={Dixen77} 
              alt="Profile" 
              className="profile-pic"
              onMouseEnter={handleProfileHover}
              onMouseLeave={handleProfileLeave}
              style={{
                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer'
              }}
            />
          </div>
        </div>

        {/* RIGHT - TEXT CONTENT */}
        <div className="right">
          <h1 
            className="typewriter"
            style={{
              opacity: isTyping ? 1 : 0,
              transform: isTyping ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            Hey, I'm Dixen Jolvin Rodrigues
          </h1>
          <p 
            className="subline"
            style={{
              opacity: isTyping ? 1 : 0,
              transform: isTyping ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            I'm a fresher passionate about  Full Stack Development. I enjoy building projects and learning modern web technologies through hands-on experience.
          </p>
<div 
  className="buttons"
  style={{
    opacity: isTyping ? 1 : 0,
    transform: isTyping ? 'translateY(0)' : 'translateY(20px)',
    transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
  }}
>
  {/* Download Resume Button */}
  <a 
    href="/Dixen_JR_FullStackdev_cv.pdf" 
    download 
    className="btn"
    onMouseEnter={handleButtonHover}
    onMouseLeave={handleButtonLeave}
    style={{
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'inline-flex',
      alignItems: 'center'
    }}
  >
    Download Resume
  </a>

  {/* LinkedIn Button */}
  <a 
    href="https://www.linkedin.com/in/dixen-jolvin-rodrigues-9471a6313/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="btn-outline"
    onMouseEnter={(e) => handleButtonHover(e, 1.05)}
    onMouseLeave={handleButtonLeave}
    style={{
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px'
    }}
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  </a>

  {/* GitHub Button */}
  <a 
    href="https://github.com/DixenJolvin" 
    target="_blank" 
    rel="noopener noreferrer"
    className="btn-outline"
    onMouseEnter={(e) => handleButtonHover(e, 1.05)}
    onMouseLeave={handleButtonLeave}
    style={{
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px'
    }}
  >
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  </a>
</div>
        </div>
      </div>

      {/* SCROLL DOWN ARROW */}
      <div 
        className="scroll-down"
        style={{
          animation: 'bounce 2s infinite',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.2)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <span style={{ 
          transition: 'transform 0.3s ease',
          display: 'inline-block'
        }}>↓</span>
      </div>

      <style jsx>{`
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </section>
  );
};

export default HomePage;