export type HomeBannerSliderComponentProps = {
  image_src: string;
  alt: string;
  link: string;
};

const HomeBannerSliderComponent = ({
  image_src,
  alt,
  link,
}: HomeBannerSliderComponentProps) => {
  return (
    <>
      <div className="flex h-full items-center  justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        <a href={link}>
          <img src={image_src} alt={alt} />
        </a>
      </div>
    </>
  );
};

export default HomeBannerSliderComponent;
