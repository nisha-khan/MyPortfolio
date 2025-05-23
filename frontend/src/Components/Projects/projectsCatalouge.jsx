import React, { useState, useEffect } from 'react';
import { getProjects } from '../../services/projectService';
import './projectsCatalouge.css';
import ProjectModal from "./ProjectModal";
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();
  const isMobile = window.innerWidth <= 768;

  // Fetch projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjects();
        setProjects(response.data);
        setError('');
      } catch (error) {
        console.error('Error fetching projects', error);
        setError('Failed to load projects. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Normalize and get unique categories
  const categories = [
    'all',
    ...new Set(
      projects.map(p => 
        p.category?.trim().toLowerCase()
      ).filter(c => c)
    )
  ];

  // Format category for display
  const formatCategory = (category) => {
    if (!category) return '';
    return category.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Filter projects with normalized categories
  const filteredProjects = projects.filter(project => {
    const normalizedProjectCategory = project.category?.trim().toLowerCase();
    return (
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'all' || 
       normalizedProjectCategory === selectedCategory)
    );
  });

  const ProjectCard = ({ project }) => (
    <div className="project-item" onClick={() => {
      setSelectedProject(project);
    }}>
      <div className="project-card">
        <img 
          src={project.imageUrl.startsWith('http') ? project.imageUrl : `http://localhost:5000${project.imageUrl}`}
          alt={project.title} 
          className="project-image" 
        />
        <div className="overlay">
          <h2 className="project-title">{project.title}</h2>
        </div>
        <div className="project-category">
          {formatCategory(project.category)}
        </div>
      </div>
    </div>
  );

  return (
    <div className="container">
      <div className="search-filter-container">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="full-width-search"
        />
        
        <div className="filter-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`btn-primary filter-button ${selectedCategory === cat ? 'active' : ''}`}
            >
              {formatCategory(cat)}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="loading-message">Loading projects...</div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : filteredProjects.length === 0 ? (
        <div className="no-projects-message">No projects found matching your criteria</div>
      ) : (
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project._id}
              project={project}
            />
          ))}
        </div>
      )}

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
};

export default Projects;