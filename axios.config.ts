import axios from 'axios'

// const API_URL = 'https://quiz.bojarm.pl/api';
const API_URL = 'https://powerofquizlogin.com.pl/api';

export const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':  'Content-Type, X-Auth-Token, Authorization, Origin',
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
})

