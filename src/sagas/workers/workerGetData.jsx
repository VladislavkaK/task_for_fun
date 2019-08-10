import { put, call } from 'redux-saga/effects';
import { getDataService } from '../../services/getDataService';
import * as types from '../../utils/constans';

export function* workerGetData (payload) {
    try {
        const response = yield call(getDataService, payload);

        yield put({
            type: types.GET_DATA_RECEIVED, response
        })
    } catch (error) {
        yield put({
            type: types.GET_DATA_ERROR,
            error
        })
    }
}
