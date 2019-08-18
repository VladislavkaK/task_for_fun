function GET_DATA_RECEIVED(state, { response }) {
    let data, length, success;

    if (response.data) {
        data = response.data.data;
        length = response.data.length;
        success = response.data.success;
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

function DELETE_DATA_RECEIVED(state, { data: { id, response } }) {
    let isDelete;    
    const data = state.data.filter((data, i) => {
        // если data.id === id, то удаляем значение
        return data.id !== id
    })

    const length = data.length;

    if (response.data) {
        isDelete = response.data.success;
    }

    return { ...state, data, length, isDelete }
}

function DELETE_DATA_ERROR(state, action) {
    const error = action.error;
    return { ...state, error } 
}

function CREATE_DATA_RECEIVED(state, { data: { title, response } }) {
    let success, id;

    if (response.data) {
        success = response.data.success;
        id = response.data.id;
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

function EDIT_DATA_RECEIVED(state, { data: { id, title, response } }) {
    let success;

    if (response.data) {
        success = response.data.success;
    }

    // Редактирование
    const data = state.data.map((data)=> data.id === id ? {id, title} : data);

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