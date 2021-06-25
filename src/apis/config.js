const basicRoute =
	process.env.serviceURL || 'https://services.osc-fr1.scalingo.io/';
import axios from 'axios';

const instance = axios.create({
	baseURL: basicRoute,
});

export default instance;
