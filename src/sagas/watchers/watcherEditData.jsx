import { takeLatest } from 'redux-saga/effects';
import { workerEditData } from '../workers/workerEditData';

import * as types from '../../utils/constans';

export default function* watcherEditData () {
    yield takeLatest(types.EDIT_DATA_SUCCESS, workerEditData);
}