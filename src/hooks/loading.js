import { useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "../store/siteInfo";
import styled from "@emotion/styled";

const ListTitle = styled.h2`
   font-size:28px;
   text-align:center;
   margin-top:30px;
   @media(max-width:787px){
      margin-top:50px;
   }
`
const List = styled.div`
   margin:50px;
   p{padding:10px 5px;}
`

const useLoading = () =>{
    const dispatch = useDispatch();
    const isLoading = useSelector(({siteinfo})=>siteinfo.isLoading);
    const setLoad = (status)=>{
        dispatch(setIsLoading(status));
    }
    return [isLoading, setLoad, ListTitle, List]
}
    
export default useLoading;

