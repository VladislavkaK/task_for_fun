import { put, call } from 'redux-saga/effects';
import { deleteDataService } from '../../services/deleteDataService';
import * as types from '../../utils/constans';

export function* workerDeleteData (payload) {
    try {
        const response = yield call(deleteDataService, payload);

        const data = {
            response,
            id: payload.id
        }

        yield put({
            type: types.DELETE_DATA_RECEIVED, data
        })
    } catch (error) {
        yield put({
            type: types.DELETE_DATA_ERROR,
            error
        })
    }
}
