import axios from 'axios';

const urlInstance = axios.create({
    baseURL: 'https://burgerbuilderhere.firebaseio.com/'
});

export default urlInstance;