import axios from 'axios';

const databaseAxios = axios.create({
    baseURL : "https://unimate-3f190-default-rtdb.firebaseio.com/",
});

export default databaseAxios;