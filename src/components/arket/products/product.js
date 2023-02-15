import { useState } from "react";
import favorite from "./favoriteProducts.module.scss";

const HeartIcon = () => {
  const [heart, setHeart] = useState(false);

  return (
    <svg
      class="heart-icon IconWrapper-module--icon__BcwyJ IconWrapper-module--normal__vM609"
      viewBox="0 0 24 22"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      focusable="false"
      onClick={() => {
        setHeart(!heart);
      }}
    >
      <g
        class="outerElement"
        fill={heart ? "#000" : "#FFF"}
        fill-rule="evenodd"
        onM
      >
        <path
          class="innerElement"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.6643 2.74522C9.60241 1.62778 8.16211 1 6.66029 1C5.15847 1 3.71817 1.62778 2.65627 2.74522C0.447909 5.07299 0.447909 8.84267 2.65627 11.1704L11.9982 21L17.3353 15.3818L21.3377 11.1721C22.4015 10.0556 22.9995 8.53973 23 6.95877C23.0004 5.3778 22.4032 3.86157 21.3401 2.74438C19.1269 0.419997 15.5428 0.420744 13.3305 2.74605L11.9982 4.14789L10.6643 2.74522Z"
          stroke="black"
          stroke-width="2"
          stroke-linejoin="bevel"
        ></path>
      </g>
    </svg>
  );
};

const Product = () => {
  return (
    <div className={`o-product ${favorite.arketFavoriteProduct}`}>
      <a
        href="/ko-kr/men/outerwears/product.padded-cord-vest-beige.1129963001.html"
        target="_self"
        className="a-link no-styling"
        title="패디드 코드 베스트"
        data-image="SMALL"
      >
        <div className="image">
          <div className="m-product-image">
            <div className="cross"></div>
            <div className="">
              <img
                className="a-image default-image lazy entered loaded"
                alt="ARKET default image 1 of 베이지 in 패디드 코드 베스트"
                data-ll-status="loaded"
                src="https://image.thehyundai.com/static/0/0/2/62/A1/hnm40A1622000_2_750.jpg"
              />
              <img
                className="a-image hover-image lazy entered loaded"
                alt="ARKET hover image 1 of 베이지 in 패디드 코드 베스트"
                data-ll-status="loaded"
                src="https://image.thehyundai.com/static/0/0/2/62/A1/hnm40A1622000_1_750.jpg"
              />
            </div>
          </div>
        </div>
      </a>
      <HeartIcon />

      <div className="description style-central-aligned">
        <div className="product-wrapper u-clearfix">
          <a
            href="/ko-kr/men/outerwears/product.padded-cord-vest-beige.1129963001.html"
            target="_self"
            className="a-link"
            data-image="SMALL"
            tabindex="-1"
          >
            <div className="product">
              <span className="i18n">Product</span>
              <span>패디드 코드 베스트</span>
            </div>
          </a>
          <div className="swatches">
            <div
              className="m-swatches"
              data-component="MSwatches"
              data-component-id="56723ef7-2245-4f87-be6d-49ac94b9c321"
            >
              <div>
                <a
                  href="/ko-kr/men/outerwears/product.padded-cord-vest-beige.1129963001.html"
                  target="_self"
                  className="a-link"
                  tabindex="-1"
                >
                  <div className="a-swatch js-swatch current">
                    <input type="radio" name="colors" value="1129963001" />
                    <button type="button" className="a-button-nostyle">
                      <span className="a-swatch-foreground"></span>
                      <div
                        className="a-image"
                        style={{ backgroundColor: "#CDCCC2" }}
                      ></div>
                    </button>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          href="/ko-kr/men/outerwears/product.padded-cord-vest-beige.1129963001.html"
          target="_self"
          className="a-link"
          data-image="SMALL"
        >
          <div className="price">
            <span className="i18n">Price</span>
            <div className="m-product-price">
              <span>150,000원</span>
            </div>
          </div>
        </a>
        <div className="swatches swatches-bottom">
          <div
            className="m-swatches"
            data-component="MSwatches"
            data-component-id="f8ac79c8-d788-4618-8fb3-541c90295924"
          >
            <div>
              <a
                href="/ko-kr/men/outerwears/product.padded-cord-vest-beige.1129963001.html"
                target="_self"
                className="a-link"
                tabindex="-1"
              >
                <div className="a-swatch js-swatch current">
                  <input type="radio" name="colors" value="1129963001" />
                  <button type="button" className="a-button-nostyle">
                    <span className="a-swatch-foreground"></span>
                    <div
                      className="a-image"
                      style={{ backgroundColor: "#CDCCC2" }}
                    ></div>
                  </button>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
