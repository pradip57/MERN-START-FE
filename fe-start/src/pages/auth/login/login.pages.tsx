import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  const loginDTO = yup.object({
    username: yup.string().email().required(),
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
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(submitEvent)}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    {...register("username")}
                    type="email"
                    name="username"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                  />
                  <span className="text-red-600">
                    {errors?.username?.message}
                  </span>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    {...register("password")}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                <button
                  type="submit"
                  className="w-full text-white bg-teal-600 hover:bg-teal-700 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800"
                >
                  Sign in
                </button>
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
