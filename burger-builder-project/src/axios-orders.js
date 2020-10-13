import axios from 'axios';

const urlInstance = axios.create({
    baseURL: 'https://buildmeburger.firebaseio.com/'
});

export default urlInstance;