import { all } from 'redux-saga/effects';

import { fetchAvailableOrganismsSaga } from '../../components/common/GProfiler/sagas';

export default function* rootSaga() {
    yield all([fetchAvailableOrganismsSaga()]);
}
