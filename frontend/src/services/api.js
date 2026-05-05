import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api', // Adjust in production using env variables
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
