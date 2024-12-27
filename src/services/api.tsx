import axios from 'axios';

export const baseURL = `/src/core/data`;

const API = axios.create({ baseURL });
export default API;
