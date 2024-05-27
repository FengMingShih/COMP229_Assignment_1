/*
File name: Layout.jsx
Student's Name: Feng Ming Shih
StudentID: 301399823
Date: 2024-05-25
*/
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/assets/fms_logo.jpg';

export default function Layout() {
  return (
    <header className='header'>
      <div className='hdiv'>
      <img src={logo} alt='Logo' className='logo' />
      <h1>My Portfolio</h1>
      </div>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About Me</Link> | <Link to="/project">Projects</Link> | <Link to="/service">Services</Link> | <Link to="/contact">Contact Me</Link>
      </nav>
      <hr />
      
    
      
    </header>
  );
}

