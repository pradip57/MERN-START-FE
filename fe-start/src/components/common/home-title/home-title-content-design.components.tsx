import CategoryGridListDesignComponent from "../category-grid-list/category-grid-list-design.components";
import HomeTitleComponent from "./home-title.components";

const HomeTitleContentDesignComponent = () => {
  return (
    <>
      <div className="bg-slate-200 mt-5">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4 ">
          <div className="flex items-center justify-between ">
            <HomeTitleComponent title="Categories" link="/categories" />
          </div>
          <CategoryGridListDesignComponent />
        </div>
      </div>

      <div className="bg-slate-200 mt-5">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4 ">
          <div className="flex items-center justify-between ">
            <HomeTitleComponent title="Brands" link="/brands" />
          </div>
        </div>
      </div>

      <div className="bg-slate-200 mt-5">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4 ">
          <div className="flex items-center justify-between ">
            <HomeTitleComponent title="Products" link="/products" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTitleContentDesignComponent;
