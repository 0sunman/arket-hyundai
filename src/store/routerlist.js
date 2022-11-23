import IndexList from './../page/0000_index';
import Favorite from './..//page/0001_favorite';
import Qna from './../page/0002_qna';

const routerlist = {
    
    data:[
        {name:"인덱스 페이지", path:"/", element:<IndexList/>, srcURL:"https://github.com/0sunman/arket-hyundai/blob/main/src/page/0000_index/index.js"},
        {name:"2022-11-20 Favorite 페이지", path:"/favorite", element:<Favorite/>, srcURL:"https://github.com/0sunman/arket-hyundai/blob/main/src/page/0001_favorite/index.js"},
        {name:"2022-11-23 Q&A 페이지", path:"/qna", element:<Qna/>, srcURL:"https://github.com/0sunman/arket-hyundai/blob/main/src/page/0002_qna/index.js"},
    ]
}

const routerReducer = (state=routerlist,action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default routerReducer;