import { put, call } from 'redux-saga/effects';
import { editDataService } from '../../services/editDataService';
import * as types from '../../utils/constans';

export function* workerEditData (payload) {
    try {
        const response = yield call(editDataService, payload);

        const data = {
            response,
            id: payload.id,
            title: payload.title
        }

        yield put({
            type: types.EDIT_DATA_RECEIVED, data
        })
    } catch (error) {
        yield put({
            type: types.EDIT_DATA_ERROR,
            error
        })
    }
}
