
import "./favlist.css"; 
import FavElement from "./element";
import { useParams } from 'react-router-dom';
import { useEffect,useState,useMemo } from "react";
import { useDispatch,useSelector } from "react-redux";
import { clearFavoriteList,addDefaultList } from "../../../store/favourite";
import favoritePopupStyle from "../popup/popup.arket.module.scss";
import Popup from "../popup"

const FavList = ({brand,wholeStyle}) => {
    const {count} = useParams();
    const FavClass = `listGrid ${brand}`;
    const dispatch = useDispatch();
    

    const favorites = useSelector(state => state.favorites);
    const [favoriteDatas,setFavoriteDatas] = useState(favorites.datas);
    const [SwitchOnOff,setSwitchOnOff] = useState(false);

    const Datas = useMemo(()=>{
        setFavoriteDatas(favorites.datas)
        return favoriteDatas;
    },[favoriteDatas])


    useEffect(()=>{
        if(Datas.length > 3){
            setSwitchOnOff(true);
        }
    },[Datas])


    useEffect(()=>{
        if(count*1 === 0 || count === ":count"){
            dispatch(addDefaultList({count:0}));
        }else{
            dispatch(addDefaultList({count}));
        }
    },[])
    return (
        <div className={wholeStyle}>
            {brand === "stories" && (<div style={{"fontSize":"14px","textAlign":"right"}}>
                <span>{Datas.length}</span> Items
            </div>)}
            {
            Datas && <ul className={FavClass}>
                {
                    Datas && Datas.map((favorite,idx) => {
                        return <FavElement {...favorite} brand={brand} key={idx}/>
                    })
                }
            </ul>
            }
            
            {
                Datas.length === 0 && (<div className={FavClass}>
                    <h2>좋아하는 상품을 저장해보세요.</h2>
                    <p>
                        좋아하는 상품을 저장하고 싶으신가요?<br/>
                        상품에 있는 하트 모양을 클릭하시면 여기에 보여집니다.
                    </p>
                    <button onClick={()=>{
                        
                        dispatch(addDefaultList({count:4}));
                    }}>
                        지금 둘러보세요
                    </button>
                </div>)
            }
            
    <Popup cls={favoritePopupStyle.popup} SwitchOnOff={SwitchOnOff} setSwitchOnOff={setSwitchOnOff}/>
        </div>)
}

export default FavList;