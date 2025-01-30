import { NavLink } from "react-router-dom";

//
const FormCancelBtnComponent = ({
  submitTitle,
  loading,
  link
}: {
  submitTitle: string;
  loading?: boolean;
  link:string
}) => {
  return (
    <>
      <NavLink to={link}>
        <button
          disabled={loading}
          type="reset"
          className="disabled:cursor-not-allowed disabled:text-slate-400 w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
        >
          {submitTitle}
        </button>
      </NavLink>
    </>
  );
};

export default FormCancelBtnComponent;
