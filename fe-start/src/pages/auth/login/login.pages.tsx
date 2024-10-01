import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink } from "react-router-dom";
import FormLabelComponent from "../../../components/common/form/label/form-label.components";
import FormSubmitBtnComponent from "../../../components/common/form/submit-button/form-submit-btn.components";

const LoginPage = () => {
  const loginDTO = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginDTO) });

  const submitEvent = (credentials: any) => {
    console.log(credentials);
  };
  return (
    <>
      <section className="bg-gray-100 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-8 h-8 mr-2"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
              alt="logo"
            />
            Flowbite
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(submitEvent)}
              >
                <div>
                  <FormLabelComponent htmlFor="email" label="Email" />
                  <input
                    {...register("email")}
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                  />
                  <span className="text-red-600">{errors?.email?.message}</span>
                </div>

                <div>
                  <FormLabelComponent htmlFor="password" label="Password" />
                  <input
                    {...register("password")}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  <span className="text-red-600">
                    {errors?.password?.message}
                  </span>
                </div>
                <div className="flex items-center justify-center">
                  <a
                    href="#"
                    className="text-sm font-medium text-teal-600 hover:underline dark:text-teal-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <FormSubmitBtnComponent submitTitle="Sign In" />
                <p className="text-sm text-center font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <NavLink
                    to="/register"
                    className="font-medium text-teal-600 hover:underline dark:text-teal-500"
                  >
                    Sign up
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
