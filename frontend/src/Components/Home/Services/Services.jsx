import React, { useEffect, useRef, useState } from 'react';
import '../Services/Services.css';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Ethical Hacking",
    description: "Legally probing systems to uncover vulnerabilities and strengthen defenses.",
  },
  {
    title: "Penetration Testing",
    description: "Simulating real-world attacks to evaluate system defenses and resilience.",
  },
  {
    title: "Web Design",
    description: "Creating sleek, modern, and responsive websites.",
  },
  {
    title: "Web Development",
    description: "Full-stack MERN Stack and WordPress development and integrations.",
  },
  {
    title: "Game Development",
    description: "Developing immersive and interactive gaming experiences across platforms",
  },
 
];

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.4
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="services-section" ref={sectionRef}>
      <h2 className={`services-heading ${isVisible ? 'visible' : ''}`}>Here’s What I Do</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div   className={`service-card ${isVisible ? 'visible' : ''}`} 
          key={index}
        >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <div>
        <Link to="/contact" className=" services btn-primary">Hire Me now!</Link>
      </div>
    </section>
  );
};

export default Services;
