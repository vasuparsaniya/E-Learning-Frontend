import axios from 'axios';
import { REACT_APP_SERVER_URL } from '../config';

const axiosHandler = axios.create({
  baseURL: REACT_APP_SERVER_URL,
  withCredentials: true, //backend we can access cookie
  headers: {
    'Content-Type': 'application/json',
  },
});

export { axiosHandler };
