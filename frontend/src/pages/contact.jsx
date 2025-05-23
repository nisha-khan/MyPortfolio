import Hero from "../Components/Home/Hero/Hero";
import Socials from "../Components/Home/Socials/Socials";
import Contact from "../Components/Home/Contact/Contact";
import FreelanceSection from "../Components/Home/Freelance/Freelance";
const contactpage = () => {

    
    return (
        <div>
            <Socials/>
            <Hero heading="CONTACT" showMiniTitle={false} showTagline={false} />
            <FreelanceSection />
            <Contact/>
            

            </div>
    );
};

export default contactpage;