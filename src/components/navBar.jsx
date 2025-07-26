import React from 'react';

const Navbar = () => {
  return (
    <header style={wrapperStyle}>
      <nav style={navbarStyle}>
        <a href="#home" style={linkStyle}>Home</a>
        <a href="#about" style={linkStyle}>About</a>
        <a href="#projects" style={linkStyle}>Projects</a>
        <a href="#skills" style={linkStyle}>Skills</a>
        <a href="#experience" style={linkStyle}>Experience</a>
      </nav>
      <style>{`
        /* Hover effects for navigation links */
        nav a:hover {
          background-color: rgba(51, 51, 51, 0.1) !important;
          color: #222 !important;
          transform: translateY(-1px) !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1) !important;
        }

        nav a:active {
          transform: translateY(0px) !important;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1) !important;
        }

        /* Extra small phones (0-359px) */
        @media (max-width: 359px) {
          nav {
            gap: 5px !important;
            padding: 5px 8px !important;
          }
          nav a {
            font-size: 11px !important;
            padding: 3px 4px !important;
          }
          nav a:hover {
            transform: translateY(-0.5px) !important;
          }
        }
        
        /* Small phones (360-599px) */
        @media (min-width: 360px) and (max-width: 599px) {
          nav {
            gap: 8px !important;
            padding: 6px 12px !important;
          }
          nav a {
            font-size: 12px !important;
            padding: 4px 6px !important;
          }
          nav a:hover {
            transform: translateY(-0.5px) !important;
          }
        }
        
        /* Large phones/small tablets (600-767px) */
        @media (min-width: 600px) and (max-width: 767px) {
          nav {
            gap: 15px !important;
            padding: 8px 18px !important;
          }
          nav a {
            font-size: 13px !important;
            padding: 5px 8px !important;
          }
        }
        
        /* Tablets (768-991px) */
        @media (min-width: 768px) and (max-width: 991px) {
          nav {
            gap: 20px !important;
            padding: 9px 22px !important;
          }
          nav a {
            font-size: 14px !important;
            padding: 5px 9px !important;
          }
        }
        
        /* Laptops (992-1199px) */
        @media (min-width: 992px) and (max-width: 1199px) {
          nav {
            gap: 25px !important;
            padding: 10px 25px !important;
          }
          nav a {
            font-size: 14px !important;
            padding: 6px 9px !important;
          }
        }
        
        /* Desktops (1200-1440px) */
        @media (min-width: 1200px) and (max-width: 1440px) {
          nav {
            gap: 30px !important;
            padding: 10px 30px !important;
          }
          nav a {
            font-size: 15px !important;
            padding: 6px 10px !important;
          }
        }
        
        /* Ultra wide (1441px+) */
        @media (min-width: 1441px) {
          nav {
            gap: 35px !important;
            padding: 12px 35px !important;
          }
          nav a {
            font-size: 16px !important;
            padding: 7px 12px !important;
          }
        }
      `}</style>
    </header>
  );
};

const wrapperStyle = {
  position: 'fixed',
  top: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 1000,
};

const navbarStyle = {
  display: 'flex',
  gap: '30px',
  padding: '10px 30px',
  backgroundColor: 'rgba(240, 240, 240, 0.6)', // Softer grey
  backdropFilter: 'blur(10px)',
  WebkitBackdropFilter: 'blur(10px)',
  borderRadius: '20px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)', // Subtle shadow
};

const linkStyle = {
  textDecoration: 'none',
  color: '#333',
  fontWeight: '500',
  fontSize: '15px',
  padding: '6px 10px',
  borderRadius: '8px',
  transition: 'all 0.2s ease-in-out',
};

export default Navbar;