import favorites from './favourite';
import qna from './qnalist';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    favorites,
    qna
})

export default rootReducer;