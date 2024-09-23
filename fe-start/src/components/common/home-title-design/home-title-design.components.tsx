const HomeTitleDesignComponent = ({ children }: any) => {
  return (
    <>
      <div className="bg-slate-200 mt-5">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4 ">
          <div className="flex items-center justify-between ">{children}</div>
        </div>
      </div>
    </>
  );
};

export default HomeTitleDesignComponent;
