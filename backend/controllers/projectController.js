const Project = require('../models/project');

const createProject = async (req, res) => {
  try {
    const { title, category, description } = req.body;
    
    // Handle file uploads
    const thumbnailImage = req.files['image'] ? `/uploads/${req.files['image'][0].filename}` : '';
    const galleryImages = req.files['images'] ? req.files['images'].map(file => `/uploads/${file.filename}`) : [];
    const projectVideos = req.files['videos'] ? req.files['videos'].map(file => `/uploads/${file.filename}`) : [];

    const newProject = new Project({
      title,
      category: category.trim().toLowerCase(),
      description,
      imageUrl: thumbnailImage,
      images: galleryImages,
      videos: projectVideos // Add videos field
    });

    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    console.error('Failed to create project', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    console.error('Failed to fetch projects', error);
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteProject = async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Project deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete project', error });
  }
};

const updateProject = async (req, res) => {
  try {
    const projectId = req.params.id;
    const existingProject = await Project.findById(projectId);

    if (!existingProject) {
      return res.status(404).json({ message: 'Project not found' });
    }

    const updateData = {
      title: req.body.title || existingProject.title,
      category: (req.body.category || existingProject.category).trim().toLowerCase(),
      description: req.body.description || existingProject.description,
      imageUrl: existingProject.imageUrl,
      images: existingProject.images,
      videos: existingProject.videos // Preserve existing videos
    };

    // Handle new thumbnail
    if (req.files?.['image']) {
      updateData.imageUrl = `/uploads/${req.files['image'][0].filename}`;
    }

    // Handle new gallery images
    if (req.files?.['images']) {
      updateData.images = req.files['images'].map(file => `/uploads/${file.filename}`);
    }

    // Handle new videos
    if (req.files?.['videos']) {
      updateData.videos = [
        ...existingProject.videos,
        ...req.files['videos'].map(file => `/uploads/${file.filename}`)
      ];
    }

    const updatedProject = await Project.findByIdAndUpdate(
      projectId,
      updateData,
      { new: true, runValidators: true }
    );

    res.status(200).json(updatedProject);
  } catch (error) {
    console.error('Update error:', error);
    res.status(500).json({ message: 'Failed to update project', error: error.message });
  }
};

module.exports = { getProjects, createProject, deleteProject, updateProject };