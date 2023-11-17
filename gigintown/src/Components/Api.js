// api.js

import axios from 'axios';

const Api = axios.create({
  baseURL: 'http://localhost:8000/api',
});

Api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refreshToken");
        const refreshResponse = await axios.post('http://localhost:8000/api/token/refresh/', {
          refresh: refreshToken,
        });

        const newAuthToken = refreshResponse.data.access;
        localStorage.setItem('authToken', newAuthToken);

        originalRequest.headers.Authorization = `JWT ${newAuthToken}`;
        return Api(originalRequest);
      } catch (refreshError) {
        console.error('Error refreshing token:', refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default Api;