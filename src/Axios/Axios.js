import axios from 'axios';

const apiUrl = 'http://localhost:5000/'
const  accessToken =  localStorage.getItem('token');

 const authAxios = axios.create({
    baseURL: apiUrl,
    headers:{
        "token" : ` ${accessToken}`
    },
});

export default authAxios;