import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import useLoading from "../hooks/loading";
import { IndexHeader, IndexBody } from "../components/common/IndexHeader";

const IndexBodyList = styled.ul`
    @media(max-width:787px){
        li > a{font-size:16px !important}
    }
`

const Home = () => {
    const [isLoading,setLoad] = useLoading();
    const onSetLoading = () =>{
        setLoad(true);
    }
    return (
        <div className="indexlist">
            <IndexHeader></IndexHeader>
            <IndexBody>
                <IndexBodyList>
                    <li>
                        <Link to="./cos" onClick={onSetLoading}>COS</Link>
                    </li>
                    <li>
                        <Link to="./stories" onClick={onSetLoading}>STORIES</Link>
                    </li>
                    <li>
                        <Link to="./arket" onClick={onSetLoading}>ARKET</Link>
                    </li>
                    <li>
                        <Link to=".">TOTEME</Link>
                    </li>
                    <li>
                        <Link to=".">NANUS</Link>
                    </li>
                </IndexBodyList>
            </IndexBody>
        </div>
    )

}


export default Home;