import RealIndex from "./page"
import ArketIndex from './page/arket/0000_index/index';
import CosIndex from './page/cos/cos';
import StoriesIndex from './page/stories/stories'
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { data } from 'browserslist';

const RouteList = () => { 
    const RouteListData = useSelector(state => {
        return state.routerlist;
    });
    const datas = ["cos","stories","arket"];
    return (

        <Routes>
            {
                datas.reduce((list, brand)=>{
                    
                    return [...list, ...RouteListData[brand].map(({path,element},idx)=>{
                        if(idx === 0){ 
                            switch(brand){
                                case "cos":
                                    return <Route path={path} element={<CosIndex list={RouteListData[brand]}/>}></Route>
                                case "stories":
                                    return <Route path={path} element={<StoriesIndex list={RouteListData[brand]}/>}></Route>
                                case "arket":
                                    return <Route path={path} element={<ArketIndex list={RouteListData[brand]}/>}></Route>
                                default:
                                    return ""
                            }                                
                        }
                        return <Route path={path} element={element}></Route>
                    })];
                },[<Route path="/" element={<RealIndex/>}></Route>])
            }
        </Routes>
)}

 export default RouteList;