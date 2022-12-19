import favorites from './favourite';
import qna from './qnalist';
import routerlist from './routerlist';
import siteinfo from "./siteInfo";
import storiesSizeGuide from "./stories/0002_sizeguide"

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    favorites,
    qna,
    routerlist,
    siteinfo,
    
    storiesSizeGuide
})

export default rootReducer;