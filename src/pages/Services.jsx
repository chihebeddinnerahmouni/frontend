import React, { useState } from 'react'
import '../App.css';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [visibleServices, setVisibleServices] = useState(3); // Initial number of visible services


  const doctorServices = [
    // Existing services
    { name: 'General Checkup', description: 'A general health checkup.', contact: '123-456-7890', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVCKXyfHKLzFiV6n4ZcKzEMtWZAY7ycd8MoLzdFyFC2g&s' },
    { name: 'Cardiology Consultation', description: 'Consultation with a heart specialist.', contact: '123-456-7890', image: 'https://wp02-media.cdn.ihealthspot.com/wp-content/uploads/sites/456/2021/07/iStock-1266489306.jpg' },
    { name: 'Dermatology Consultation', description: 'Consultation for skin-related issues.', contact: '123-456-7890', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLsOa3fdFvzZTm4bywLwydluW2iXRAXrXEdbKQO9aR2Q&s' },
    { name: 'Orthopedic Consultation', description: 'Consultation for bone and joint issues.', contact: '123-456-7890', image: 'https://www.gmc-uk.org/-/media/gmc-site/home-and-landing-pages/landing-pages/doctor-support-service.jpg' },
    { name: 'Pediatric Consultation', description: 'Consultation for child health issues.', contact: '123-456-7890', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX0XbeLiIgbCq5M4FodxkaU7s269_xTOh1JDyIGe19Jw&s' },
    { name: 'General Checkup', description: 'A general health checkup.', contact: '123-456-7890', image: 'https://www.flyingdoctorsnigeria.com/wp-content/uploads/2023/09/air-ambulance.png' },
    { name: 'Diagnostic Services', description: 'Consultation with a heart specialist.', contact: '123-456-7890', image: 'https://dhaalaska.com/wp-content/uploads/2018/07/sm17945_MR_07@2x.png' },
    { name: 'Rehabilitation Services', description: 'Consultation for skin-related issues.', contact: '123-456-7890', image: 'https://sa1s3optim.patientpop.com/filters:format(webp)/assets/production/practices/d579fc76dcb92220fff873356a8e7461ea53062f/images/2712267.jpg' },
    { name: 'Emergency Care', description: 'Consultation for bone and joint issues.', contact: '123-456-7890', image: 'https://dhaalaska.com/wp-content/uploads/2020/08/patient_forms-1024x683.jpg' },
    { name: 'Specialized Care', description: 'Consultation for child health issues.', contact: '123-456-7890', image: 'https://raincrossmedicalgroup.com/wp-content/uploads/2023/09/225A7965-1024x683.jpg' },
    { name: 'Specialty Care', description: 'Consultation for mental health issues.', contact: '123-456-7890', image: 'https://doctorsservices.ca/wp-content/uploads/2024/02/DSG-uninsured-services-Feb2024-300x200.jpg' },
    { name: 'RADIO X', description: 'Consultation for mental health issues.', contact: '123-456-7890', image: 'https://www.insightlifecare.com/preventative%20care.png' },
    // Additional services
    // Add more services as needed, using the same format
  ];

  const filteredServices = doctorServices.filter(service =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleShowMore = () => {
    setVisibleServices(prevVisibleServices => prevVisibleServices + 3); // Show 3 more services
  }
  const handleClick = (service) => {
    alert(`You clicked on ${service.name}`);
}

return (
  
  <div className="services">
    <h1>Doctor Services</h1>
    <input
      type="text"
      className="search-box"
      placeholder="Search services..."
      onChange={event => setSearchTerm(event.target.value)}
    />
    <div className="services-container">
      {filteredServices.map((service, index) => (
        <div key={index} className="service-card">
          <img src={service.image} alt={service.name} />
          <h2>{service.name}</h2>
          <p>{service.description}</p>
          <p className="contact">{service.contact}</p>
          <button onClick={() => handleClick(service)} className="click-box">Click Me</button>
        </div>
      ))}
    </div>
    {visibleServices < filteredServices.length && (
        <button onClick={handleShowMore}>Show More</button>
      )}
  </div>
)
};
export default Services;