import { takeLatest } from 'redux-saga/effects';
import { workerGetData } from '../workers/workerGetData';

import * as types from '../../utils/constans';

export default function* watcherGetData () {
    yield takeLatest(types.GET_DATA_SUCCESS, workerGetData);
}