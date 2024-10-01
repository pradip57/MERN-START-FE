import { FaShop } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import FormLabelComponent from "../../../components/common/form/label/form-label.components";
import FormInputComponent from "../../../components/common/form/input/form-input.components";
import FormSubmitBtnComponent from "../../../components/common/form/submit-button/form-submit-btn.components";
import { useForm } from "react-hook-form";

const RegisterPage = () => {

  const {control,handleSubmit,formState:{errors}} = useForm()

  const submitEvent = (data:any) =>{
    console.log(data)
  }
  return (
    <>
      <section className="bg-gray-100">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
            <img
              alt=""
              src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
            />

            <div className="hidden lg:relative lg:block lg:p-12">
              <NavLink className="block" to="/">
                <FaShop className="text-white text-3xl" />
              </NavLink>

              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to Sajilo Shopping
              </h2>

              <p className="mt-4 leading-relaxed text-white/90">
                Sajilo Shopping is an online store offering a hassle-free
                shopping experience with a wide range of quality products.
              </p>
            </div>
          </section>

          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="relative -mt-16 block lg:hidden">
                <NavLink
                  className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                  to="/"
                >
                  <FaShop className="text-teal-500 text-3xl" />
                </NavLink>

                <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                  Welcome to Sajilo Shopping
                </h1>

                <p className="mt-4 leading-relaxed text-gray-500">
                  Sajilo Shopping is an online store offering a hassle-free
                  shopping experience with a wide range of quality products.
                </p>
              </div>

              <form onSubmit={handleSubmit(submitEvent)} className="mt-8 grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-6 ">
                  <FormLabelComponent htmlFor="name" label="Name" />
                  <FormInputComponent
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    control={control}
                    errMsg={errors?.name?.message as string} 
                  />
                </div>

                <div className="col-span-6 sm:col-span-6 ">
                  <FormLabelComponent htmlFor="email" label="Email" />

                  <FormInputComponent
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    control={control}
                    errMsg={errors?.name?.message as string} 
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <FormLabelComponent htmlFor="password" label="Password" />

                  <FormInputComponent
                    type="password"
                    name="password"
                    placeholder="Enter your new password"
                    control={control}
                    errMsg={errors?.name?.message as string} 
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <FormLabelComponent
                    htmlFor="confirmPassword"
                    label="Confirm Password"
                  />

                  <FormInputComponent
                    type="password"
                    name="confirmPassword"
                    placeholder="Re-Enter your password"
                    control={control}
                    errMsg={errors?.name?.message as string} 
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <FormLabelComponent htmlFor="role" label="Role" />

                  <select
                    id="role"
                    name="role"
                    className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="seller">Seller</option>
                    <option value="customer">Buyer</option>
                  </select>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <FormLabelComponent
                    htmlFor="phoneNumber"
                    label="Phone Number"
                  />

                  <FormInputComponent
                    type="tel"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    control={control}
                    errMsg={errors?.name?.message as string} 
                  />
                </div>
                <div className="col-span-6 sm:col-span-6">
                  <FormLabelComponent htmlFor="address" label="Address" />

                  <textarea
                    id="address"
                    name="address"
                    style={{ resize: "none" }}
                    rows={1}
                    className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>
                <div className="col-span-6">
                  <FormLabelComponent htmlFor="image" label="Image" />

                  <input
                    type="file"
                    id="image"
                    name="image"
                    className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  />
                </div>

                <div className="col-span-6">
                  <p className="text-sm text-gray-500">
                    By creating an account, you agree to our
                    <NavLink
                      to="/terms-and-conditions"
                      className="text-gray-700 hover:text-teal-800 underline"
                    >
                      {" "}
                      terms and conditions{" "}
                    </NavLink>
                    and {""}
                    <NavLink
                      to="privacy-policy"
                      className="text-gray-700 hover:text-teal-800 underline"
                    >
                      privacy policy
                    </NavLink>
                    .
                  </p>
                </div>

                <div className="col-span-6  sm:items-center sm:gap-2">
                  <FormSubmitBtnComponent submitTitle="Create account" />

                  <p className="mt-4 text-sm text-center text-gray-500 sm:mt-2">
                    Already have an account?
                    <NavLink
                      to="/login"
                      className=" text-gray-700 underline hover:text-teal-800"
                    >
                      &nbsp;Log in
                    </NavLink>
                    .
                  </p>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
