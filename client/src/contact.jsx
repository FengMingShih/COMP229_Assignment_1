/*
File name: contact.jsx
Student's Name: Feng Ming Shih
StudentID: 301399823
Date: 2024-05-25
*/
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './contact.css';
export default function Contact() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        navigate('/');
    };

    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
            <div>
                <label>First Name:</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
            </div>
            <div>
                <label>Contact Number:</label>
                <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />
            </div>
            <div>
                <label>Email Address:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Message:</label>
                <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
            </form>
        </div>
    );
}
    