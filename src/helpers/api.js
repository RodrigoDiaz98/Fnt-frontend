import axios from 'axios';

const endpoints = {
    development: 'http://127.0.0.1:46077',
};

export const api = axios.create({
    baseURL: endpoints['development'],
    timeout: 20000,
});
