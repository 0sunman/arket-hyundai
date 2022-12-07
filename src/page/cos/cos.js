import Head from "../../components/cos/common/Head";
import {Link} from "react-router-dom";

const Home = ({list}) =>{
    return (
        <div data-component="OPage" className="layout-inside" data-component-id="c8e05eae-190e-4470-8e3b-4df55cbfc0d1">
        <Head/>
         <div data-component="OPageContent" className="o-page-content" data-component-id="e61d56b4-5c33-420e-972a-aa37e657d521" style={{"margin-top":"0px"}}>
         <div className="content-section">

            <div>
               {list && list.map(({path,name},idx)=>(
                  <p>
                     <span>[{(idx+1)}]</span> <Link to={path}>{name}</Link>
                  </p>
               ))}
         </div>
         </div>
         </div>
   </div>)
}

export default Home;