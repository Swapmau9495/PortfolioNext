import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file for styles
import { useTheme } from '../../common/ThemeContext';
const Navbar = () => {
    const { theme } = useTheme();
  return (
    <>
    <div className="container nav_bar"
    data-aos="fade-down"
    data-aos-duration="1000" 
    >
      <h3 ></h3>
      <div className="right">
       
        <a href="#skills" className={`${theme === 'light' ?"nav_items":'nav_items_dark'}`}>
          Skills
        </a>
        <a href="#projects" className={`${theme === 'light' ?"nav_items":'nav_items_dark'}`}>
          Projects
        </a>
        <a href="#contact" className={`${theme === 'light' ?"nav_items":'nav_items_dark'}`}>
          Contact
        </a>
      </div>
    </div>
  </>
  );
};

export default Navbar;
