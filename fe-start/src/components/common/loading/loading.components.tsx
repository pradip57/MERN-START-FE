import { Spinner } from "flowbite-react";

const LoadingComponent = () => {
  return (
    <>
      <div className="my-5 flex justify-center">
        <div className="text-center">
          <Spinner aria-label="Center-aligned spinner example" />
        </div>
      </div>
    </>
  );
};

export default LoadingComponent;
