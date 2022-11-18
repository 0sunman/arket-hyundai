import {useSelector} from 'react-redux'
import "./favlist.css"; 
import FavElement from "./favElement";


const FavList = () => {
    const favorites = useSelector(state => state.favorites)
    return (
        <div>
            <ul className="listGrid">
                {
                    favorites.datas.map((favorite) => {
                        return <FavElement {...favorite}/>
                    })
                }
            </ul>
        </div>)
}

export default FavList;