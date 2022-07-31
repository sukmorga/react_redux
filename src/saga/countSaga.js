import { put, takeEvery } from 'redux-saga/effects'
import { addCashAction, ASYNC_ADD_CASH, ADD_CASH } from '../store/cashReduser'

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* incrementWorker() {
    yield delay(2000);
    yield put(addCashAction())
};

function* decrementWorker() {

};

export function* countWatcher() {
    yield takeEvery(ASYNC_ADD_CASH, incrementWorker)
};
