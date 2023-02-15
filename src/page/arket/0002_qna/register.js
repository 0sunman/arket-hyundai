import { useSelector } from "react-redux";
import { changeActive } from "../../../store/qnalist";
import { useDispatch } from "react-redux";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./arket-qna-register.scss";
import register from "./qna.register.module.scss";

import Popup from "./popup";

const QnAPage = () => {
  const qnadata = useSelector((state) => state.qna);
  const dispatch = useDispatch();
  const [selectBox1, setSelectBox1] = useState(false);
  const [selectBoxText1, setSelectBoxText1] = useState("찾아보기");
  const [selectBoxText2, setSelectBoxText2] = useState("선택하기");
  const [selectBox2, setSelectBox2] = useState(false);
  const [textContent, setTextContent] = useState("");
  const onSelectBoxClicked = (target) => {
    if (target === 1) {
      setSelectBox1(!selectBox1);
    } else {
      setSelectBox2(!selectBox2);
    }
  };
  const onSelectBoxElementClicked = (target, text) => {
    if (target === 1) {
      setSelectBoxText1(text);
    } else {
      setSelectBoxText2(text);
    }
  };

  return (
    <div
      data-component="OPageContent"
      className="o-page-content"
      data-component-id="84f821cb-b419-4c7f-b066-9f1c61032e83"
      style={{ marginTop: "56px" }}
    >
      <div className="o-my-page o-width wc-75" style={{ marginTop: "51px" }}>
        <div className="o-my-page-navigation" id="mypage-menu">
          <span className="a-icon-global-close js-close"></span>
          <div
            className="o-menu-list js-o-menu-list js-code"
            style={{ marginTop: "51px" }}
          >
            <h2 className="a-heading-2 js-a-heading-2">Your account</h2>
            <div className="o-list js-o-list" style={{ overflow: "hidden" }}>
              <ul>
                <li data-selected="MEMBER_INFO_CHANGE">
                  <a
                    href="/ko-kr/mpd/changeMemberInfoForm.html"
                    target="_self"
                    className="a-link menu-my-details"
                  >
                    회원정보
                  </a>
                </li>
                <li data-selected="ORDER_DELIVERY_LIST" className="is-active">
                  <a
                    href="/ko-kr/mpa/selectOrdDlvCrst.html"
                    target="_self"
                    className="a-link menu-my-orders"
                  >
                    주문/배송
                  </a>
                </li>
                <li data-selected="MEMBER_DELIVERY_LIST" id="delivert-main-tab">
                  <a
                    href="/ko-kr/mpd/selectMemberDstnAdr.html"
                    target="_self"
                    className="a-link menu-addressbook"
                  >
                    배송지관리
                  </a>
                </li>
                <li data-selected="CUSTOMER_DEPOSIT_LIST">
                  <a
                    href="/ko-kr/mpe/selectCdpstTabPage.html"
                    target="_self"
                    className="a-link menu-deposit"
                  >
                    예치금
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={register.arketQnaRegister + " arket-qna-register mp-30"}
        >
          <h2>1:1 문의</h2>
          <ul>
            <li className="table">
              <ul>
                <li>문의유형*</li>
                <li class="selectbox-area">
                  <div className="d1">
                    <button
                      className="d2 select general"
                      onClick={() => onSelectBoxClicked(1)}
                    >
                      {selectBoxText1}
                      <span className="arrow-down"></span>
                      <div
                        className="result d2"
                        style={{ display: selectBox1 ? "flex" : "none" }}
                      >
                        <ul>
                          {["찾아보기", "없음1", "없음2", "없음3", "없음4"].map(
                            (text) => (
                              <li
                                onClick={() => {
                                  onSelectBoxElementClicked(1, text);
                                }}
                              >
                                {text}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </button>
                  </div>
                </li>
              </ul>
              <ul className="mp-30">
                <li>문의 상품</li>
                <li>
                  <button className="no-style">주문 상품 찾기</button>
                  <input type="checkbox" id="check1" />{" "}
                  <label for="check1"></label>선택할 상품 없음
                </li>
              </ul>
              <ul>
                <li>제목*</li>
                <li>
                  <input type="text" className="d1 m1" />
                </li>
              </ul>
              <ul>
                <li>
                  문의 내용*
                  <br />({textContent.length}/500자)
                </li>
                <li>
                  <textarea
                    className="d1 m1"
                    value={textContent}
                    onChange={(event) => {
                      setTextContent(event.target.value);
                    }}
                  />
                </li>
              </ul>
              <ul>
                <li>이미지 첨부</li>
                <li>
                  <input type="text" className="d2 m15" />
                  <input type="file" className="hidden" />
                  <button className="ml-12 d5 m4">찾아보기</button>
                </li>
              </ul>
              <ul>
                <li>이메일 답변 알림</li>
                <li className="selectbox-area">
                  <div className="d1">
                    <input type="text" className="d2 m15" />
                    <button
                      className="ml-12 d5 select m4"
                      onClick={() => {
                        onSelectBoxClicked(2);
                      }}
                    >
                      {selectBoxText2} <span className="arrow-down"></span>
                      <div
                        className="result d1"
                        style={{ display: selectBox2 ? "flex" : "none" }}
                      >
                        <ul>
                          {[
                            "선택하기",
                            "naver.com",
                            "daum.net",
                            "gmail.com",
                            "직접입력",
                          ].map((url) => (
                            <li
                              onClick={() => {
                                onSelectBoxElementClicked(2, url);
                              }}
                            >
                              {url}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </button>
                  </div>
                </li>
              </ul>
              <ul className="mp-30">
                <li>SMS 답변 알림</li>
                <li>
                  <input type="text" className="d2 m1" />
                </li>
              </ul>
              <ul>
                <li></li>
                <li>
                  <button className="big m2">취소</button>
                  <button className="big reverse ml-12 m2">문의하기</button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <Popup />
    </div>
  );
};

export default QnAPage;
