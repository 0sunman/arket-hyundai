import {Link} from 'react-router-dom';

const IndexList = ({list}) => {
    
    return (
    <div style={{marginTop:"76px", marginLeft:"50px"}}>
        {list && list.map(({path,name},idx)=>(
            <p>
                <span>[{(idx+1)}]</span> <Link to={path}>{name}</Link>
            </p>
        ))}
    </div>
)}


export default IndexList;