import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  // Extract skills and clean description
  const extractContent = (description) => {
    const skillsRegex = /##skills##(.*?)(##|$)/s;
    const match = description.match(skillsRegex);
    const skills = match ? match[1].split(',').map(s => s.trim()) : [];
    const cleanDescription = description.replace(skillsRegex, '').trim();
    return { skills, cleanDescription };
  };

  const { skills, cleanDescription } = extractContent(project.description);

  // Markdown formatting for description
  const createMarkup = (html) => {
    const rawMarkup = marked(html);
    return { __html: DOMPurify.sanitize(rawMarkup) };
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.4 }}
      >
        <button className="modal-close" onClick={onClose}>X</button>
        <h2>{project.title}</h2>
        <div className="modal-grid">
          <div className="modal-left">
            <p className="modal-category">• {project.category}</p>

            {/* Clean Description */}
            <div className="modal-description"
              dangerouslySetInnerHTML={createMarkup(cleanDescription)} />

            {/* Skills Section */}
            {skills.length > 0 && (
              <div className="skills-section">
                <h3>Skills & Technologies</h3>
                <div className="skills-container">
                  {skills.map((skill, index) => (
                    <span key={index} className="skill-capsule">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Media Grid */}
          <div className="modal-right">
            <div className="media-grid">
              {project.images?.map((img, index) => (
                <img key={`img-${index}`}
                  src={`${process.env.REACT_APP_API_URL}${img}`}
                  alt="Project"
                  className="media-item" />
              ))}
              {project.videos?.map((video, index) => (
                <video key={`vid-${index}`} controls className="media-item">
                  <source src={`${process.env.REACT_APP_API_URL}${video}`} type="video/mp4" />
                </video>
              ))}
            </div>
          </div>
        </div>
        <div className='btn-class'>
              <Link to="/contact" className="btn-primary">Hire me now</Link>
            </div>
      </motion.div>

 
    </div>
  );
};

export default ProjectModal;