import { fork } from 'redux-saga/effects';
import watcherGetData  from './watchers/watcherGetData';
import watcherDeleteData from './watchers/watcherDeleteData';
import watcherCreateData from './watchers/watcherCreateData';
import watcherEditData from './watchers/watcherEditData';

export default function* rootSaga () {
    yield fork(watcherGetData);
    yield fork(watcherDeleteData);
    yield fork(watcherCreateData);
    yield fork(watcherEditData);
}