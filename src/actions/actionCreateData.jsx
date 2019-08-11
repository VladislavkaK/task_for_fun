import * as types from '../utils/constans';

export const actionCreateData = (title) => {

    return {
        type: types.CREATE_DATA_SUCCESS,
        title
    }
}