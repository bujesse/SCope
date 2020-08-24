import { all } from 'redux-saga/effects';

import { getFeaturesSaga } from './scope';

export default function* rootSaga() {
    yield all([getFeaturesSaga()]);
}
