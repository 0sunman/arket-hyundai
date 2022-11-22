import {Link} from 'react-router-dom';

const IndexList = ({list}) => {
    
    console.log(list)
    return (
    <div style={{marginTop:"76px", marginLeft:"50px"}}>
        {list.map(({path,name},idx)=>(
            <p>
                <span>{idx}</span> <Link to={path}>{name}</Link>
            </p>
        ))}
    </div>
)}


export default IndexList;