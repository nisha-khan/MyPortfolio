import axios from 'axios';

const API_URL = 'http://localhost:5000/api/projects';

export const createProject = (formData) => axios.post(API_URL, formData);
export const getProjects = () => axios.get(API_URL);
export const deleteProject = (id) => axios.delete(`${API_URL}/${id}`);
export const updateProject = (id, formData) => axios.put(`${API_URL}/${id}`, formData);