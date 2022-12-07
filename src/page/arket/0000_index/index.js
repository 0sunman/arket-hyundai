import {Link} from 'react-router-dom';
import Head from "./../../../components/arket/common/Head";
import Header from './../../../components/arket/common/Header';

const IndexList = ({list}) => {
    return (
        <>
        
        <Head/>
        <Header/>
        <div style={{marginTop:"76px", marginLeft:"50px"}}>
            {list && list.map(({path,name},idx)=>(
                <p>
                    <span>[{(idx+1)}]</span> <Link to={path}>{name}</Link>
                </p>
            ))}
        </div>

        </>
)}


export default IndexList;