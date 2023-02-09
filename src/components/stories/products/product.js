import HeartIcon from "./HeartIcon";

const Product = () => (
  <div className="o-product" data-index="0">
    <a
      href="https://www.stories.com/kr_krw/clothing/all/product.scallop-neck-knit-top-multi-striped.1049698005.html?slitmCd=40A1642644&amp;sectId=127029"
      target="_self"
      className="a-link"
    >
      <div className="product-image">
        <div className="m-product-image">
          <img
            className="a-image default-image"
            src="https://image.thehyundai.com/static/4/6/2/64/A1/hnm40A1642644_6_568.jpg"
            alt="&amp;OS image 0 of 그린 in 스캘럽 넥 니트 탑"
          />
          <img
            className="a-image hover-image"
            src="https://image.thehyundai.com/static/4/6/2/64/A1/hnm40A1642644_1_568.jpg"
            alt="&amp;OS image 0 of 그린 in 스캘럽 넥 니트 탑"
          />
          <HeartIcon yPos={10} />
        </div>
      </div>
      <div className="description">
        <div className="product-title">
          <label className="a-label js-a-label">스캘럽 넥 니트 탑</label>
        </div>
        <div className="product-promo-marker" style={{ color: "#000000" }}>
          ORGANIC COTTON
        </div>
        <div className="product-colours">컬러 (2)</div>
        <div className="m-product-price">
          <label className="a-label js-a-label price">79,000</label>
        </div>
        <div
          className="product-promo-marker"
          style={{ color: "#ff00cc" }}
        ></div>
      </div>
    </a>
  </div>
);

export default Product;
