import FavList from "../../../components/common/favorite";
import { useSelector } from "react-redux";
import Head from "../../../components/arket/common/Head";
import Header from "../../../components/arket/common/Header";
import HomeButton from "../../../components/common/homebutton";
import Products from "../../../components/arket/products";
import HeartIcon from "./heart";
import favoriteStyle from "./favorite.arket.module.scss";

const Pdp = () => (
  <>
    <Head />
    <Header />

    <div
      data-component="OProductDetails"
      class="o-product-details"
      data-component-id="eb9f2779-79e7-4018-b5d3-97a683e5b598"
      style={{ paddingTop: "90px" }}
    >
      <form
        data-component="OForm"
        class="o-form add-to-cart"
        action="/someURL"
        method="POST"
        onsubmit=""
        data-component-id="155b4b18-27b2-4f06-bcda-1f11f400e412"
      >
        <div class="center-panel">
          <div class="o-product-gallery-main">
            <div class="main-image-wrapper">
              <div id="images" class="image-gallery">
                <div
                  id="product-gallery"
                  data-component="OProductGallery"
                  class="o-product-gallery"
                  data-component-id="2e2d950f-e502-4b31-839f-f2c831866adb"
                >
                  <div
                    data-component="OLazyLoad"
                    class="o-lazy-load"
                    data-component-id="6491f30f-36b2-4eca-9231-d3cb173da3dc"
                  >
                    <div class="spinner"></div>
                  </div>
                  <div
                    data-component="OZoomSlider"
                    data-slides-desktop="1"
                    data-slides-tablet="1"
                    data-slides-mobile="1"
                    class="o-zoom-slider pdp-slider"
                    data-component-id="b536be24-0567-4de4-ab71-d29e3c0555c5"
                  >
                    <div class="a-heading-2 slider-title u-align-center"></div>
                    <div
                      class="slider slick-initialized slick-slider"
                      id="imageContainer"
                      data-template="image-container-link"
                    >
                      <button
                        type="button"
                        class="slick-arrow slick-prev a-icon-lg-accordion a-button-nostyle"
                      ></button>
                      <div class="slick-list draggable">
                        <div class="slick-track">
                          <div
                            data-component="APicture"
                            class="a-picture slick-slide slick-cloned"
                            data-slick-index="10"
                            aria-hidden="true"
                            tabindex="-1"
                            data-component-id="ce1f9153-7f61-4305-9e4c-95ddef299af2"
                            style={{ width: "100%" }}
                          >
                            <img
                              class="a-image  "
                              data-zoom-src="https://image.thehyundai.com/static/4/6/3/64/A1/hnm40A1643643_5_1950.jpg"
                              src="https://image.thehyundai.com/static/4/6/3/64/A1/hnm40A1643643_5_900.jpg"
                              alt="40A1643643"
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        class="slick-arrow slick-next a-icon-lg-accordion a-button-nostyle"
                      ></button>
                    </div>
                    <span class="image-counter">1/6</span>
                    <span class="show-percentage-off-mob ">0% 할인</span>
                  </div>
                </div>
              </div>

              <span className={favoriteStyle.heartIcon}>
                <HeartIcon />
              </span>
            </div>
          </div>
        </div>
        <div class="left-panel">
          <div
            data-component="OProductDetailsSelection"
            class="o-product-details-selection"
            data-component-id="c066eb89-63f6-4665-acf2-4edae0feaf4b"
          >
            <div class="markers-container" id="prdmarker"></div>
            <div class="show-percentage-off  ">
              <span>0% 할인</span>
            </div>
            <div class="product-name-price-wrapper">
              <h1 class="a-heading-3">
                <span id="productTitle">타이백 롱슬리브 탑</span>
              </h1>
              <div class="m-product-price" id="product-price">
                <span id="productPrice" class="is-regular price-value">
                  75,000
                </span>
              </div>
            </div>
            <div class="product-size-wrapper" id="sizesDropdown">
              <h4 class="a-heading-4">사이즈</h4>
              <a
                class="a-link size-guide-link open-lightbox"
                href="#"
                target="_self"
                data-template="lp-size-guide"
                data-classes="is-large"
              >
                사이즈 가이드
              </a>
              <div
                class="a-size-swatch"
                id="size"
                data-component="ASizeSwatch"
                data-template="size-container-link"
                data-component-id="a7052fbf-ae74-4962-acfd-87bc53d137e1"
              >
                <input class="a-input js-input" name="selectSize" />
                <input
                  name="lowfield"
                  data-lowcheck="true"
                  data-lowtext="LOW IN STOCK"
                  class="a-input js-input"
                  id="lowinstockfield"
                  type="hidden"
                />
                <button
                  class="a-button-nostyle size-options longer-size in-stock low-in-stock first-size-swatch"
                  type="button"
                  data-value="XS/T"
                  data-code="1146809001002"
                  data-uitm-cd="00001"
                >
                  <span>XS/T</span>
                  <p class="a-paragraph low-stock">
                    <span>품절임박</span>
                  </p>
                </button>
                <button
                  class="a-button-nostyle size-options longer-size in-stock 
                     low-in-stock 
                     "
                  type="button"
                  data-value="S/T"
                  data-code="1146809001003"
                  data-uitm-cd="00002"
                >
                  <span>S/T</span>
                  <p class="a-paragraph low-stock">
                    <span>품절임박</span>
                  </p>
                </button>
                <button
                  class="a-button-nostyle size-options longer-size in-stock 
                     low-in-stock 
                     "
                  type="button"
                  data-value="M/T"
                  data-code="1146809001004"
                  data-uitm-cd="00003"
                >
                  <span>M/T</span>
                  <p class="a-paragraph low-stock">
                    <span>품절임박</span>
                  </p>
                </button>
                <button
                  class="a-button-nostyle size-options longer-size in-stock 
                     low-in-stock 
                     "
                  type="button"
                  data-value="L/T"
                  data-code="1146809001005"
                  data-uitm-cd="00004"
                >
                  <span>L/T</span>
                  <p class="a-paragraph low-stock">
                    <span>품절임박</span>
                  </p>
                </button>
              </div>
            </div>
            <div class="model-tip"></div>
            <button class="a-button add-to-cart " id="addtocart">
              <span class="i18n">장바구니 담기</span>
            </button>
          </div>
          <div data-component="MShippingInfo" class="m-product-shipping-info">
            <div class="info-short is-richtext" data-content="localizedTTT">
              무료배송 | 무료반품
            </div>
            <div class="a-tooltip">
              <p>영업일 기준 1~3일 내 배송</p>
              <p>배송비 무료 | 무료 반품</p>
              <br />
              <p>- 일부 군사지역은 배송 불가</p>
              <p>- 속옷 및 이어링 제품은 반품 불가</p>
              <p>&nbsp;&nbsp;(결함의 경우 가능)</p>
              <br />
              <p>
                <button
                  type="button"
                  class="open-lightbox a-button-nostyle"
                  data-template="lp-return-refund-guide"
                >
                  {" "}
                  반품 및 환불 정책 상세
                </button>
              </p>
            </div>
          </div>
          <div class="product-shipping-tooltip-bx">
            <div class="info-short open-tooltip-btn">무료배송 | 무료반품</div>
            <div class="a-tooltip">
              <p>영업일 기준 1~3일 내 배송</p>
              <p>배송비 무료 | 무료 반품</p>
              <br />
              <p>- 일부 군사지역은 배송 불가</p>
              <p>- 속옷 및 이어링 제품은 반품 불가</p>
              <p>&nbsp;&nbsp;(결함의 경우 가능)</p>
              <br />
              <p>
                <button
                  type="button"
                  class="open-lightbox a-button-nostyle"
                  data-template="lp-return-refund-guide"
                >
                  {" "}
                  &gt; 반품 및 환불 정책 상세
                </button>
              </p>
            </div>
          </div>
          <div
            data-component="OAvailability"
            class="o-availability"
            data-component-id="9d7f9f4d-caba-4257-a1f4-7ad719d3c238"
          ></div>
          <div
            data-component="OProductAttributes"
            class="o-product-attributes"
            data-component-id="85e1d8b8-6c30-4c9d-bb47-5bc1a9cdee1b"
          >
            <div class="attributes-top">
              <div class="id-el">
                <span class="pdp-label i18n">ID </span>
                <span class="pdp-value for-highlight">
                  <span class="dep">
                    1146809<span class="spacer">-</span>001
                  </span>
                </span>
              </div>
              <div class="made-in-el" id="made-in">
                <div
                  data-component="OAccordion"
                  class="o-accordion pdp align-left full-width"
                  data-component-id="1b7c8531-4de9-4c30-bfa5-de1253ee894a"
                >
                  <div class="accordion-header">
                    <a
                      href="#"
                      target="_self"
                      class="a-link accordion-title js-accordion-toggle"
                    >
                      <span class="pdp-label" id="made-in-title i18n">
                        제조국
                      </span>
                      <span class="pdp-value">방글라데시</span>
                    </a>
                  </div>
                  <div class="accordion-content">
                    <div class="accordion-inner-content">
                      <div class="m-made-in">
                        <div
                          class="made-in-content made-in"
                          id="made-in-content"
                        >
                          <span class="pdp-label i18n">제조국</span>
                          <div class="made-in-value">
                            <span id="made-in-region-name">방글라데시</span>
                          </div>
                        </div>
                        <p class="is-richtext a-paragraph made-in-information"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="care-el">
                <div
                  data-component="OAccordion"
                  class="o-accordion pdp align-left full-width"
                  data-component-id="9db61ca8-32d8-47af-96a2-1b4a80450d95"
                >
                  <div class="accordion-header">
                    <a
                      href="#"
                      target="_self"
                      class="a-link accordion-title js-accordion-toggle"
                    >
                      <span class="pdp-value i18n">취급 시 주의사항</span>
                    </a>
                  </div>
                  <div class="accordion-content">
                    <div class="accordion-inner-content">
                      <div class="m-care-instructions">
                        <p class="a-paragraph" id="careDetail">
                          40°C 이하에서 세탁,중간 온도에서 다림질,필요 시
                          비염소계 표백제만 사용 가능,드라이클리닝,걸어서 건조
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="attributes-bottom">
              <div class="description-container">
                <p>
                  긴 우븐 끈이 있고 오픈 백으로 디자인이 된 라운드 넥 롱 슬리브
                  탑입니다. 타이트 핏 스타일입니다.
                </p>
              </div>
              <div class="model-tip">
                <span class="t2 model-size-info">
                  <p>&nbsp;</p>
                  <p>모델의 키는 178cm이며 S/T 사이즈를 착용했습니다.</p>
                </span>
              </div>
              <br />
              <div class="link-wrap">
                <a
                  id="essentialLink"
                  class="a-link a-link-udln essential-info-link open-lightbox"
                  href="#"
                  target="_self"
                  data-template="essential-info-link"
                  data-classes="is-large"
                >
                  상품 필수 표시 정보
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="right-panel breadcrumb-enabled">
          <div class="swatch-container color-swatch-container">
            <div
              data-component="MSwatches"
              class="m-swatches swatch-panel-container colors"
              data-component-id="86d10e0c-9697-49f5-b461-471af9843947"
            >
              <h4 class="a-heading-4 i18n">컬러</h4>
              <div
                data-color-chip-img="hnm40A1643643_5.jpg"
                data-id="swatch_1146809001"
                data-slitmcd="40A1643643"
                data-color-nm="오프 화이트"
                id="swatch_1146809001"
                class="a-swatch js-swatch 
                  is-selected "
              >
                <label id="swatchLabel" class="a-label swatch-label js-a-label">
                  <input type="radio" />
                  <a
                    class="a-button-nostyle a-link colorLink"
                    id="itemInfForm"
                    data-slitm-cd="40A1643643"
                  >
                    <div class="a-swatch-foreground"></div>
                    <div>
                      <img
                        class="a-image ResolveComplete"
                        data-articlecode="1146809001"
                        src="https://image.thehyundai.com/static/4/6/3/64/A1/hnm40A1643643_5_78.jpg"
                        alt="오프 화이트"
                        id="resolve_1"
                      />
                    </div>
                    <p class="sold-out i18n">Sold out</p>
                    <p
                      class="a-paragraph swatch-title"
                      data-articlecode="1146809001"
                    >
                      {" "}
                      오프 화이트
                    </p>
                  </a>
                </label>
                <p class="a-paragraph sold-out-swatch">SOLD OUT</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>

    <HomeButton />
  </>
);

export default Pdp;
