import * as types from '../utils/constans';

export const actionDeleteData = (id) => {

    return {
        type: types.DELETE_DATA_SUCCESS,
        id
    }
}