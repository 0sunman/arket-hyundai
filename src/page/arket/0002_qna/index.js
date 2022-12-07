import './qna.css';
import {useSelector} from 'react-redux'
import {changeActive} from "../../../store/qnalist"
import { useDispatch } from 'react-redux';
import { useLocation, Link } from 'react-router-dom';
import Head from "./../../../components/arket/common/Head";
import CommonHeader from './../../../components/arket/common/Header';

const Header = () => (<li className="header table-row">
    <ul>
        <li>문의일</li>
        <li>문의유형</li>
        <li>제목</li>
        <li>답변여부</li>
    </ul>
</li>)

const QnAPage = () => {
    const qnadata = useSelector(state => state.qna)
    const dispatch = useDispatch()
    const location = useLocation();
    
    return (      
        <>
        
        <Head/>
        <CommonHeader/>
    <div data-component="OPageContent" className="o-page-content" data-component-id="84f821cb-b419-4c7f-b066-9f1c61032e83" style={{"marginTop": "56px"}}>
        <div className="o-my-page o-width wc-75" style={{"marginTop": "51px"}}>

            <div className="o-my-page-navigation" id="mypage-menu">
            <span className="a-icon-global-close js-close"></span>
            <div className="o-menu-list js-o-menu-list js-code" style={{"marginTop": "51px"}}>
                <h2 className="a-heading-2 js-a-heading-2">Your account</h2>
                <div className="o-list js-o-list" style={{"overflow":"hidden"}}>
                <ul>
                    <li data-selected="MEMBER_INFO_CHANGE">
                    <a href="/ko-kr/mpd/changeMemberInfoForm.html" target="_self" className="a-link menu-my-details">회원정보</a>
                    </li>
                    <li data-selected="ORDER_DELIVERY_LIST" className="is-active">
                    <a href="/ko-kr/mpa/selectOrdDlvCrst.html" target="_self" className="a-link menu-my-orders">주문/배송</a>
                    </li>
                    <li data-selected="MEMBER_DELIVERY_LIST" id="delivert-main-tab">
                    <a href="/ko-kr/mpd/selectMemberDstnAdr.html" target="_self" className="a-link menu-addressbook">배송지관리</a>
                    </li>
                    <li data-selected="CUSTOMER_DEPOSIT_LIST">
                    <a href="/ko-kr/mpe/selectCdpstTabPage.html" target="_self" className="a-link menu-deposit">예치금</a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            <div className="arket-qna">
            <h2>1:1 문의</h2>
            <Link to="./register">
            <button className="qna-button">1:1 문의하기</button>
            </Link>
            <div className="selectbox-area">
                <div>
                <button>전체보기<span className="arrow-down"></span></button>
                
                </div>
                <div>
                <button>1개월 보기<span className="arrow-down"></span></button>
                
                </div>  
            </div>
            <ul>

                <Header/>
                <li className="table-row">
                    {
                        qnadata.datas.map(({id,date,type,subject,answerYN,content,answer, active, answeryn})=>(
                            <ul className='content'>
                                <ul className='subject' onClick={()=>{
                                    dispatch(changeActive(id))
                                    }}>
                                    <li>{date}</li>
                                    <li>{type}</li>
                                    <li>{subject}</li>
                                    <li>{answerYN ? "답변완료" : "미처리"}</li>
                                </ul>
                                <ul className='detail' style={{display:(active)?"flex":"none"}}>
                                    <li className='question'>
                                        <p>
                                            주문번호 : 2201270069541<br/>
                                            상품정보 : 브이넥 티셔츠<br/>
                                            옵션 : 화이트/S 1개
                                        </p>
                                        <p dangerouslySetInnerHTML={{__html:content}}>
                                        </p>
                                    </li>
                                    <li className='answer' style={{display:(answeryn)?"flex":"none"}}>
                                        <p dangerouslySetInnerHTML={{__html:answer}}>
                                        </p>
                                    </li>
                                </ul>
                            </ul>
                        ))
                    }
                </li>
            </ul>
            </div>
      </div>
    </div>
    </>
 
 )
}

export default QnAPage;