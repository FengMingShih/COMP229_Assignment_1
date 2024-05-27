/*
File name: project.jsx
Student's Name: Feng Ming Shih
StudentID: 301399823
Date: 2024-05-25
*/

import './project.css'

export default function Project() {
    const projectData = [
        {
            title: 'Bank Management System',
            description: 'Developed a management system for banks to efficiently manage customer data and transactions.',
            image: 'bank-system.jpg'
        },
        {
            title: 'Google Cloud Deployment',
            description: 'Designed and deployed scalable applications on Google Cloud, ensuring high availability and performance.',
            image: 'google-cloud.jpg'
        },
        {
          title: 'Stock Trading Web App',
          description: 'Developed a web application for banks to facilitate the buying and selling of stocks, enhancing user experience and transaction efficiency.',
          image: 'stock-trading.jpg'
        }
    ];

    return (
        <div className="projects">
            <h1>Projects</h1>
            <div className="project-list">
                {projectData.map((project, index) => (
                    <div key={index} className="project">
                        <img src={`./assets/${project.image}`} alt={project.title} />
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

