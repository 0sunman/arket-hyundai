import HomeButton from "../../../components/common/homebutton";
import Head from "../../../components/cos/common/Head";
import cosProductSaleStyle from "./cos-product-sale.module.scss";
const CosProductSalePDP = ({ list }) => {
  return (
    <>
      <Head />
      <div
        data-component="OPage"
        className="layout-inside"
        data-component-id="c8e05eae-190e-4470-8e3b-4df55cbfc0d1"
      >
        <div
          data-component="OPageContent"
          className="o-page-content"
          data-component-id="e61d56b4-5c33-420e-972a-aa37e657d521"
          style={{ "margin-top": "0px" }}
        >
          <div class="content-section">
            <div class="u-cols-lg-24-24 u-cols-md-12-12 u-cols-sm-12-12 u-row u-full-width q-min-height-pdp">
              <div class="contain">
                <div class="u-cols-lg-11-24 u-cols-md-6-12 u-cols-sm-12-12 u-no-padding">
                  <div
                    data-component="OProductGallery"
                    class="o-product-gallery swiper-initialized"
                    data-component-id="f981bc8c-774e-4c68-8a4a-ae939906ba05"
                  >
                    <div class="main-image-wrapper">
                      <ul>
                        <li class="prd-main-img" color-value="40A1650889">
                          <div class="m-product-image">
                            <img
                              src="https://place-hold.it/500x700"
                              alt="COS 플리티드 롱 티셔츠 드레스의 블루 / 멀티컬러 ECOMLook입니다."
                              class="default-image"
                              id="gallery-product-0"
                              onerror="hd.common.noImage(this, 3)"
                            />
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="u-cols-spacer u-cols-lg-3-24 u-not-mobile u-not-tablet"></div>
                <div
                  class={
                    "u-cols-lg-7-24 u-cols-md-6-12 u-cols-sm-12-12 u-no-padding-mobile " +
                    cosProductSaleStyle.cosProductSale
                  }
                >
                  <div
                    data-component="OProductInformation"
                    class="o-product-information scroll-stopped"
                    data-component-id="04a30e21-22c5-4e94-8d11-4b5593da0f96"
                    style={{ top: "0px" }}
                  >
                    <form
                      data-component="OForm"
                      class="o-form add-to-bag"
                      action="/someURL"
                      method="POST"
                      data-component-id="e8439b23-dcf0-4ead-9cef-77f6cb7d3abe"
                      tabindex="1"
                    >
                      <div class="m-product-marker m-product-markers"></div>
                      <div id="newmarker" class="marker-label temp-marker">
                        <label class="a-label js-a-label">NEW</label>
                      </div>
                      <div class="title">
                        <h1 class="a-paragraph" id="product-detail-name">
                          플리티드 롱 티셔츠 드레스
                        </h1>
                      </div>
                      <div class="m-product-price" id="prdDetailPrice">
                        <label
                          id="priceValue"
                          class="a-label js-a-label price textLineThrough"
                          style={{
                            cursor: "pointer",
                          }}
                        >
                          150,000
                        </label>
                        <label class="a-label js-a-label price textSalePrice">
                          15,000
                        </label>
                        <p class="textSaleDetail">90% OFF</p>
                      </div>

                      <div
                        id="productMarkerChange"
                        class="m-product-marker m-product-markers"
                      ></div>
                      <div class="marker-label temp-marker"></div>

                      <div class="color-section">
                        <p class="a-paragraph">COLOUR</p>
                        <div
                          data-component="MDropdown"
                          class="m-dropdown pdp-dropdown is-filled"
                          data-component-id="c72a2cc4-6127-4db4-bfdb-8d0c6b5b06c4"
                        >
                          <div class="colorchip-wrap" id="pdpSelectedColor">
                            <img
                              class="a-image placeholder-image"
                              src="https://image.thehyundai.com/static/8/8/0/65/A1/hnm40A1650889_04_1086341_005_001_30.jpg"
                              onerror="this.src='https://image.thehyundai.com/cos_cdn/images/cos/02/noimg_30.jpg';"
                            />
                          </div>
                          <label class="a-label js-a-label placeholder">
                            <span>블루 / 멀티</span>
                          </label>
                          <span class="a-icon-close"></span>
                          <input
                            name="selectColor"
                            value="블루 / 멀티"
                            class="js-input"
                            tabindex="100"
                          />
                          <span class="a-icon-arrow-down-small"></span>
                          <ul class="list-wrapper">
                            <li>
                              <ul class="options">
                                <li
                                  class="a-option color-list pdp is-active"
                                  data-value="40A1650889"
                                  data-ostkexpsstat=""
                                >
                                  <div class="colorchip-wrap">
                                    <img
                                      class="a-image option-swatch"
                                      src="https://image.thehyundai.com/static/8/8/0/65/A1/hnm40A1650889_04_1086341_005_001_30.jpg"
                                      onerror="this.src='https://image.thehyundai.com/cos_cdn/images/cos/02/noimg_30.jpg';"
                                    />
                                  </div>
                                  <span class="color-name">블루 / 멀티</span>
                                </li>
                                <li
                                  class="a-option color-list pdp"
                                  data-value="40A1568584"
                                  data-ostkexpsstat=""
                                >
                                  <div class="colorchip-wrap">
                                    <img
                                      class="a-image option-swatch"
                                      src="https://image.thehyundai.com/static/8/5/8/56/A1/hnm40A1568584_04_1086341_001_001_30.jpg"
                                      onerror="this.src='https://image.thehyundai.com/cos_cdn/images/cos/02/noimg_30.jpg';"
                                    />
                                  </div>
                                  <span class="color-name">블랙</span>
                                </li>
                                <li
                                  class="a-option color-list pdp"
                                  data-value="40A1650909"
                                  data-ostkexpsstat=""
                                >
                                  <div class="colorchip-wrap">
                                    <img
                                      class="a-image option-swatch"
                                      src="https://image.thehyundai.com/static/0/9/0/65/A1/hnm40A1650909_04_1086341_003_001_30.jpg"
                                      onerror="this.src='https://image.thehyundai.com/cos_cdn/images/cos/02/noimg_30.jpg';"
                                    />
                                  </div>
                                  <span class="color-name">퍼플</span>
                                </li>
                              </ul>
                              <ul class="bottom-option">
                                <li>취소</li>
                              </ul>
                            </li>
                          </ul>
                          <span class="error-msg"></span>
                        </div>
                      </div>
                      <div class="size-select">
                        <p class="a-paragraph">SIZE</p>
                        <div
                          data-component="ASizeSwatch"
                          class="a-size-swatch"
                          color-value="40A1650889"
                          data-component-id="0259d65c-6b77-4b16-b1aa-f300fc5eaeb1"
                        >
                          <div
                            class="size-options pdp in-stock"
                            slitm-cd="40A1650889"
                            uitm-cd="00001"
                            data-code="1086341005002"
                            data-value="XS"
                          >
                            <span>XS</span>
                          </div>
                          <div
                            class="size-options pdp in-stock"
                            slitm-cd="40A1650889"
                            uitm-cd="00002"
                            data-code="1086341005003"
                            data-value="S"
                          >
                            <span>S</span>
                          </div>
                          <div
                            class="size-options pdp out-of-stock"
                            slitm-cd="40A1650889"
                            uitm-cd="00003"
                            data-code="1086341005004"
                            data-value="M"
                          >
                            <span>M</span>
                            <span class="tooltip-text">품절</span>
                          </div>
                          <div
                            class="size-options pdp in-stock out-of-stock-soon"
                            slitm-cd="40A1650889"
                            uitm-cd="00004"
                            data-code="1086341005005"
                            data-value="L"
                          >
                            <span class="few-mount"></span>
                            <span>L</span>
                          </div>
                        </div>
                        <div
                          data-component="ASizeSwatch"
                          class="a-size-swatch"
                          color-value="40A1568584"
                          style={{ display: "none" }}
                          data-component-id="e82efdbe-dfa4-4d65-aea4-b8ff4e11453a"
                        >
                          <div
                            class="size-options pdp in-stock"
                            slitm-cd="40A1568584"
                            uitm-cd="00001"
                            data-code="1086341001002"
                            data-value="XS"
                            style={{ display: "none" }}
                          >
                            <span>XS</span>
                          </div>
                          <div
                            class="size-options pdp in-stock"
                            slitm-cd="40A1568584"
                            uitm-cd="00002"
                            data-code="1086341001003"
                            data-value="S"
                            style={{ display: "none" }}
                          >
                            <span>S</span>
                          </div>
                          <div
                            class="size-options pdp out-of-stock"
                            slitm-cd="40A1568584"
                            uitm-cd="00003"
                            data-code="1086341001004"
                            data-value="M"
                            style={{ display: "none" }}
                          >
                            <span>M</span>
                            <span class="tooltip-text">품절</span>
                          </div>
                          <div
                            class="size-options pdp out-of-stock"
                            slitm-cd="40A1568584"
                            uitm-cd="00004"
                            data-code="1086341001005"
                            data-value="L"
                            style={{ display: "none" }}
                          >
                            <span>L</span>
                            <span class="tooltip-text">품절</span>
                          </div>
                        </div>
                        <div
                          data-component="ASizeSwatch"
                          class="a-size-swatch"
                          color-value="40A1650909"
                          style={{ display: "none" }}
                          data-component-id="ef177fff-b519-48c2-84b3-ee5352d534d3"
                        >
                          <div
                            class="size-options pdp in-stock"
                            slitm-cd="40A1650909"
                            uitm-cd="00001"
                            data-code="1086341003002"
                            data-value="XS"
                            style={{ display: "none" }}
                          >
                            <span>XS</span>
                          </div>
                          <div
                            class="size-options pdp in-stock"
                            slitm-cd="40A1650909"
                            uitm-cd="00002"
                            data-code="1086341003003"
                            data-value="S"
                            style={{ display: "none" }}
                          >
                            <span>S</span>
                          </div>
                          <div
                            class="size-options pdp in-stock"
                            slitm-cd="40A1650909"
                            uitm-cd="00003"
                            data-code="1086341003004"
                            data-value="M"
                            style={{ display: "none" }}
                          >
                            <span>M</span>
                          </div>
                          <div
                            class="size-options pdp in-stock"
                            slitm-cd="40A1650909"
                            uitm-cd="00004"
                            data-code="1086341003005"
                            data-value="L"
                            style={{ display: "none" }}
                          >
                            <span>L</span>
                          </div>
                        </div>
                        <a
                          href="#"
                          target="_self"
                          class="q-udln open-lightbox"
                          data-template="sizeguide-popup"
                          data-classes="is-large"
                        >
                          사이즈 가이드
                        </a>
                      </div>
                      <div id="button_add_cart_add_wishlist">
                        <button
                          type="button"
                          id="addBagBtn"
                          class="a-button is-primary is-disabled"
                          outofstock="false"
                        >
                          장바구니 담기
                        </button>
                        <button
                          type="button"
                          id="wish-button"
                          class="a-button is-primary is-disabled is-no-active"
                        ></button>
                      </div>
                      <div class="description-header">
                        <span class="description is-selected">상품 설명</span>
                        <span class="dash">-</span>
                        <span class="delivery-and-returns">
                          배송 &amp; 반품
                        </span>
                        <span class="dash">-</span>
                        <span class="details">상세 정보</span>
                        <span class="dash details-qrcode-dash">-</span>
                        <span class="details-qrcode">QR</span>
                      </div>
                      <div class="product-description">
                        <div class="description-text is-open">
                          <p>
                            COS 아틀리에가 선보이는 컨템포러리 감각의 티셔츠
                            드레스입니다. 추상적인 패턴으로 재해석되었으며,
                            팔꿈치길이의 소매와 플리츠 디자인으로 이루어져
                            있습니다.
                            <br />- 측면 슬립 포켓
                            <br />- 뒷면 지퍼 여밈
                            <br />- 이 제품은 생산 및 소비 과정 폐기물을
                            재활용한 리사이클 폴리에스터 소재로 제작되어 제한된
                            자원에 대한 수요를 줄일 수 있습니다
                            <br />
                            61% 폴리에스터, 32% 리사이클 폴리에스터, 7%
                            엘라스테인 / 기계 세탁 가능
                            <br />S 사이즈 뒷면의 길이는 123.5cm 입니다 / 모델은
                            S 사이즈를 착용 중입니다
                          </p>
                          <br />
                          <a
                            href="#"
                            id="essentialLink"
                            target="_self"
                            class="a-link-pdp-essential q-udln open-lightbox"
                            data-template="essential-info-link"
                            data-classes="is-large acco"
                          >
                            상품 필수 표시 정보
                          </a>
                          <br />
                          <br />
                        </div>
                        <div class="delivery-and-returns-text">
                          <p class="a-paragraph">
                            영업일 기준 1~3일 내 배송
                            <br />
                            배송비 무료 | 무료 반품
                            <br />
                            <br />
                            목적지: 대한민국 | 배송료 무료 영업일 기준 1~3일
                            소요됩니다. 반품 배송비 무료
                            <br />
                            <br />
                            배송에 대한 자세한 내용은{" "}
                            <a
                              href="#"
                              target="_self"
                              class="a-link open-lightbox q-udln"
                              data-template="delivery-popup"
                              data-classes="is-large acco"
                            >
                              여기
                            </a>
                            를 클릭하십시오.
                            <br />
                            우리의 반품 및 환불 정책에 대한 자세한 내용은{" "}
                            <a
                              href="#"
                              target="_self"
                              class="a-link open-lightbox q-udln"
                              data-template="returnsandexchange-popup"
                              data-classes="is-large acco"
                            >
                              여기
                            </a>
                            를 참조하십시오.
                            <br />
                            <br />
                            일부 군사지역은 배송이 불가능할 수 있습니다.
                            <br />
                            <br />
                            위생상의 이유로 속옷 및 이어링 제품은 반품이
                            불가합니다. (결함의 경우 제외)
                          </p>
                        </div>
                        <div class="details-text">
                          <p class="a-paragraph"></p>
                          <div class="a-paragraph free-text">
                            93% 폴리에스터, 7% 엘라스테인 / 기계 세탁 가능
                            <br />
                            <br />
                            <br />
                            제품 관리에 대해 자세한 내용은{" "}
                            <a
                              href="#"
                              target="_self"
                              class="a-link open-lightbox q-udln"
                              data-template="productcare-popup"
                              data-classes="is-large acco"
                            >
                              여기
                            </a>
                            를 클릭하십시오.
                            <br />
                            Product no. 1086341005
                            <br />
                            <p></p>
                          </div>
                          <span class="a-icon-down-arrow"></span>
                        </div>
                        <div class="qr-code">
                          <p class="a-paragraph">
                            <img
                              src="https://www.cos.com/ko-kr/pda/qrCode.html?width=130&amp;height=130&amp;detailUrl=https://www.cos.com/ko-kr/women/trending-now/product.pleated-midi-t-shirt-dress-bright-blue,-navy.1086341005.html?slitmCd=40A1650889&amp;utm_source=stores&amp;utm_medium=qr&amp;utm_campaign=feb2019&amp;utm_content=1086341005"
                              alt="qrcode"
                            />
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeButton />
    </>
  );
};

export default CosProductSalePDP;
