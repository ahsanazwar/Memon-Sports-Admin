const basicRoute =
	process.env.serviceURL || 'http://localhost:3000/';
import axios from 'axios';

const instance = axios.create({
	baseURL: basicRoute,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	  }
});

export default instance;
