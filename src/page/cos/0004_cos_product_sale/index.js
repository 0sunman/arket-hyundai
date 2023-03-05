import HomeButton from "../../../components/common/homebutton";
import Head from "../../../components/cos/common/Head";
import cosProductSaleStyle from "./cos-product-sale.module.scss";

const CosProductSale = ({ list }) => {
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
          <div class="u-cols-sm-12-12 u-cols-md-12-12 u-cols-lg-24-24 u-row">
            <div
              id="category-list"
              class="o-category-listing is-four-cols"
              data-component="ProductContainer"
              data-component-id="f9425c8c-4fb9-428f-8b56-6ef0d1f9ce74"
            >
              <div class="column">
                <a
                  style={{ cursor: "pointer" }}
                  onclick="$WG_StartWebGate(228, '/ko-kr/women/trending-now/product.pleated-midi-t-shirt-dress-bright-blue,-navy.1086341005.html?slitmCd=40A1650889')"
                  target="_self"
                  class="a-link no-styling"
                >
                  <div
                    class="o-product"
                    data-index="1"
                    data-id="1086341005"
                    data-name="PLEATED MIDI T-SHIRT DRESS"
                    data-category="/women/trending-now"
                    data-color="BRIGHT BLUE, NAVY"
                    data-sellprc="150000"
                    data-csmprc="150000"
                    data-list-name="Trending Now "
                    onclick="onClickProductGa(this)"
                  >
                    <div class="image-holder">
                      <div class="image-if-hover">
                        <div class="m-product-image">
                          <img
                            class="a-image default-image initial loading"
                            src="https://image.thehyundai.com/static/8/8/0/65/A1/hnm40A1650889_1086341005_1_400.JPG"
                            alt="COS default image 1 of 블루/멀티 in 플리티드 롱 티셔츠 드레스"
                            onerror="this.src='https://image.thehyundai.com/cos_cdn/images/cos/02/noimg_400.jpg';"
                            data-was-processed="true"
                          />
                          <img
                            class="a-image hover-image"
                            src="https://image.thehyundai.com/static/8/8/0/65/A1/hnm40A1650889_02_1086341_005_001_400.jpg"
                            alt="COS hover image 1 of 블루/멀티 in 플리티드 롱 티셔츠 드레스"
                            onerror="this.src='https://image.thehyundai.com/cos_cdn/images/cos/02/noimg_400.jpg';"
                          />
                        </div>
                      </div>
                    </div>
                    <div
                      class={
                        "description " + cosProductSaleStyle.cosProductSale
                      }
                    >
                      <div class="product-variants">
                        <label class="a-label js-a-label">Colours (3)</label>
                      </div>
                      <label
                        class="a-label js-a-label product-title"
                        style={{ cursor: "pointer" }}
                      >
                        플리티드 롱 티셔츠 드레스
                      </label>
                      <span
                        class="wish-button 40A1650889"
                        title="위시리스트에 추가"
                        data-value="40A1650889"
                        data-slitmcd="40A1650889"
                      >
                        <img
                          id="unwished_pc"
                          src="https://image.thehyundai.com/cos_cdn/icon/heart.svg"
                          style={{ display: "inline" }}
                        />
                        <img
                          id="wished_pc"
                          style={{ display: "none" }}
                          src="https://image.thehyundai.com/cos_cdn/icon/heart_active.svg"
                        />
                      </span>
                      <div class="m-product-price" style={{ height: "auto" }}>
                        <label
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
                      <div class="marker-label temp-marker">
                        <label class="a-label js-a-label">NEW</label>
                      </div>
                      <div class="m-swatches sm">
                        <div class="picked-color"></div>
                        <div class="a-swatch js-swatch">
                          <label class="a-label js-a-label">
                            <span onclick="event.stopPropagation(); location.href='/ko-kr/women/trending-now/product.pleated-midi-t-shirt-dress-bright-blue,-navy.1086341005.html';">
                              <img
                                class="a-image initial loading"
                                src="https://image.thehyundai.com/static/8/8/0/65/A1/hnm40A1650889_04_1086341_005_001_30.jpg"
                                style={{ cursor: "pointer" }}
                                data-was-processed="true"
                              />
                            </span>
                          </label>
                        </div>
                        <div class="a-swatch js-swatch">
                          <label class="a-label js-a-label">
                            <span onclick="event.stopPropagation(); location.href='/ko-kr/women/trending-now/product.pleated-midi-t-shirt-dress-black.1086341001.html';">
                              <img
                                class="a-image initial loading"
                                src="https://image.thehyundai.com/static/8/5/8/56/A1/hnm40A1568584_04_1086341_001_001_30.jpg"
                                style={{ cursor: "pointer" }}
                                data-was-processed="true"
                              />
                            </span>
                          </label>
                        </div>
                        <div class="a-swatch js-swatch">
                          <label class="a-label js-a-label">
                            <span onclick="event.stopPropagation(); location.href='/ko-kr/women/trending-now/product.pleated-midi-t-shirt-dress-purple.1086341003.html';">
                              <img
                                class="a-image initial loading"
                                src="https://image.thehyundai.com/static/0/9/0/65/A1/hnm40A1650909_04_1086341_003_001_30.jpg"
                                style={{ cursor: "pointer" }}
                                data-was-processed="true"
                              />
                            </span>
                          </label>
                        </div>
                      </div>
                      <label class="a-label js-a-label product-brand">
                        COS
                      </label>
                      <span
                        class="mo-wish-button wish-button 40A1650889"
                        title="위시리스트에 추가"
                        data-value="40A1650889"
                        data-slitmcd="40A1650889"
                      >
                        <img
                          id="unwished_mo"
                          src="https://image.thehyundai.com/cos_cdn/icon/heart.svg"
                          style={{ display: "inline" }}
                        />
                        <img
                          id="wished_mo"
                          style={{ display: "none" }}
                          src="https://image.thehyundai.com/cos_cdn/icon/heart_active.svg"
                        />
                      </span>
                      <img
                        class="a-image default-image"
                        style={{ display: "none" }}
                        id="40A1650889"
                        src="https://image.thehyundai.com/static/8/8/0/65/A1/hnm40A1650889_1086341005_1_720.JPG"
                        onerror="this.src='https://image.thehyundai.com/cos_cdn/images/cos/02/noimg_720.jpg';"
                      />
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HomeButton />
    </>
  );
};

export default CosProductSale;
