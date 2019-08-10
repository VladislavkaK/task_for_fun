function GET_DATA_RECEIVED(state, action) {
    let data, length, success;

    if (action.response.data) {
        data = action.response.data.data;
        length = action.response.data.length;
        success = action.response.data.success;
    }

    return {
        ...state,
        data,
        length,
        success
    }
}

function GET_DATA_ERROR(state, action) {
    const error = action.error;
    return {...state, error}
}

export {
    GET_DATA_RECEIVED,
    GET_DATA_ERROR
}