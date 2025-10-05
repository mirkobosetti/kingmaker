import axios from 'axios'
import { toast } from "vue3-toastify";

export const api = axios.create({
  withCredentials: true,
  baseURL: ""
  // baseURL: "https://express-kingmaker.onrender.com/"
});
