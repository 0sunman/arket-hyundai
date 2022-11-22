import IndexList from './page/0000_index';
import Favorite from './page/0001_favorite';
import Qna from './page/0002_qna';
import { Routes, Route } from 'react-router-dom';


const RouteListData = [
    {name:"인덱스 페이지", path:"/", element:<IndexList/>},
    {name:"2022-11-20 Favorite 페이지", path:"/favorite", element:<Favorite/>},
    {name:"2022-11-23 Q&A 페이지", path:"/qna", element:<Qna/>},
]

const RouteList = () => (
    <Routes>
        {
            RouteListData.map(({path,element},idx)=>{
                if(idx === 0) return <Route path={path} element={<IndexList list={RouteListData}/>}></Route>
                return <Route path={path} element={element}></Route>
            })
        }
    </Routes>
)

 export default RouteList;