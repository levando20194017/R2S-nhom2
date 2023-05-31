import axios, { AxiosResponse } from 'axios';
import _ from 'lodash';
// import config from './config';

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    withCredentials: true
});

instance.interceptors.response.use(
    (response: AxiosResponse<any>) => {
        const { data } = response;
        return response.data;
    }
);

export default instance;