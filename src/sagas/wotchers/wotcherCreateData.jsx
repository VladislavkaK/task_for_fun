import { takeLatest } from 'redux-saga/effects';
import { workerCreateData } from '../workers/workerCreateData';

import * as types from '../../utils/constans';

export default function* wotcherCreateData () {
    yield takeLatest(types.CREATE_DATA_SUCCESS, workerCreateData);
}