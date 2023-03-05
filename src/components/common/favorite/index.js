import FavElement from "./element";
import { useParams } from "react-router-dom";
import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearFavoriteList, addDefaultList } from "../../../store/favourite";
import favoriteArketPopupStyle from "../popup/popup.arket.module.scss";
import favoriteStoriesPopupStyle from "../popup/popup.stories.module.scss";
import Popup from "../popup";
import favlist from "./favlist.module.scss";

const FavList = ({ brand, wholeStyle }) => {
  const { count } = useParams();
  const FavClass = `${favlist.listGrid} ${brand}`;
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites);
  const [favoriteDatas, setFavoriteDatas] = useState([]);
  const [SwitchOnOff, setSwitchOnOff] = useState(false);

  useEffect(() => {
    if (favoriteDatas.length > 3) {
      setSwitchOnOff(true);
    }
  }, [favoriteDatas]);

  useEffect(() => {
    setFavoriteDatas(favorites.datas);
  }, [favorites]);

  useEffect(() => {
    if (count * 1 === 0 || count === ":count") {
      dispatch(addDefaultList({ count: 0 }));
    } else {
      dispatch(addDefaultList({ count }));
    }
  }, []);
  const popupStyle = {
    stories: favoriteStoriesPopupStyle.popup,
    arket: favoriteArketPopupStyle.popup,
  };
  console.log(popupStyle["stories"]);
  return (
    <div
      className={
        wholeStyle + " " + `${brand === "stories" && " u-align-to-logo"}`
      }
    >
      {favoriteDatas.length > 0 && (
        <div
          className=""
          style={{ display: "block", fontSize: "14px", textAlign: "right" }}
        >
          <span>{favoriteDatas.length}</span> Items
        </div>
      )}
      {favoriteDatas && (
        <ul className={FavClass}>
          {favoriteDatas &&
            favoriteDatas.map((favorite, idx) => {
              return <FavElement {...favorite} brand={brand} key={idx} />;
            })}
        </ul>
      )}

      {favoriteDatas.length === 0 && (
        <div className={FavClass}>
          {brand === "stories" ? <h2>좋아하는 상품을 저장해보세요.</h2> : ""}
          <p>
            좋아하는 상품을 저장하고 싶으신가요?
            <br />
            상품에 있는 하트 모양을 클릭하시면 여기에 보여집니다.
          </p>
          <button
            onClick={() => {
              dispatch(addDefaultList({ count: 4 }));
            }}
          >
            지금 둘러보세요
          </button>
        </div>
      )}

      <Popup
        cls={popupStyle[brand]}
        brand={brand}
        SwitchOnOff={SwitchOnOff}
        setSwitchOnOff={setSwitchOnOff}
      />
    </div>
  );
};

export default FavList;
