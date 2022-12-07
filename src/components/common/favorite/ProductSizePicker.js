import { useDispatch } from "react-redux";
import { toggleSelectBox } from "../../../store/favourite";

const ProductSizePicker = ({id, isSelectable, isClicked})=>{
    const dispatch = useDispatch();
    
    return (
    <div className="listGrid__element---sizePicker">
        {isSelectable ? (
            <button className="selectSize selectable" onClick={()=>{dispatch(toggleSelectBox(id))}}>
                M
                <div className={`selBtn ${isClicked ? "selected" : ""}`}></div>    
            </button>
        ) : (
            <button className="selectSize one">ONESIZE</button>
        )}
        
        <button className="addBag">Add to bag</button>

        {(isSelectable && isClicked) ? (<div className="listGrid__element---sizePicker Dropdown">
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
        </div>):(<></>)}
    </div>

)}
export default ProductSizePicker;