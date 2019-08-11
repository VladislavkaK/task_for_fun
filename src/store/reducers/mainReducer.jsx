import * as types from '../../utils/constans';
import { 
    GET_DATA_RECEIVED, 
    GET_DATA_ERROR, 
    DELETE_DATA_RECEIVED, 
    DELETE_DATA_ERROR,
    CREATE_DATA_RECEIVED,
    CREATE_DATA_ERROR,
    EDIT_DATA_RECEIVED,
    EDIT_DATA_ERROR
} from './getDataReducer';

export default function(state = [], action) {

    switch(action.type) {
        case types.GET_DATA_RECEIVED:
            return GET_DATA_RECEIVED(state, action);
        case types.GET_DATA_ERROR:
            return GET_DATA_ERROR(state, action);
        case types.DELETE_DATA_RECEIVED:
            return DELETE_DATA_RECEIVED(state, action);
        case types.DELETE_DATA_ERROR:
            return DELETE_DATA_ERROR(state, action);
        case types.CREATE_DATA_RECEIVED:
            return CREATE_DATA_RECEIVED(state, action);
        case types.CREATE_DATA_ERROR:
            return CREATE_DATA_ERROR(state, action);    
        case types.EDIT_DATA_RECEIVED:
            return EDIT_DATA_RECEIVED(state, action);
        case types.EDIT_DATA_ERROR:
            return EDIT_DATA_ERROR(state, action);    
        default:
            return state;
    }
}