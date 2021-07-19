import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

// Login Redux States
import { GET_PLANS,GET_FEATURES} from './actionTypes';
import {  getPlansSuccess,getFeaturesSuccess, apiError } from './actions';


import { getBackend } from '../../api/backend';

const backend = getBackend();

function* getPlans({ payload: { } }) {
    try {
        const resp = yield call(backend.getPlans);
        yield put(getPlansSuccess(resp));
    } catch (error) {
        yield put(apiError(error));
    }
}

function* getFeatures({ payload: {  history } }) {
  try {
      const resp = yield call(backend.getFeatures);
      yield put(getFeaturesSuccess(resp));
  } catch (error) {
      yield put(apiError(error));
  }
}

export function* watchGetPlans() {
    yield takeEvery(GET_PLANS, getPlans)
}
export function* watchGetFeatures() {
    yield takeEvery(GET_FEATURES, getFeatures)
}

function* planSaga() {
    yield all([
        fork(watchGetPlans),
        fork(watchGetFeatures)
    ]);
}

export default planSaga;