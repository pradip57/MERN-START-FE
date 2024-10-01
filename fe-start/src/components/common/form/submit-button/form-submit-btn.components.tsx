const FormSubmitBtnComponent = ({ submitTitle }: { submitTitle: string }) => {
  return (
    <>
      <button
        type="submit"
        className="w-full text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
      >
        {submitTitle}
      </button>
    </>
  );
};

export default FormSubmitBtnComponent;
