import axios, { AxiosInstance } from 'axios';

export const httpService: AxiosInstance = axios.create({
	baseURL: 'https://fakestoreapi.com/',
	timeout: 30000
});