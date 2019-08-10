import { fork } from 'redux-saga/effects';
import wotcherGetData  from './wotchers/wotcherGetData';
import wotcherDeleteData from './wotchers/wotcherDeleteData';

export default function* rootSaga () {
    yield fork(wotcherGetData);
    yield fork(wotcherDeleteData);
}