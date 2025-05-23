import React from 'react';
import { useInView } from 'react-intersection-observer';

import '../Freelance/Freelance.css';

const FreelanceSection = () => {

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="wrapper">
    <section ref={ref} className={`freelance-section ${inView ? 'fade-in-section' : ''}`}>
      <h2 className={`section-title ${inView ? 'fade-in delay-1' : ''}`}>Hire Me As A Freelancer</h2>
      <p className={`section-subtitle ${inView ? 'fade-in delay-2' : ''}`}>
      You can find me on multiple freelancing platforms. <br/> Choose the one that works best for you to get started.
      </p>

      <div className="platforms">
        <div className={`platform ${inView ? 'fade-in delay-3' : ''}`}>
          <h3 className="platform-name">FIVERR</h3>
          <button className="btn-primary">HIRE ME</button>
        </div>
        <div className={`platform ${inView ? 'fade-in delay-4' : ''}`}>
          <h3 className="platform-name">UPWORK</h3>
          <button className="btn-primary">HIRE ME</button>
        </div>
        <div className={`platform ${inView ? 'fade-in delay-5' : ''}`}>
          <h3 className="platform-name">GURU</h3>
          <button className="btn-primary">HIRE ME</button>
        </div>
      </div>
    </section>
    </div>
  );
};

export default FreelanceSection;
