import { Link } from "react-router-dom";

const Home = () => {
    
    return (
        <div>
            <ul>
                <li>
                    <Link to="./cos">COS</Link>
                </li>
                <li>
                    <Link to="./stories">STORIES</Link>
                </li>
                <li>
                    <Link to="./arket">ARKET</Link>
                </li>
            </ul>
        </div>
    )

}


export default Home;