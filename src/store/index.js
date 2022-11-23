import favorites from './favourite';
import qna from './qnalist';
import routerlist from './routerlist';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    favorites,
    qna,
    routerlist
})

export default rootReducer;