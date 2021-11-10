import axios from 'axios';

const databaseAxios = axios.create({
    baseURL : "http://localhost:4000/",
});

export default databaseAxios;