import { useEffect } from 'react';
import Head from "../../components/cos/common/Head";
import {Link} from "react-router-dom";
import useLoading from './../../hooks/loading';
import styled from "@emotion/styled";
import { IndexHeader, IndexBody } from "../../components/common/IndexHeader";
import HomeButton from '../../components/common/homebutton';


const Home = ({list}) =>{



   const [isLoading, setLoad, ListTitle, List] = useLoading();
   
   useEffect(()=>{
       setTimeout(()=>{
           setLoad(false)
       },1000);
   },[])

   return (
      <>
         <IndexHeader/>
         <div data-component="OPage" className="layout-inside" data-component-id="c8e05eae-190e-4470-8e3b-4df55cbfc0d1">
            <div data-component="OPageContent" className="o-page-content" data-component-id="e61d56b4-5c33-420e-972a-aa37e657d521" style={{"margin-top":"0px"}}>
            <div className="content-section">
               <ListTitle>[ COS Page List ]</ListTitle>

               <List>
                  {list && list.map(({path,name},idx)=>(
                     <p>
                        <span>[{(idx+1)}]</span> <Link to={path}>{name}</Link>
                     </p>
                  ))}
            </List>
            </div>
            </div>
         </div>
         <HomeButton/>
      </>
        )
}

export default Home;