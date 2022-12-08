import { useEffect } from 'react';
import {Link} from 'react-router-dom';
import HomeButton from '../../../components/common/homebutton';
import { IndexHeader, IndexBody } from '../../../components/common/IndexHeader';
import Head from "./../../../components/arket/common/Head";
import Header from './../../../components/arket/common/Header';
import useLoading from './../../../hooks/loading';


const IndexList = ({list}) => {

    const [isLoading, setLoad, ListTitle, List] = useLoading();
    useEffect(()=>{
        setTimeout(()=>{
            setLoad(false)
        },1000);
    },[])

    return (
        <>
        <IndexHeader/>
        <List>
            <ListTitle>[ ARKET Page List ]</ListTitle>
            {list && list.map(({path,name},idx)=>(
                <p style={{margin:"10px"}}>
                    <span>[{(idx+1)}]</span> <Link to={path}>{name}</Link>
                </p>
            ))}
        </List>
        <HomeButton></HomeButton>

        </>
)}


export default IndexList;