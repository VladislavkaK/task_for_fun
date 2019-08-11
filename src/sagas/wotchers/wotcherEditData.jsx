import { takeLatest } from 'redux-saga/effects';
import { workerEditData } from '../workers/workerEditData';

import * as types from '../../utils/constans';

export default function* wotcherEditData () {
    yield takeLatest(types.EDIT_DATA_SUCCESS, workerEditData);
}