import Hero from "../Components/Home/Hero/Hero";
import PortfolioSlider from "../Components/Home/Portfolio/portfolio";
import Socials from "../Components/Home/Socials/Socials";
import Services from "../Components/Home/Services/Services";
import Contact from "../Components/Home/Contact/Contact";
import FreelanceSection from "../Components/Home/Freelance/Freelance";
const Home = () => {

    
    return (
        <div>
            <Socials/>
            <Hero/> 
            <Services/>
            <PortfolioSlider/>
            <FreelanceSection/>
            <Contact/>
            

            </div>
    );
};

export default Home;