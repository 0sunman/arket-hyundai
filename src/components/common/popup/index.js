import popupStyle from './popup.module.scss'
import react,{useEffect, useState} from "react";

const Popup = ({brand,cls,SwitchOnOff,setSwitchOnOff}) => {
    const [clsName, setClsName]=useState("");
    const onClose = () => {
        setSwitchOnOff(false)
    }
    useEffect(()=>{
        if(cls === undefined){
            cls = ""
        }else{
            setClsName(cls);
        }
    },[])
    useEffect(()=>{
        setSwitchOnOff(SwitchOnOff)
    },[setSwitchOnOff])
    return SwitchOnOff ? <div className={popupStyle.popupWrapper +" "+ clsName}>
        <div>
            <div onClick={onClose}>
                <span></span>
                <span></span>
            </div>
            <h2>위시리스트가 가득 찼습니다.</h2>
            <p>이 상품을 위시리스트에 추가하시려면,<br/>먼저 위시리스트에 있는 다른 상품을 제거하신 후 다시 시도해 주세요.</p>
            <button onClick={onClose}>확인</button>
        </div>
    </div> : <></>
}

export default Popup;