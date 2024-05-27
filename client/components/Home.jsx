/*
File name: Home.jsx
Student's Name: Feng Ming Shih
StudentID: 301399823
Date: 2024-05-25
*/
//import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
export default function Home() {
     return (
          <div className="home">
            <h1>Welcome to My Portfolio</h1>
            <p>Mission Statement: To create innovative and efficient software solutions.</p>
            <Link to="/about" className="btn">Learn More About Me</Link>
          </div>
        );
     //return <p>Hello World!</p>
}
    