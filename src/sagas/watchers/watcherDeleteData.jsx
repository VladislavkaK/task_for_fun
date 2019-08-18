import { takeLatest } from 'redux-saga/effects';
import { workerDeleteData } from '../workers/workerDeleteData';

import * as types from '../../utils/constans';

export default function* watcherDeleteData () {
    yield takeLatest(types.DELETE_DATA_SUCCESS, workerDeleteData);
}