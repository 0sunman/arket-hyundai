import Product from "./product";

const Products = () => {

    return (<div className="o-width wc-100">
    <div className="parbase sdp-component product-listing align-below">
       <div data-component="OProductFilters" className="o-product-filters is-collapsed" data-component-id="45b57dfa-cd8a-4c51-a7a9-9303cc92b7ca">
          <div className="filter-buttons">
             <button type="button" className="a-button-nostyle mobile-filter-btn filter-link i18n">필터</button>
             <button type="button" className="a-button-nostyle clear-btn is-disabled" disabled="disabled">
             <span className="i18n">필터초기화</span>
             </button>
             <p className="total-items i18n">47 상품</p>
          </div>
          <div className="filter-wrapper">
             <div className="scroll-content" id="reloadFilter">
                <div data-component="OFilter" id="color-filter" className="o-filter color-filter is-open" data-component-id="a4eab213-e36a-4be0-91c9-bcc440c9d78b">
                   <div className="filter-container">
                      <button type="button" className="a-button-nostyle filter-link">컬러
                      <span className="selected-value"></span>
                      </button>
                      <div className="filter-section" >
                         <button type="button" className="a-button-nostyle a-icon-close"></button>
                         <div className="filters-content">
                            <h6 className="a-heading-6 filter-title"></h6>
                            <div className="o-filter-color search-filter">
                               <ul data-component="MTablist" className="m-tablist" data-tablist-for="filter-color" data-component-id="2ea611d8-7bac-40ac-b128-dfb9231b460d">
                                  <li data-toggle="#colors" className="u-no-select is-active" tabindex="0"></li>
                               </ul>
                               <div data-content-for="filter-color" className="tablist-content">
                                  <div className="content is-active">
                                     <canvas id="canvas1" data-component="OFilterColor" data-facets="" data-type="colorWithNames" width="230" height="230"  data-component-id="2267f0c7-b176-4e72-a3c7-c8f10b9f8ac2">
                                     </canvas>
                                     <canvas className="hinted" width="230" height="230" ></canvas>
                                  </div>
                               </div>
                               <div className="color-name"></div>
                            </div>
                            <ul className="color-palette checkbox-wrapper">
                               <input type="hidden" name="colorGroupData" value="active" data-value="BEIGE" id="colorGroupData_BEIGE"/>
                               <li>
                                  <span className="m-color-checkbox u-clearfix" id="color_beige">
                                     <input type="checkbox" className="a-checkbox" id="checkbox_BEIGE" data-filter="color-filter=BEIGE" data-value="BEIGE" sc-value="BEIGE"/>
                                     <label className="a-label js-a-label color-box" for="checkbox_BEIGE">
                                        <svg className="color-dot">
                                           <circle cx="15" cy="20" r="10" fill="BEIGE"></circle>
                                        </svg>
                                        <span>Beige</span>
                                     </label>
                                  </span>
                               </li>
                               <input type="hidden" name="colorGroupData" value="active" data-value="BLACK" id="colorGroupData_BLACK"/>
                               <li>
                                  <span className="m-color-checkbox u-clearfix" id="color_black">
                                     <input type="checkbox" className="a-checkbox" id="checkbox_BLACK" data-filter="color-filter=BLACK" data-value="BLACK" sc-value="BLACK"/>
                                     <label className="a-label js-a-label color-box" for="checkbox_BLACK">
                                        <svg className="color-dot">
                                           <circle cx="15" cy="20" r="10" fill="BLACK"></circle>
                                        </svg>
                                        <span>Black</span>
                                     </label>
                                  </span>
                               </li>
                               <input type="hidden" name="colorGroupData" value="active" data-value="BLUE" id="colorGroupData_BLUE"/>
                               <li>
                                  <span className="m-color-checkbox u-clearfix" id="color_blue">
                                     <input type="checkbox" className="a-checkbox" id="checkbox_BLUE" data-filter="color-filter=BLUE" data-value="BLUE" sc-value="BLUE"/>
                                     <label className="a-label js-a-label color-box" for="checkbox_BLUE">
                                        <svg className="color-dot">
                                           <circle cx="15" cy="20" r="10" fill="BLUE"></circle>
                                        </svg>
                                        <span>Blue</span>
                                     </label>
                                  </span>
                               </li>
                               <input type="hidden" name="colorGroupData" value="active" data-value="BROWN" id="colorGroupData_BROWN"/>
                               <li>
                                  <span className="m-color-checkbox u-clearfix" id="color_brown">
                                     <input type="checkbox" className="a-checkbox" id="checkbox_BROWN" data-filter="color-filter=BROWN" data-value="BROWN" sc-value="BROWN"/>
                                     <label className="a-label js-a-label color-box" for="checkbox_BROWN">
                                        <svg className="color-dot">
                                           <circle cx="15" cy="20" r="10" fill="BROWN"></circle>
                                        </svg>
                                        <span>Brown</span>
                                     </label>
                                  </span>
                               </li>
                               <input type="hidden" name="colorGroupData" value="active" data-value="GREEN" id="colorGroupData_GREEN"/>
                               <li>
                                  <span className="m-color-checkbox u-clearfix" id="color_green">
                                     <input type="checkbox" className="a-checkbox" id="checkbox_GREEN" data-filter="color-filter=GREEN" data-value="GREEN" sc-value="GREEN"/>
                                     <label className="a-label js-a-label color-box" for="checkbox_GREEN">
                                        <svg className="color-dot">
                                           <circle cx="15" cy="20" r="10" fill="GREEN"></circle>
                                        </svg>
                                        <span>Green</span>
                                     </label>
                                  </span>
                               </li>
                               <input type="hidden" name="colorGroupData" value="active" data-value="GREY" id="colorGroupData_GREY"/>
                               <li>
                                  <span className="m-color-checkbox u-clearfix" id="color_grey">
                                     <input type="checkbox" className="a-checkbox" id="checkbox_GREY" data-filter="color-filter=GREY" data-value="GREY" sc-value="GREY"/>
                                     <label className="a-label js-a-label color-box" for="checkbox_GREY">
                                        <svg className="color-dot">
                                           <circle cx="15" cy="20" r="10" fill="GREY"></circle>
                                        </svg>
                                        <span>Grey</span>
                                     </label>
                                  </span>
                               </li>
                               <input type="hidden" name="colorGroupData" value="active" data-value="TURQUOISE" id="colorGroupData_TURQUOISE"/>
                               <li>
                                  <span className="m-color-checkbox u-clearfix" id="color_turquoise">
                                     <input type="checkbox" className="a-checkbox" id="checkbox_TURQUOISE" data-filter="color-filter=TURQUOISE" data-value="TURQUOISE" sc-value="TURQUOISE"/>
                                     <label className="a-label js-a-label color-box" for="checkbox_TURQUOISE">
                                        <svg className="color-dot">
                                           <circle cx="15" cy="20" r="10" fill="TURQUOISE"></circle>
                                        </svg>
                                        <span>Turquoise</span>
                                     </label>
                                  </span>
                               </li>
                               <input type="hidden" name="colorGroupData" value="active" data-value="WHITE" id="colorGroupData_WHITE"/>
                               <li>
                                  <span className="m-color-checkbox u-clearfix" id="color_white">
                                     <input type="checkbox" className="a-checkbox" id="checkbox_WHITE" data-filter="color-filter=WHITE" data-value="WHITE" sc-value="WHITE"/>
                                     <label className="a-label js-a-label color-box" for="checkbox_WHITE">
                                        <svg className="color-dot">
                                           <circle cx="15" cy="20" r="10" fill="WHITE"></circle>
                                        </svg>
                                        <span>White</span>
                                     </label>
                                  </span>
                               </li>
                            </ul>
                         </div>
                      </div>
                   </div>
                </div>
                <div data-component="OFilter" id="size-filter" className="o-filter" data-component-id="3c1231ed-34cc-40d3-981f-172496f71206">
                   <div className="filter-container">
                      <button type="button" className="a-button-nostyle filter-link">사이즈
                      <span className="selected-value"></span>
                      </button>
                      <div className="filter-section" >
                         <button type="button" className="a-button-nostyle a-icon-close"></button>
                         <div className="filters-content">
                            <h6 className="a-heading-6 filter-title"></h6>
                            <ul className="checkbox-wrapper">
                               <li>
                                  <span className="m-checkbox u-clearfix is-small" id="size_46">
                                  <input type="checkbox" className="a-checkbox is-small" id="size_connected_46" data-value="46" sc-value="46"/>
                                  <label className="a-label js-a-label custom-box" for="size_connected_46"></label>
                                  <label className="a-label js-a-label" for="size_connected_46" data-label="true">46</label>
                                  </span>
                               </li>
                               <li>
                                  <span className="m-checkbox u-clearfix is-small" id="size_48">
                                  <input type="checkbox" className="a-checkbox is-small" id="size_connected_48" data-value="48" sc-value="48"/>
                                  <label className="a-label js-a-label custom-box" for="size_connected_48"></label>
                                  <label className="a-label js-a-label" for="size_connected_48" data-label="true">48</label>
                                  </span>
                               </li>
                               <li>
                                  <span className="m-checkbox u-clearfix is-small" id="size_50">
                                  <input type="checkbox" className="a-checkbox is-small" id="size_connected_50" data-value="50" sc-value="50"/>
                                  <label className="a-label js-a-label custom-box" for="size_connected_50"></label>
                                  <label className="a-label js-a-label" for="size_connected_50" data-label="true">50</label>
                                  </span>
                               </li>
                               <li>
                                  <span className="m-checkbox u-clearfix is-small" id="size_52">
                                  <input type="checkbox" className="a-checkbox is-small" id="size_connected_52" data-value="52" sc-value="52"/>
                                  <label className="a-label js-a-label custom-box" for="size_connected_52"></label>
                                  <label className="a-label js-a-label" for="size_connected_52" data-label="true">52</label>
                                  </span>
                               </li>
                               <li>
                                  <span className="m-checkbox u-clearfix is-small" id="size_54">
                                  <input type="checkbox" className="a-checkbox is-small" id="size_connected_54" data-value="54" sc-value="54"/>
                                  <label className="a-label js-a-label custom-box" for="size_connected_54"></label>
                                  <label className="a-label js-a-label" for="size_connected_54" data-label="true">54</label>
                                  </span>
                               </li>
                               <li>
                                  <span className="m-checkbox u-clearfix is-small" id="size_S">
                                  <input type="checkbox" className="a-checkbox is-small" id="size_connected_s" data-value="S" sc-value="S"/>
                                  <label className="a-label js-a-label custom-box" for="size_connected_s"></label>
                                  <label className="a-label js-a-label" for="size_connected_s" data-label="true">S</label>
                                  </span>
                               </li>
                               <li>
                                  <span className="m-checkbox u-clearfix is-small" id="size_M">
                                  <input type="checkbox" className="a-checkbox is-small" id="size_connected_m" data-value="M" sc-value="M"/>
                                  <label className="a-label js-a-label custom-box" for="size_connected_m"></label>
                                  <label className="a-label js-a-label" for="size_connected_m" data-label="true">M</label>
                                  </span>
                               </li>
                               <li>
                                  <span className="m-checkbox u-clearfix is-small" id="size_L">
                                  <input type="checkbox" className="a-checkbox is-small" id="size_connected_l" data-value="L" sc-value="L"/>
                                  <label className="a-label js-a-label custom-box" for="size_connected_l"></label>
                                  <label className="a-label js-a-label" for="size_connected_l" data-label="true">L</label>
                                  </span>
                               </li>
                               <li>
                                  <span className="m-checkbox u-clearfix is-small" id="size_XL">
                                  <input type="checkbox" className="a-checkbox is-small" id="size_connected_xl" data-value="XL" sc-value="XL"/>
                                  <label className="a-label js-a-label custom-box" for="size_connected_xl"></label>
                                  <label className="a-label js-a-label" for="size_connected_xl" data-label="true">Xl</label>
                                  </span>
                               </li>
                               <li>
                                  <span className="m-checkbox u-clearfix is-small" id="size_ONESIZE">
                                  <input type="checkbox" className="a-checkbox is-small" id="size_connected_onesize" data-value="ONESIZE" sc-value="ONESIZE"/>
                                  <label className="a-label js-a-label custom-box" for="size_connected_onesize"></label>
                                  <label className="a-label js-a-label" for="size_connected_onesize" data-label="true">Onesize</label>
                                  </span>
                               </li>
                            </ul>
                         </div>
                      </div>
                   </div>
                </div>
                <button type="button" className="a-button-nostyle clear-btn is-disabled" disabled="disabled">
                <span className="i18n">초기화</span>
                </button>
             </div>
             <div className="cta-block">
                <button type="button" className="a-button clear-filter is-disabled" disabled="disabled">
                <span className="i18n">초기화</span>
                </button>
                <button type="button" className="a-button set-filter">
                <span className="i18n">적용</span>
                </button>
                <button type="button" className="a-button close-filter">
                <span className="i18n">닫기</span>
                </button>
             </div>
          </div>
       </div>
       <div id="lazyLoadSpan">
          <div id="reloadProducts" className="o-product-listing has-upper-body-images fixed-columns-4 u-align-center">

            <Product/>


          </div>
       </div>
    </div>
 </div>)
}

export default Products;