import axios from 'axios';

const axiosInstance = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Content-Type': 'application/json',
    },
    baseURL: 'https://random-data-api.com/api', // baseUrl
});

export default axiosInstance;