import { useEffect, useRef, useState } from 'react';
import useLoading from './../../../hooks/loading';
import HomeButton from '../../../components/common/homebutton';
import "./cos-seo.css";
import Head from '../../../components/cos/common/Head';

const CosSEO = () =>{



   const [isLoading, setLoad ] = useLoading();
   const [readMore, setReadMore] = useState(false);
   const cosSeo = useRef();
   const cosSeoButton = useRef();
    const clickReadMore = ()=>{
        setReadMore(!readMore);
        
        //document.querySelector("label").scrollHeight
    }
    const resizeEvent = () =>{
        console.log("resize")
        console.log(`${cosSeo.current.scrollHeight} < ${cosSeo.current.clientHeight}`)
        if(cosSeo.current.scrollHeight <= cosSeo.current.clientHeight){
            cosSeoButton.current.style.display = "none";
        }else{
            cosSeoButton.current.style.display = "inline-block";
        }

    }
   useEffect(()=>{
    
        window.addEventListener("resize",resizeEvent)
       setTimeout(()=>{
           setLoad(false)
           resizeEvent();
       },100);
       return () => {
        window.removeEventListener("resize",resizeEvent);
       }
   },[])

   return (
      <>
      <Head/>
         <div data-component="OPage" className="layout-inside" data-component-id="c8e05eae-190e-4470-8e3b-4df55cbfc0d1">
            <div data-component="OPageContent" className="o-page-content" data-component-id="e61d56b4-5c33-420e-972a-aa37e657d521" style={{"margin-top":"0px"}}>
                <div className="content-section">
                    <div class="u-cols-sm-8-8 u-cols-md-12-12 u-cols-lg-24-24 u-cols-hero m-padding-30">
                        <div class="o-hero cos-seo-wrapper">
                            <div class="cos-seo m-teaser mobile-align-top mobile-align-left tablet-align-top tablet-align-center desktop-align-top desktop-align-center text-align-center">
                                <h1 class="a-heading-1 q-giga" style={{"cursor":"default"}}>트렌딩 나우 </h1>
                                <label ref={cosSeo} className={`a-label js-a-label q-alpha3 cos-seo-content ${readMore ? "visible" : ""}`}>디자인 포인트가 더해진 <a class="underline" href="https://www.cos.com/ko-kr/men/knitwear.html">니트웨어</a>, 
                                스타일과 기능성이 어우러진 <a class="underline" href="https://www.cos.com/ko-kr/men/coats-jackets.html">아우터웨어</a>등 다양한 남성 인기 아이템으로 겨울 시즌을 준비해보세요. 
                                등 다양한 남성 인기 아이템으로 겨울 시즌을 준비해보세요. 등 다양한 남성 인기 아이템으로 겨울 시즌을 준비해보세요. 
                                <button ref={cosSeoButton} onClick={clickReadMore}>...<span style={{textDecoration:"underline"}}>{readMore ? "닫기":"더 보기"}</span></button>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
         <HomeButton/>
      </>
        )
}

export default CosSEO;