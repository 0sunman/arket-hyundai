
import "./favlist.css"; 
import FavElement from "./element";


const FavList = ({favorites}) => {
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