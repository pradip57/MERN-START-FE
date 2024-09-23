import React from "react";
import "./home.pages.css";
import HomeTitleComponent from "../../components/common/home-title/home-title.components";
import HomeTitleDesignComponent from "../../components/common/home-title-design/home-title-design.components";
import HeaderComponent from "../../components/header/header.components";
import BannerSliderComponent from "../../components/banner-slider/banner-slider.components";

const HomePage: React.FC = () => {
  return (
    <>
      <HeaderComponent />

      <BannerSliderComponent />

      <div>
        <HomeTitleDesignComponent>
          <HomeTitleComponent title="Categories" link="/categories" />
        </HomeTitleDesignComponent>

        <HomeTitleDesignComponent>
          <HomeTitleComponent title="Brands" link="/brands" />
        </HomeTitleDesignComponent>

        <HomeTitleDesignComponent>
          <HomeTitleComponent title="Products" link="/products" />
        </HomeTitleDesignComponent>
      </div>
    </>
  );
};

export default HomePage;
