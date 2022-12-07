const Head = () => {
    return (
        <div id="top_utile_warp" className="u-no-select">
        <link rel="stylesheet" type="text/css" href="https://image.thehyundai.com/cos_cdn/css/cos_ui.css?ver=12071309"/>
        <link rel="stylesheet" type="text/css" href="https://image.thehyundai.com/cos_cdn/css/cos.custom.css?ver=12071309"/>
   
           <header data-component="OHeader" className="o-header u-clearfix is-relative" data-component-id="e6494ee5-c5d9-4ff8-9d80-ee7d813b8415">
              <div id="gnb_warp" className="header-container renew_2021 renew_2022">
                 <div className="header-curtain">
                    <div className="navigation-icons">
                       <span className="a-icon-menu-only-mobile"></span>
                       <span className="a-icon-menu"></span>
                       <span className="a-icon-search search"></span>
                    </div>
                    <div className="header-wrapper">
                       <nav data-component="ONavigation" className="o-navigation" data-component-id="7ecca7f9-80f1-4c84-bdcf-6f6138dfc458">
                          <div className="navigation-wrapper">
                             <div className="main-menu">
                                <div className="departments">
                                   <a href="/ko-kr/new-arrivals.html" target="_self" className="a-link is-selected" data-title="New Arrivals" data-pre-select="true">신상품</a>
                                   <a href="/ko-kr/women.html" target="_self" className="a-link" data-title="Women">여성</a>
                                   <a href="/ko-kr/men.html" target="_self" className="a-link" data-title="Men">남성</a>
                                   <a href="https://www.cos.com/ko-kr/gift-guide.html" target="_self" className="a-link" data-title="The Gift Guide ">기프트 컬렉션</a>
                                   <a href="https://www.cos.com/ko-kr/magazine.html" target="_self" className="a-link" data-title="Magazine">매거진</a>
                                   <a href="/ko-kr/sustainability.html" target="_self" className="a-link" data-title="Sustainability">지속가능성</a>
                                </div>
                                <div className="notification-message">
                                   <p data-catetitle="New Arrivals" className="a-paragraph">무료배송, 무료반품 혜택과 함께 새로운 상품을 찾아보세요</p>
                                </div>
                                <div className="sub-menu u-not-desktop">
                                   <a href="http://pf.kakao.com/_jGrxkd" target="_blank" className="a-link">카카오톡 채널</a>
                                   <a href="/ko-kr/store-locator.html" target="_self" className="a-link">매장 찾기</a> 
                                   <a href="/ko-kr/customer-service.html" target="_self" className="a-link">Customer Service</a>
                                </div>
                                <div className="sub-menu">
                                   <div data-component="MSearch" className="m-search js-search-form" autocomplete="on" data-min-characters="3" data-component-id="ccb4b98a-78b9-4efa-b12c-7eac706e1da6">
                                      <a className="a-link menu-link search-text">검색</a>
                                      <span className="a-icon-search"></span>
                                      <input placeholder="검색어를 입력하세요" className="a-input js-search-input" name="searchTerm" autocomplete="off"/>
                                      <p className="a-paragraph clear-button">지우기</p>
                                   </div>
                                   <a href="#" target="_self" className="a-link shipping" onclick="HUtil.createCountrySelector();">배송국가: 대한민국</a>
                                   <div className="sign-in-section js-login-area" id="loginOutMobileId">
                                      <a href="#" target="_self" className="a-link sign-in menu-link open-lightbox" onclick="setGnbLoginForHead()">로그인</a>
                                   </div>
                                   <div data-classes="is-small" className="sign-in-section js-logout-area hidden">
                                      <a href="/ko-kr/mpd/changeMemberInfoForm.html" target="_self" className="a-link account">MY COS</a>
                                      <a href="javascript:;" target="_self" className="a-link sign-out" onclick="signOutFunc()">로그아웃</a>
                                   </div>
                                </div>
                             </div>
                             <div className="category-wrapper">
                             </div>
                          </div>
                       </nav>
                    </div>
                    <div className="m-bag">
                       <a href="/ko-kr/mpc/sltdItemList.html" target="_self" className="a-link">
                          <span className="svg-icon-heart">
                             <svg viewBox="0 0 15 13" version="1.1">
                                <desc>Created with Sketch.</desc>
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                   <g id="JP_Wishlist_PLP_4_column_D" transform="translate(-1019.000000, -333.000000)" stroke="#1b1b1b">
                                      <g id="data_image_svg+xml;…-copy" transform="translate(1020.000000, 334.000000)">
                                         <path d="M5.70932143,1.36896 C5.08762861,0.726159685 4.24439413,0.365032715 3.36514286,0.365032715 C2.48589158,0.365032715 1.6426571,0.726159685 1.02096429,1.36896 C-0.271937628,2.70799558 -0.271937628,4.87648442 1.02096429,6.21552 L6.49025,11.86992 L9.61489286,8.63808 L11.9581429,6.21648 C12.5809377,5.57421049 12.9310666,4.70222014 12.9313356,3.79277863 C12.9315892,2.88333713 12.5819614,2.0111319 11.9595357,1.36848 C10.6638155,0.0313894192 8.56545793,0.0318189992 7.27025,1.36944 L6.49025,2.17584 L5.70932143,1.36896 Z" id="Shape"></path>
                                      </g>
                                   </g>
                                </g>
                             </svg>
                          </span>
                       </a>
                       <a href="/ko-kr/odb/basktList.html" target="_self" className="a-link">
                       <span className="a-icon-bag"></span>
                       <span className="quantity js-minicart-quantity"></span>
                       </a>
                    </div>
                    <div className="a-cos-logo">
                       <a href="https://www.cos.com/ko-kr/index.html">
                       <svg width="235px" height="83px" viewBox="0 0 235 83" version="1.1">
                          <title>FINAL_Logo_RGB</title>
                          <defs>
                             <polygon id="path-1" points="0 0.005 234.44 0.005 234.44 82.94 0 82.94"></polygon>
                          </defs>
                          <g id="FINAL_Logo_RGB" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                             <mask id="mask-2" fill="white">
                                   <use href="#path-1"></use>
                             </mask>
                             <g id="Clip-2"></g>
                             <path d="M184.288,62.013 L176.346,71.261 C183.696,79.323 194.129,83 205.036,83 C220.45,83 234.44,73.394 234.44,58.813 C234.44,31.542 190.097,38.539 190.097,21.821 C190.097,15.062 196.738,11.862 205.154,11.862 C212.152,11.862 219.029,15.062 223.771,18.739 L230.053,9.015 C222.941,3.207 214.048,0.005 204.919,0.005 C191.639,0.005 178.004,7.829 178.004,22.056 C178.004,49.328 222.347,42.451 222.347,58.813 C222.347,67.347 213.692,71.142 205.036,71.142 C197.212,71.142 188.913,66.638 184.288,62.013" id="Fill-1" fill="#1B1B1B" mask="url(#mask-2)"></path>
                             <path d="M123.666,71.142 C139.79,71.142 152.951,57.389 152.951,41.502 C152.951,25.496 139.79,11.86 123.666,11.86 C107.543,11.86 94.143,25.496 94.143,41.502 C94.143,57.389 107.543,71.142 123.666,71.142 M123.549,0.005 C146.549,0.005 165.045,18.619 165.045,41.502 C165.045,64.384 146.549,83 123.549,83 C100.666,83 82.049,64.384 82.049,41.502 C82.049,18.619 100.666,0.005 123.549,0.005" id="Fill-3" fill="#1B1B1B" mask="url(#mask-2)"></path>
                             <path d="M72.916,13.877 C65.327,5.221 54.184,0.005 41.496,0.005 C18.496,0.005 0,18.381 0,41.502 C0,64.622 18.496,82.998 41.496,82.998 C54.42,82.998 65.683,77.546 73.272,68.77 L64.143,60.946 C58.806,67.23 50.746,71.142 41.496,71.142 C25.491,71.142 12.093,57.508 12.093,41.502 C12.093,25.496 25.491,11.86 41.496,11.86 C50.746,11.86 58.57,15.892 64.143,22.176 L72.916,13.877" id="Fill-4" fill="#1B1B1B" mask="url(#mask-2)"></path>
                          </g>
                       </svg>
                       </a>
                    </div>
                 </div>
              </div>
           </header>
           <div className="q-margin-notification"></div>
        </div>)
}

export default Head;