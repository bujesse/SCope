import { combineReducers } from 'redux';
import main from './main';
import { reducer as SearchReducer } from '../../components/Search/reducer';
import * as Search from '../../components/Search/constants';

const rootReducer = combineReducers({
    ['main']: main,
    [Search.NAME]: SearchReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
