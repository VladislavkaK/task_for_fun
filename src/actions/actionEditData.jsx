import * as types from '../utils/constans';

export const actionEditData = (id, title) => {

    return {
        type: types.EDIT_DATA_SUCCESS,
        id,
        title
    }
}