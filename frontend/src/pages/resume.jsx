import ResumePage from "../Components/Resume/Resume";
import Socials from "../Components/Home/Socials/Socials";
import Hero from "../Components/Home/Hero/Hero";
const Resume = () => {

    
    return (
        <div>
            <Socials/>
            <Hero heading="RESUME" showMiniTitle={false} showTagline={false} />
            <ResumePage/>


            </div>
    );
};

export default Resume;