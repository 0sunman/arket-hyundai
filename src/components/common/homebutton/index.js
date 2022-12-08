import "./homebutton.css";
import {Link} from 'react-router-dom'; 
import { useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { useLocation } from "react-router-dom";

const HomeButton = () => {
    const location = useLocation();
    const routerlist = useSelector(state => state.routerlist)
    const [sourceURL,setSourceURL] = useState("");
    return (<div className="HomeButton">
        <Link to="/">목록으로 돌아가기</Link><br/>
    </div>)
}

export default HomeButton;