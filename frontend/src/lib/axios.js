import axios from 'axios';
import { getToken } from '@clerk/react';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
    withCredentials: true,
});

axiosInstance.interceptors.request.use(async (config) => {
    try {
        const token = await getToken();

        if (token) {
            config.headers = config.headers || {};
            config.headers.Authorization = `Bearer ${token}`;
        }
    } catch (error) {
        console.warn('Unable to read Clerk token for API request', error);
    }

    return config;
});

export default axiosInstance;