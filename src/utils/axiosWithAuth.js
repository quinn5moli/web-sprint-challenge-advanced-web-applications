import axios from 'axios';
import { BASE_URL } from '.';

const axiosWithAuth = ()=> {
    const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: BASE_URL
    })
}

export default axiosWithAuth;

//Task List:
//1. Complete axiosWithAuth