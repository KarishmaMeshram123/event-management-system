import axios from "axios";

const instance = axios.create({
  baseURL: "http://10.72.57.127:8080"
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default instance;
