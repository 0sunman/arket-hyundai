
import "./favlist.css"; 
import FavElement from "./element";


const FavList = ({brand,favorites}) => {
    const FavClass = `listGrid ${brand}`;
    return (
        <div>
            {brand === "stories" && (<div style={{"fontSize":"14px","textAlign":"right"}}>
                <span>{favorites.datas.length}</span> Items
            </div>)}
            <ul className={FavClass}>
                {
                    favorites.datas.map((favorite) => {
                        return <FavElement {...favorite} brand={brand}/>
                    })
                }
            </ul>
        </div>)
}

export default FavList;