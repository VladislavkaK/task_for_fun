import { API_MAP } from '../utils/api';
import axios from 'axios';

export const getDataService = () => {
    const GET_DATA = API_MAP.GET_DATA_API;

    return axios.get(GET_DATA)
        .then(response => {
            return response
        })
        .catch(error => {
            return error;
        })
}