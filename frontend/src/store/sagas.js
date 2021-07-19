import { all } from 'redux-saga/effects';

//public
import PlanSaga from './plan/saga';

export default function* rootSaga() {
    yield all([
        //public
        PlanSaga(),
    ])
}