import Socials from "../Components/Home/Socials/Socials";
import Hero from "../Components/Home/Hero/Hero";
import Projects from "../Components/Projects/projectsCatalouge";
import Contact from "../Components/Home/Contact/Contact";

const ProjectsSection = () => {

    
    return (
        <div>
            <Socials/>
            <Hero heading="PROJECTS" showMiniTitle={false} showTagline={false} />
            <Projects/>
            <Contact/>


            </div>
    );
};

export default ProjectsSection;