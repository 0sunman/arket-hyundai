import { useState } from "react";
import qna from "./qna.popup.module.scss";

const Popup = () => {
  const [products, setProducts] = useState([
    {
      id: "22052500048872",
      date: "2022-05-25",
      img: "https://image.thehyundai.com/static/6/2/2/62/A1/hnm40A1622263_1_750.jpg",
      name: "브이넥 티셔츠",
      option: "화이트 / S 1개",
      price: 26750,
      state: "배송완료",
    },
    {
      id: "22052500048872",
      date: "2022-05-25",
      img: "https://image.thehyundai.com/static/6/2/2/62/A1/hnm40A1622263_1_750.jpg",
      name: "브이넥 티셔츠",
      option: "화이트 / M 2개",
      price: 26750,
      state: "배송완료",
    },
  ]);
  return (
    <div className={qna.arketQnaRegisterPopup}>
      <div>
        <h2>주문상품 찾기</h2>
        <div>
          <ul>
            <li>
              <button>1개월</button>
              <button>3개월</button>
              <button>6개월</button>
              <button>전체보기</button>
            </li>
            <li>
              <input type="text" />
            </li>
          </ul>
        </div>
        <div className="header">
          <ul>
            <li></li>
            <li>주문일/주문번호</li>
            <li>상품정보/옵션정보</li>
            <li>결제금액</li>
            <li>주문상태</li>
          </ul>
        </div>
        <div className="content">
          {products.map(({ id, date, name, img, option, price, state }) => (
            <ul>
              <li>
                <input type="checkbox" />
              </li>
              <li>
                {date}
                <br />
                {id}
              </li>
              <li>
                <ul>
                  <li>
                    <img src={img} />
                  </li>
                  <li>
                    {name}
                    <br />
                    {option}
                  </li>
                </ul>
              </li>
              <li>{price} 원</li>
              <li>{state}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popup;
