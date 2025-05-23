import '../../Home/Hero/Hero.css';
import whatsapp from '../../../assets/images/whatsapp.png';
import github from '../../../assets/images/git.png';
import linkedinIcon from '../../../assets/images/ln.png';
import InstagramIcon from '../../../assets/images/insta.png';

function Socials() {
  return (
    <section className="socials">
      <div className="social-icons">
        <a href="https://github.com/nisha-khan/" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="Github Icon" />
        </a>
        <a href="https://www.linkedin.com/in/nishakhan02/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="LinkedIn Icon" />
        </a>
        <a href="https://wa.me/923365588336" target="_blank" rel="noopener noreferrer">
          <img src={whatsapp} alt="Whatsapp icon" />
        </a>
        <a href="https://www.instagram.com/nishakhann02/" target="_blank" rel="noopener noreferrer">
          <img src={InstagramIcon} alt="Instagram icon" />
        </a>
      </div>
    </section>
  );
}

export default Socials;
