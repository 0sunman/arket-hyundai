import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { toggleSelectBox } from "../../../store/favourite";
import favlist from "./favlist.module.scss";

const ProductSizePicker = ({ id, isSelectable, isClicked }) => {
  const dispatch = useDispatch();
  const onClickSelectBox = useCallback(() => {
    dispatch(toggleSelectBox(id));
  }, [id, dispatch]);

  return (
    <div className={favlist.ListGridSizePicker}>
      {isSelectable ? (
        <button className="selectSize selectable" onClick={onClickSelectBox}>
          M<div className={`selBtn ${isClicked ? "selected" : ""}`}></div>
        </button>
      ) : (
        <button className="selectSize one">ONESIZE</button>
      )}

      <button className="addBag">Add to bag</button>

      {isSelectable && isClicked ? (
        <div className={"Dropdown"}>
          <ul>
            <li>
              <div>
                <span>S</span>
              </div>
              <div>
                <span>M</span>
              </div>
              <div>
                <span>L</span>
              </div>
              <div>
                <span>XL</span>
              </div>
            </li>
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default ProductSizePicker;
