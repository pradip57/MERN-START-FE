import "./home.pages.css";

import HomeTitleContentDesignComponent from "../../components/common/home-title/home-title-content-design.components";
import HeaderComponent from "../../components/header/header.components";
import BannerSliderMainComponent from "../../components/banner-slider-main/banner-slider-main.components";

const HomePage: React.FC = () => {
  return (
    <>
      <HeaderComponent />

      <BannerSliderMainComponent />

      <HomeTitleContentDesignComponent />
    </>
  );
};

export default HomePage;
