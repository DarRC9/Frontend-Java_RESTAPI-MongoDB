import axios from 'axios';

// export const axiosInstance = axios.create({
//     baseURL: 'http://localhost:3000',
//     headers: {"ngrok-skip-browser-warning": "true"}
// });

export default axios.create({
    baseURL: 'http://localhost:3000',
    // headers: {"ngrok-skip-browser-warning": "true"}
});