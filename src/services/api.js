import React from 'react';
import axios from 'axios';

export const key = '2189bfb2d641b74f4b8fc0b41bebbcab39e4bdc3';

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers: {
        'Authorization': `Bearer ${key}`,
        'Content-Type': 'application/json'
    }
})

export default api;