import { API_MAP } from '../utils/api';
import axios from 'axios';

export const editDataService = (request) => {
    const EDIT_DATA = API_MAP.EDIT_DATA_API;

    const title = request.title;
    const id = request.id;

    return axios.post(`${EDIT_DATA}/${id}`, { title: title })
        .then(response => {
            return response
        })
        .catch(error => {
            return error;
        })
}