import { API_MAP } from '../utils/api';
import axios from 'axios';

export const createDataService = (request) => {
    const CREATE_DATA = API_MAP.CREATE_DATA_API;

    const title = request.title;

    return axios.post(CREATE_DATA, { title: title })
        .then(response => {
            return response
        })
        .catch(error => {
            return error;
        })
}