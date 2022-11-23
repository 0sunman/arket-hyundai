import "./homebutton.css";
import {Link} from 'react-router-dom'; 

const HomeButton = () => {
    return (<div className="HomeButton">
        <Link to="/">목록으로 돌아가기</Link><br/>
        <Link to="/">Source (React)</Link><br/>
    </div>)
}

export default HomeButton;