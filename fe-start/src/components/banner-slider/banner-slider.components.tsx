import { Carousel } from "flowbite-react";
import banner1 from "../../assets/images/banners/banner4.jpg";
import banner2 from "../../assets/images/banners/banner5.jpg";
import banner3 from "../../assets/images/banners/banner6.jpg";
import HomeBannerSliderComponent from "../../components/common/home-banner-slider/home-banner-slider.components";

const BannerSliderComponent = () => {
  return (
    <>
      <div className="h-[521px] bg-gray-400">
        <Carousel slideInterval={5000}>
          <HomeBannerSliderComponent
            image_src={banner1}
            alt="banner1"
            link="/banner1"
          />
          <HomeBannerSliderComponent
            image_src={banner2}
            alt="banner2"
            link="/banner2"
          />
          <HomeBannerSliderComponent
            image_src={banner3}
            alt="banner3"
            link="/banner3"
          />
        </Carousel>
      </div>
    </>
  );
};

export default BannerSliderComponent;
