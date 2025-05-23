// Hero.jsx
import './Hero.css';

function Hero({ heading = "NISHA KHAN", showMiniTitle = true, showTagline = true }) {
  return (
    <section className="hero">
      <div className="hero-content">
        {showMiniTitle && <span className="mini-title">I AM</span>}
        <h1>{heading}</h1>
        {showTagline && (
          <p className="tagline">
            A future Ethical hacker haha <br /> A Software Developer
          </p>
        )}
      </div>
    </section>
  );
}

export default Hero;
