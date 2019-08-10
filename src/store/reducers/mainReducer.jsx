import * as types from '../../utils/constans';
import { GET_DATA_RECEIVED, GET_DATA_ERROR } from './getDataReducer';

export default function(state = [], action) {

    switch(action.type) {
        case types.GET_DATA_RECEIVED:
            return GET_DATA_RECEIVED(state, action);
        case types.GET_DATA_ERROR:
            return GET_DATA_ERROR(state, action);
        case types.DELETE_DATA_RECEIVED:
            const id = action.data.id;
            let isDelete;    
            const data = state.data.filter((data, i) => {
                // если data.id === id, то удаляем значение
                return data.id !== id
            })
            const length = data.length;

            if (action.data.response.data) {
                isDelete = action.data.response.data.success;
            }

            return { ...state, data, length, isDelete }
        case types.DELETE_DATA_ERROR:
            const error = action.error;
            console.log(error)
            return { ...state, error }    
        default:
            return state;
    }
}