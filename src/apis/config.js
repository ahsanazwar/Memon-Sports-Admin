const basicRoute =
	process.env.serviceURL || 'http://localhost:3000/';
import axios from 'axios';

const instance = axios.create({
	baseURL: basicRoute,
});

export default instance;
