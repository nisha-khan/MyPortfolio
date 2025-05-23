import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import '../Portfolio/portfolio.css';


// Assets
import leftArrow from '../../../assets/images/left.png';
import rightArrow from '../../../assets/images/right.png';
import p1 from '../../../assets/images/p1.png';
import p2 from '../../../assets/images/p2.png';
import p3 from '../../../assets/images/p3.png';
import p4 from '../../../assets/images/p4.png';
import p5 from '../../../assets/images/p5.png';



const portfolioItems = [
  { 
    id: 1, 
    image: p1, 
    title: "SM DesignWorks", 
    content: "Developed a modern, responsive one-page WordPress portfolio site optimized for SEO to attract clients. Integrated custom forms, gallery, and smooth navigation for enhanced UX and engagement." 
  },
  { 
    id: 4, 
    image: p4, 
    title: " Author Sphere", 
    content: "Created secure researcher and sponsor dashboards with real-time chat, encrypted data storage, and admin-level CRUD operations. Built a recommendation system using Python (TF-IDF & cosine similarity) to match research papers with sponsor interests." 
  },
  { 
    id: 3, 
    image: p3, 
    title: "SA Associates", 
    content: "Built a responsive MERN-stack web app with a modern UI, secure admin dashboard, and fast, cross-device performance. Wrote SEO-optimized copy and blogs, integrated RESTful APIs, and ensured smooth content management and scalability." 
  },
  { 
    id: 2, 
    image: p2, 
    title: "2D Pirate Jump", 
    content: "Created Pirate Jump, a cross-platform 2D platformer with 30 thrilling levels, responsive controls, and vibrant animations. Built in Unity with advanced graphics, smooth input handling, and optimized performance for PC, Mac, iOS, and Android." 
  },
  { 
    id: 5, 
    image: p5, 
    title: "Rehnuma ngo", 
    content: "Built a full-stack NGO platform with donation, volunteer signup, and admin dashboard features — enhancing engagement and streamlining event/content management." 
  },
  // Add remaining projects...
];

const PortfolioSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const { ref: carouselRef, inView: carouselInView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1 
  });

  const total = portfolioItems.length;
  const prevIndex = (currentIndex - 1 + total) % total;
  const nextIndex = (currentIndex + 1) % total;

  const handleNavigation = (direction) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => setAnimating(false), 500);
    setCurrentIndex(prev => (prev + direction + total) % total);
  };

  const handleTouch = {
    start: (e) => e.targetTouches[0].clientX,
    move: (e) => e.targetTouches[0].clientX,
    end: (start, end) => {
      if (!start || !end) return;
      const diff = start - end;
      if (Math.abs(diff) > 5) handleNavigation(diff > 5 ? 1 : -1);
    }
  };

  return (
    <section id="portfolio" className="portfolio-section" ref={carouselRef}>
      <h2 className={`portfolio-heading ${carouselInView ? 'fade-in delay-1' : ''}`}>
        What I've Done so far
      </h2>

      <div className={`portfolio-carousel ${carouselInView ? 'fade-in delay-2' : ''}`}
        onTouchStart={(e) => handleTouch.start(e)}
        onTouchMove={(e) => handleTouch.move(e)}
        onTouchEnd={(e) => handleTouch.end(handleTouch.start(e), handleTouch.move(e))}
      >
        <div className="carousel-inner-wrapper">
          <div className="carousel-inner">
            <div className={`portfolio-item prev ${animating ? 'carousel-transition' : ''}`}>
              <div className="portfolio-image-container">
                <img src={portfolioItems[prevIndex].image} alt={portfolioItems[prevIndex].title} />
              </div>
            </div>

            <div className={`portfolio-item active ${animating ? 'carousel-transition active-animate' : ''}`}>
  <Link to={`/projects`} className="portfolio-link">
    <div className="portfolio-image-container">
      <img src={portfolioItems[currentIndex].image} alt={portfolioItems[currentIndex].title} />
    </div>
  </Link>
</div>
            <div className={`portfolio-item next ${animating ? 'carousel-transition' : ''}`}>
              <div className="portfolio-image-container">
                <img src={portfolioItems[nextIndex].image} alt={portfolioItems[nextIndex].title} />
              </div>
            </div>
          </div>
        </div>

        <button className="nav-button prev-button" onClick={() => handleNavigation(-1)}>
          <img src={leftArrow} alt="Previous" />
        </button>
        <button className="nav-button next-button" onClick={() => handleNavigation(1)}>
          <img src={rightArrow} alt="Next" />
        </button>
      </div>

      <div className={`portfolio-text-container ${carouselInView ? 'fade-in delay-3' : ''}`}>
        <h3 key={portfolioItems[currentIndex].title} className="fade-in-text">
          {portfolioItems[currentIndex].title}
        </h3>
        <p key={portfolioItems[currentIndex].content} className="fade-in-text-p">
          {portfolioItems[currentIndex].content}
        </p>
      </div>

      <div className={`fade-in delay-4`} style={{ textAlign: "center" }}>
        <Link to="/projects" className="btn-primary">View All Projects</Link>
      </div>
    </section>
  );
};

export default PortfolioSlider;