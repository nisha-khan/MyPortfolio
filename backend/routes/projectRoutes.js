const express = require('express');
const router = express.Router();
const { getProjects, createProject,updateProject, deleteProject } = require('../controllers/projectController');
const upload = require('../middleware/uploadMiddleware');

router.get('/', getProjects);
router.post(
    '/',
    upload.fields([
      { name: 'image', maxCount: 1 },      // thumbnail
      { name: 'images', maxCount: 10 },    // gallery images (max 10)
    ]),
    createProject
  );

router.delete('/:id', deleteProject);
router.put(
  '/:id',
  upload.fields([
    { name: 'image', maxCount: 1 },    // Thumbnail
    { name: 'images', maxCount: 10 }, // Gallery images
  ]),
  updateProject
);

module.exports = router;
