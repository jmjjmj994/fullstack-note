import axios from 'axios';
const baseUrl = '/api/notes';
//http://localhost:3001/api/notes

const getAll = () => {
  const request = axios.get(baseUrl);
  return request;
};

export const fetches = {
  getAll: getAll,
};
