import IndexList from './page/0000_index';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RouteList = () => { 
    
    
    const RouteListData = useSelector(state => {
        return state.routerlist;
    });

    return (

    <Routes>
        {
            RouteListData.data.map(({path,element},idx)=>{
                if(idx === 0) return <Route path={path} element={<IndexList list={RouteListData.data}/>}></Route>
                return <Route path={path} element={element}></Route>
            })
        }
    </Routes>
)}

 export default RouteList;