import favorites from './favourite';
import qna from './qnalist';
import routerlist from './routerlist';
import siteinfo from "./siteInfo";

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    favorites,
    qna,
    routerlist,
    siteinfo
})

export default rootReducer;