/*
File name: about.jsx
Student's Name: Feng Ming Shih
StudentID: 301399823
Date: 2024-05-25
*/
import me from './assets/me.jpg';
import './about.css';
import resume from './assets/resume.pdf';
export default function About() {
    return (
        <div className="about">
            <h1>About Me</h1>
            <img src={me} alt="Feng Ming Shih" className='me-image' />
            <p>My name is Feng Ming Shih, and I am a software developer with 7 years of experience in web development and system maintenance. I specialize in debugging and troubleshooting, system design, development, testing, and performance optimization.</p>
            <p>I am skilled in organizing document reports, training materials, and requirement specifications. I actively participate in team meetings and training programs, always striving to enhance my skills and knowledge.</p>
            <a href={resume} className="btn" target="_blank" rel="noopener noreferrer">Download My Resume</a>
        </div>
    );
}
    