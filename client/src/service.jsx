/*
File name: service.jsx
Student's Name: Feng Ming Shih
StudentID: 301399823
Date: 2024-05-25
*/

import './service.css';

export default function Service() {
  const services = [
    {
      title: 'RESTful API Development',
      description: 'Developing robust RESTful APIs for seamless communication between client applications and server-side logic.',
      image: 'api-service.jpg'
    },
    {
      title: 'Real-Time Data UI',
      description: 'Designing and developing user interfaces for displaying real-time data, enhancing user engagement and visualization.',
      image: 'realtime-service.jpg'
    },
    {
      title: 'Google Cloud Deployment',
      description: 'Deploying scalable applications on Google Cloud, ensuring high availability and performance.',
      image: 'cloud-service.jpg'
    },
    {
      title: 'Big Data Filtering Tools',
      description: 'Creating tools to efficiently filter and process large datasets, enhancing data analysis capabilities.',
      image: 'bigdata-service.jpg'
    },
    {
      title: 'Web Crawlers in PHP',
      description: 'Developing web crawlers using PHP to scrape and aggregate data from various websites for analysis.',
      image: 'webcrawler-service.jpg'
    },
    {
      title: 'Analytical Dashboard Development',
      description: 'Building analytical dashboards for project managers to monitor and analyze project metrics and performance.',
      image: 'dashboard-service.jpg'
    },
    {
      title: 'URL and Web Analysis',
      description: 'Performing comprehensive URL and web analysis to improve SEO and web performance.',
      image: 'webanalysis-service.jpg'
    },
    {
      title: 'Bank Management Systems',
      description: 'Developing management systems for banks to efficiently manage customer data and transactions.',
      image: 'bankservice-service.jpg'
    },
    {
      title: 'Stock Trading Web Applications',
      description: 'Creating web applications for banks to facilitate the buying and selling of stocks, enhancing user experience and transaction efficiency.',
      image: 'stocktrading-service.jpg'
    }
  ];

  return (
    <div className="service">
      <h1>Services</h1>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <img src={`./assets/${service.image}`} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
