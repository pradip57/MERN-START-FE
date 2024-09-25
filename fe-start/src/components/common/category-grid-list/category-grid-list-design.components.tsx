import CategoryGridListComponent from "./category-grid-list.components";

const CategoryGridListDesignComponent = () => {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mt-5">
        <CategoryGridListComponent />
        <CategoryGridListComponent />
        <CategoryGridListComponent />
        <CategoryGridListComponent />
        <CategoryGridListComponent />
        <CategoryGridListComponent />
      </div>
    </>
  );
};

export default CategoryGridListDesignComponent;
