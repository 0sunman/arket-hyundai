import { useEffect } from 'react';
import {Link} from "react-router-dom";
import HomeButton from '../../components/common/homebutton';
import { IndexHeader } from '../../components/common/IndexHeader';
import Head from "../../components/stories/common/Head";
import useLoading from './../../hooks/loading';


const Home = ({list}) =>{

   const [isLoading, setLoad, ListTitle, List] = useLoading();
   useEffect(()=>{
       setTimeout(()=>{
           setLoad(false)
       },1000);
   },[])

    return (<div data-component="OPage" className="layout-inside null">
      <IndexHeader/>
    <div data-component="OPageContent" className="o-page-content" style={{"margin": "54px"}}>
       <div className="content-section">

       <div>
         <ListTitle>[ STORIES Page List ]</ListTitle>
               {list && list.map(({path,name},idx)=>(
                  <p style={{"fontSize":"14px"}}>
                     <span>[{(idx+1)}]</span> <Link to={path}>{name}</Link>
                  </p>
               ))}
         </div>
       </div>
    </div>
    <HomeButton/>
 </div>)
}

export default Home;