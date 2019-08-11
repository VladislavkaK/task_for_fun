import { put, call } from 'redux-saga/effects';
import { createDataService } from '../../services/createDataService';
import * as types from '../../utils/constans';

export function* workerCreateData (payload) {
    try {
        const response = yield call(createDataService, payload);

        const data = {
            response,
            title: payload.title
        }

        yield put({
            type: types.CREATE_DATA_RECEIVED, data
        })
    } catch (error) {
        yield put({
            type: types.CREATE_DATA_ERROR,
            error
        })
    }
}
