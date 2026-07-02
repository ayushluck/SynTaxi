import axios from 'axios';

const getClerkToken = async () => {
    if (typeof window === 'undefined') return null;

    try {
        const clerk = window.Clerk;
        if (!clerk?.session) return null;

        return await clerk.session.getToken();
    } catch (error) {
        console.warn('Unable to read Clerk token for API request', error);
        return null;
    }
};

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
    withCredentials: true,
});

axiosInstance.interceptors.request.use(async (config) => {
    const token = await getClerkToken();

    if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

export default axiosInstance;