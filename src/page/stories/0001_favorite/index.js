import FavList from "../../../components/common/favorite";
import { useSelector } from "react-redux";
import Head from "./../../../components/stories/common/Head";
import HomeButton from "../../../components/common/homebutton";
import favoriteStyle from "./favorite.stories.module.scss";
import SimpleBanner from "./../../../components/common/simpleBanner";
import InfoIcon from "./infoIcon";

const PageContent = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <>
      <Head />
      <div
        data-component="OPageContent"
        className="o-page-content"
        style={{ "margin-top": "54px" }}
      >
        <div className="content-section favorite stories">
          <div class="u-cols-sm-8-8 u-cols-md-12-12 u-cols-lg-24-24">
            <div class="title">
              <a
                href="https://www.stories.com/kr_krw/shoes/all.html"
                target="_self"
                class="a-link"
              >
                Favorite
              </a>
            </div>
          </div>
          <SimpleBanner
            text={
              <>
                <InfoIcon />{" "}
                <span>
                  위시리스트가 가득 찼습니다. 상품은 최대 50개까지 저장할 수
                  있습니다. 상품을 장바구니로 옮기고/혹은 삭제하여 여유 공간을
                  만들 수 있습니다.
                </span>
              </>
            }
          />
          <div style={{ clear: "both" }}>
            <FavList brand="stories" wholeStyle={favoriteStyle.favorite} />
          </div>
        </div>
      </div>
      <HomeButton />
    </>
  );
};

export default PageContent;
