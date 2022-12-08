import RealIndex from "./page"
import ArketIndex from './page/arket/0000_index/index';
import CosIndex from './page/cos/cos';
import StoriesIndex from './page/stories/stories'
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { data } from 'browserslist';
import useLoading from './hooks/loading';
import styled from '@emotion/styled';

const LoadingBar = styled.div`
    position:fixed; top:0; left:0; width:100%; height:100%; background:#000;
    display:flex; justify-content:center; align-items:center; z-index:100;
    & > span{ color:#fff; font-size:36px}
`


const RouteList = () => { 
    const [isLoading,setLoad] = useLoading();
    const RouteListData = useSelector(state => {
        return state.routerlist;
    });
    const datas = ["cos","stories","arket"];
    return (
<>
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


        <LoadingBar style={{"display":(isLoading) ? "flex":"none"}}>
                <span>로딩중</span>
            </LoadingBar>
</>
        
)}

 export default RouteList;