const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imageUrl: { // Thumbnail
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  description: { 
    type: String,
    required: true,
  },
  images: { // (Gallery)
    type: [String], // Array of image URLs
    required: true,
  },
  videos: {
    type: [String],
    default: []
  }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
