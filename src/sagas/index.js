import { fork } from 'redux-saga/effects';
import wotcherGetData  from './wotchers/wotcherGetData';
import wotcherDeleteData from './wotchers/wotcherDeleteData';
import wotcherCreateData from './wotchers/wotcherCreateData';
import wotcherEditData from './wotchers/wotcherEditData';

export default function* rootSaga () {
    yield fork(wotcherGetData);
    yield fork(wotcherDeleteData);
    yield fork(wotcherCreateData);
    yield fork(wotcherEditData);
}