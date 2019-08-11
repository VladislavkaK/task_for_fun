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

function DELETE_DATA_RECEIVED(state, action) {
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
}

function DELETE_DATA_ERROR(state, action) {
    const error = action.error;
    return { ...state, error } 
}

function CREATE_DATA_RECEIVED(state, action) {
    const title = action.data.title;
    let success, id;

    if (action.data.response.data) {
        success = action.data.response.data.success;
        id = action.data.response.data.id;
    }
    const data = [...state.data, { id, title }];
    const length = data.length;

    return {
        ...state,
        data: data,
        success,
        length
    }
}

function CREATE_DATA_ERROR(state, action) {
    const error = action.error;
    return { ...state, error } 
}

function EDIT_DATA_RECEIVED(state, action) {
    const title = action.data.title;
    const id = action.data.id;
    let success;

    if (action.data.response.data) {
        success = action.data.response.data.success;
    }

    // Редактирование
    const data = state.data.map((data)=>data.id === id ? {id, title} : data);

    const length = data.length;

    return {
        ...state,
        data,
        success,
        length
    }
}

function EDIT_DATA_ERROR(state, action) {
    const error = action.error;
    return { ...state, error } 
}

export {
    GET_DATA_RECEIVED,
    GET_DATA_ERROR,
    DELETE_DATA_RECEIVED,
    DELETE_DATA_ERROR,
    CREATE_DATA_RECEIVED,
    CREATE_DATA_ERROR,
    EDIT_DATA_RECEIVED,
    EDIT_DATA_ERROR
}