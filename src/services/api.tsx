import axios from 'axios';

export const baseURL = `/`;

const API = axios.create({ baseURL });
export default API;
