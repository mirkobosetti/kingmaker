import axios from 'axios'
import router from './router'
import { toast } from "vue3-toastify";

const onFullfilled = (response) => response

const onRejected = (error) => Promise.reject(error)

export const api = axios.create({
  withCredentials: true,
  baseURL: "http://192.168.1.10:9996/"
})



api.interceptors.response.use(onFullfilled, onRejected)

// Add the necessary headers to the API response
api.interceptors.response.use(
  (response) => {
    // response.headers['Access-Control-Allow-Origin'] = '*';
    // response.headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS';
    // response.headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept, Authorization';
    return response;
  },
  (error) => {
    console.error(error);
    toast.error(`Network error calling /${error.config.url}`);
    return Promise.reject(error);
  }
);
