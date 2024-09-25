import "./home.pages.css";

import HomeTitleContentDesignComponent from "../../components/common/home-title/home-title-content-design.components";

import BannerSliderMainComponent from "../../components/banner-slider-main/banner-slider-main.components";

const HomePage: React.FC = () => {
  return (
    <>
      <BannerSliderMainComponent />

      <HomeTitleContentDesignComponent />
    </>
  );
};

export default HomePage;
