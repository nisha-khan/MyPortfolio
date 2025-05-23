import React from 'react';
import { useInView } from 'react-intersection-observer';
import './Resume.css';
import cvPDF from '../../assets/cv.pdf';

const ResumePage = () => {
    const { ref: workRef, inView: workInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: eduRef, inView: eduInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: languagesRef, inView: languagesInView } = useInView({ triggerOnce: true, threshold: 0.2 });
    const { ref: certificateRef, inView: certificateInView } = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
        <div className="resume-container">
            {/* Work Experience Section */}
            <section className="resume-section" ref={workRef}>
                <h2 >Work Experience</h2>
                <div className="resume-cards-container">
                    <div className={`resume-card ${workInView ? 'fade-in delay-2' : ''}`}>
                        <h3>Software Developer & Technical Writer (Freelance)</h3>
                        <span className="duration">Nov 2022 – Present</span>
                        <ul>
                            <li>Delivered 20+ software solutions for 10+ global clients</li>
                            <li>Wrote 100+ technical content pieces with 98% client satisfaction</li>
                            <li>Integrated AI/ML to boost efficiency by 20%</li>
                            <li>Handled end-to-end project management</li>
                        </ul>
                    </div>

                    <div className={`resume-card ${workInView ? 'fade-in delay-3' : ''}`}>
                        <h3>Game Developer Intern – FRAG Games</h3>
                        <span className="duration">Aug – Oct 2022</span>
                        <ul>
                            <li>Co-developed a Unity-based simulation game</li>
                            <li>Built 10+ mechanics and interactive environments</li>
                        </ul>
                    </div>

                    <div className={`resume-card ${workInView ? 'fade-in delay-4' : ''}`}>
                        <h3>Content Writer & Community Manager – SM Design Works</h3>
                        <span className="duration">2019 – 2022</span>
                        <ul>
                            <li>Produced 1,500+ content pieces tailored to client needs</li>
                            <li>Increased engagement by 30% via social media management</li>
                            <li>Provided customer service and ensured brand consistency</li>
                        </ul>
                    </div>
                </div>
            </section>


            {/* Education Section */}

            <section className="resume-section" ref={eduRef}>
                <h2 >Education</h2>
                <div className="resume-cards-container">
                    <div className={`resume-card ${eduInView ? 'fade-in delay-2' : ''}`}>
                        <h3>Bachelors in Computer Science</h3>
                        <span className="duration">Mar 2021 – Feb 2025</span>
                        <ul>
                            <li>University of Central Punjab</li>
                            <li>CGPA: 3.72</li>
                        </ul>
                    </div>

                    <div className={`resume-card ${eduInView ? 'fade-in delay-3' : ''}`}>
                        <h3>Intermediate (ICS)</h3>
                        <span className="duration">Mar 2017 – Feb 2019</span>
                        <ul>
                            <li>Kinnaird College for Women University Lahore</li>
                            <li>Grade Achieved 80.09%</li>
                        </ul>
                    </div>

                    <div className={`resume-card ${eduInView ? 'fade-in delay-4' : ''}`}>
                        <h3>Matriculation</h3>
                        <span className="duration">Mar 2015 – Feb 2017</span>
                        <ul>
                            <li>Himayat-e-Islam Higher Secondary School</li>
                            <li>Grade Achieved: 93.56%</li>
                        </ul>
                    </div>
                </div>
            </section>



            {/* Skills Section */}
            <section className="resume-section" ref={skillsRef}>
            <h2 >Skills</h2>
                <div className="resume-skills-row">
                <div className={`resume-card skill-card ${skillsInView ? 'fade-in delay-2' : ''}`}>
                        <h3>Technical Skills</h3>
                        <p>
                            Programming, Game Development, Backend Development,<br />
                            Research & Technical Writing, AI/ML Integration
                        </p>
                    </div>
                    <div className={`resume-card skill-card ${skillsInView ? 'fade-in delay-3' : ''}`}>
                        <h3>Digital & Soft Skills</h3>
                        <p>
                            MS Office Suite (Excel, Word, PowerPoint),<br />
                            Virtual Assistance, Communication, Time Management,<br />
                            Social Media Management
                        </p>
                    </div>
                </div>
            </section>

            {/* Certification Section */}

            <section className="resume-section" ref={certificateRef}>
            <h2>Certifications</h2>
                <div className="resume-cards-container">
                <div className={`resume-card  ${certificateInView? 'fade-in delay-2' : ''}`}>
                        <h3>Foundations of Cybersecurity</h3>
                        <span className="duration"> <a href="https://www.coursera.org/account/accomplishments/verify/KODVLONBDRXD" target="_blank" rel="noopener noreferrer">View Certificate</a></span>
                        <ul>
                            <li>Grade Achieved: 96.36%</li>
                        </ul>
                    </div>

                    <div className={`resume-card  ${certificateInView? 'fade-in delay-3' : ''}`}>
                        <h3>Play It Safe: Manage Security Risks</h3>
                        <span className="duration"> <a href="https://www.coursera.org/account/accomplishments/verify/AJ8762190S4W" target="_blank" rel="noopener noreferrer">View Certificate</a></span>
                        <ul>
                            <li>Grade Achieved: 100%</li>
                        </ul>
                    </div>
                </div>
            </section>


            {/* Languages Section */}
            <section className="resume-section" ref={languagesRef}>
            <h2 >Languages</h2>
                <div className="resume-cards-container">
                <div className={`resume-card  ${languagesInView ? 'fade-in delay-2' : ''}`}>
                        <ul>
                            <li><strong>Urdu</strong>  – Native </li>
                            <li><strong>English (ICS)</strong> – C2 level </li>
                        </ul>
                    </div>
                </div>
            </section>


            <div className="download-container">
                <a
                    href={cvPDF}
                    download="Nisha_Khan_CV.pdf"
                    className="download-button"
                >
                    Download Resume
                </a>
            </div>
        </div>
    );
};

export default ResumePage;
