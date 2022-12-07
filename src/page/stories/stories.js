import {Link} from "react-router-dom";
import Head from "../../components/stories/common/Head";

const Home = ({list}) =>{
    return (<div data-component="OPage" className="layout-inside null">
   <Head/>
    <div data-component="OPageContent" className="o-page-content" style={{"margin-top": "54px"}}>
       <div className="content-section">

       <div>
               {list && list.map(({path,name},idx)=>(
                  <p style={{"fontSize":"14px"}}>
                     <span>[{(idx+1)}]</span> <Link to={path}>{name}</Link>
                  </p>
               ))}
         </div>
       </div>
    </div>
 </div>)
}

export default Home;