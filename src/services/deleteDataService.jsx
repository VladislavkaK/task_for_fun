import { API_MAP } from '../utils/api';
import axios from 'axios';

export const deleteDataService = (request) => {
    const GET_DATA = API_MAP.DELETE_DATA_API;

    const id = request.id;

    return axios.delete(`${GET_DATA}/${id}`)
        .then(response => {
            return response
        })
        .catch(error => {
            return error;
        })
}