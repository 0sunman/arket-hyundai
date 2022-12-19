import IndexList from './../page/arket/0000_index/index';
import Favorite from './../page/arket/0001_favorite';
import FavoriteList from './../page/arket/0001_favorite/list';
import Qna from './../page/arket/0002_qna';
import QnaRegister from './../page/arket/0002_qna/register';

import CosIndex from '../page/cos/cos';
import CosSEO from '../page/cos/0002_seo';


import StoriesIndex from '../page/stories/stories'
import StoriesFavorite from './../page/stories/0001_favorite';
import StoriesSizeguide from './../page/stories/0002_sizeguide';

const routerlist = {
    cos:[        
        {name:"인덱스 페이지", path:"/cos/", element:(<CosIndex/>), srcURL:"https://github.com/0sunman/arket-hyundai/blob/main/src/page/0000_index/index.js"},
        {name:"2022-12-13 COS SEO 컴포넌트", path:"/cos/cos-seo", element:(<CosSEO/>), srcURL:"https://github.com/0sunman/arket-hyundai/blob/main/src/page/0000_index/index.js"},
    ],
    stories:[
        {name:"인덱스 페이지", path:"/stories/", element:(<StoriesIndex/>), srcURL:"https://github.com/0sunman/arket-hyundai/blob/main/src/page/0000_index/index.js"},
        {name:"2022-11-20 Favorite 페이지", path:"/stories/favorite", element:<StoriesFavorite/>, srcURL:"https://github.com/0sunman/arket-hyundai/blob/main/src/page/0001_favorite/index.js"},
        {name:"2022-12-16 사이즈가이드 페이지", path:"/stories/sizeguide", element:<StoriesSizeguide/>, srcURL:"https://github.com/0sunman/arket-hyundai/blob/main/src/page/0001_favorite/index.js"},
    ],
    arket:[
        {name:"인덱스 페이지", path:"/arket/", element:(<IndexList/>), srcURL:"https://github.com/0sunman/arket-hyundai/blob/main/src/page/0000_index/index.js"},
        {name:"2022-11-20 Favorite 페이지", path:"/arket/favorite", element:<Favorite/>, srcURL:"https://github.com/0sunman/arket-hyundai/blob/main/src/page/0001_favorite/index.js"},
        {name:"2022-11-20 Favorite 리스트", path:"/arket/favorite/list", element:<FavoriteList/>, srcURL:"https://github.com/0sunman/arket-hyundai/blob/main/src/page/0001_favorite/index.js"},
        {name:"2022-11-23 Q&A 페이지", path:"/arket/qna", element:<Qna/>, srcURL:"https://github.com/0sunman/arket-hyundai/blob/main/src/page/0002_qna/index.js"},
        {name:"2022-11-29 Q&A 등록 페이지", path:"/arket/qna/register", element:<QnaRegister/>, srcURL:"https://github.com/0sunman/arket-hyundai/blob/main/src/page/0002_qna/register.js"},
    ]
}

const routerReducer = (state=routerlist,action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default routerReducer;