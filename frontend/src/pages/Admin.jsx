import React, { useState, useEffect } from 'react';
import { createProject, getProjects, deleteProject, updateProject } from '../services/projectService';
import './Admin.css';

const AdminPage = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnailImage, setThumbnailImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const [projectVideos, setProjectVideos] = useState([]);


  const fetchProjects = async () => {
    try {
      const res = await getProjects();
      setProjects(res.data);
    } catch (error) {
      console.error('Failed to fetch projects:', error);
    }
  };

  useEffect(() => { fetchProjects(); }, []);

  const handleEditProject = (project) => {
    setEditingProject(project);
    setTitle(project.title);
    setCategory(project.category);
    setDescription(project.description);
  };

  const handleDeleteProject = async (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await deleteProject(projectId);
        alert('Project deleted!');
        fetchProjects();
      } catch (error) {
        alert('Delete failed');
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !category || !description) {
      alert('Please fill all required fields!');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('category', category);
    formData.append('description', description);
    projectVideos.forEach(video => formData.append('videos', video));

    if (thumbnailImage) formData.append('image', thumbnailImage);
    galleryImages.forEach(image => formData.append('images', image));

    try {
      if (editingProject) {
        await updateProject(editingProject._id, formData);
        alert('Project updated successfully!');
      } else {
        if (!thumbnailImage || galleryImages.length === 0) {
          alert('New projects require images!');
          return;
        }
        await createProject(formData);
        alert('Project created!');
      }

      // Reset form
      setTitle('');
      setCategory('');
      setDescription('');
      setThumbnailImage(null);
      setGalleryImages([]);
      setEditingProject(null);
      fetchProjects();

      // Clear file inputs
      document.querySelectorAll('input[type="file"]').forEach(input => input.value = '');
    } catch (error) {
      console.error('Error:', error);
      alert(`Operation failed: ${error.response?.data?.message || error.message}`);
    }
  };

  return (
    <div className="admin-container">
      <h2>{editingProject ? 'Edit Project' : 'Add New Project'}</h2>
      
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Project Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="5"
        />

        <label>Thumbnail Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setThumbnailImage(e.target.files[0])}
        />

        <label>Gallery Images:</label>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => setGalleryImages(Array.from(e.target.files))}
        />

<label>Project Videos:</label>
<input
  type="file"
  accept="video/*"
  multiple
  onChange={(e) => setProjectVideos(Array.from(e.target.files))}
/>

        <button type="submit">
          {editingProject ? 'Save Changes' : 'Create Project'}
        </button>
      </form>

      <h2>Uploaded Projects</h2>
      <div className="projects-list">
        {projects.length === 0 ? (
          <p>No projects uploaded yet.</p>
        ) : (
          projects.map((project) => (
            <div key={project._id} className="project-card">
              <div className="card-content">
                <h3>{project.title}</h3>
                <p className="category">{project.category}</p>
                <img
                  src={`http://localhost:5000${project.imageUrl}`}
                  alt={project.title}
                  className="thumbnail"
                />
                <p className="description">{project.description}</p>
              </div>
              <div className="project-actions">
                <button
                  type="button"
                  onClick={() => handleEditProject(project)}
                  className="edit-btn"
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleDeleteProject(project._id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {editingProject && (
        <div className="cancel-container">
          <button
            type="button"
            onClick={() => setEditingProject(null)}
            className="cancel-button"
          >
            Cancel Edit
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminPage;