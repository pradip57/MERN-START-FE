import { FaShop } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import FormLabelComponent from "../../../components/common/form/label/form-label.components";
import FormInputComponent, {
  InputTypeEnum,
} from "../../../components/common/form/input/form-input.components";
import FormSubmitBtnComponent from "../../../components/common/form/submit-button/form-submit-btn.components";
import { useForm } from "react-hook-form";
import FormSelectOptionComponent from "../../../components/common/form/select-option/form-select-option.components";
import FileInputComponent from "../../../components/common/form/file-input/file-input.components";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import TextAreaComponent from "../../../components/common/form/text-area/text-area.components";
import { toast } from "react-toastify";
import authSvc from "../auth.service";
import { useState } from "react";
import { setErrorMsg } from "../../../config/helper.config";

export type RegisterDataType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: any;
  phoneNumber: string;
  address: string;
  image: any;
};

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const registerDTO = Yup.object({
    name: Yup.string().min(2).required(),
    email: Yup.string().email().required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string()
      .oneOf(
        [Yup.ref("password")],
        "Password and Confirm password are not same"
      )
      .required(),
    role: Yup.object({
      label: Yup.string().required("Role label is required"),
      value: Yup.string().required("Role value is required"),
    }).required("Role is required"),

    phoneNumber: Yup.string().required(),
    address: Yup.string().min(10).max(30).required(),
    image: Yup.mixed().optional().nullable().required("Image is required"),
  });
  const {
    control,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerDTO) });

  const submitEvent = async (data: RegisterDataType) => {
    try {
      setLoading(true);
      data = {
        ...data,
        role: data.role.value,
      };
      const response = await authSvc.register(data);
      toast.success(
        "Your account has been registered, Check your email for activation"
      );
      navigate("/");
      // toast.success(response.data.message);
    } catch (exception: any) {
      console.log(exception);
      setErrorMsg(exception, setError);
      toast.error("Error Registering your account");
    } finally {
      setLoading(false);
    }
  };
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

              <form
                onSubmit={handleSubmit(submitEvent)}
                className="mt-8 grid grid-cols-6 gap-6"
              >
                <div className="col-span-6 sm:col-span-6 ">
                  <FormLabelComponent
                    htmlFor="name"
                    label="Name"
                    compulsory={true}
                  />
                  <FormInputComponent
                    type={InputTypeEnum.TEXT}
                    name="name"
                    placeholder="Enter your full name"
                    control={control}
                    errMsg={errors?.name?.message as string}
                  />
                </div>

                <div className="col-span-6 sm:col-span-6 ">
                  <FormLabelComponent
                    htmlFor="email"
                    label="Email"
                    compulsory={true}
                  />

                  <FormInputComponent
                    type={InputTypeEnum.TEXT}
                    name="email"
                    placeholder="Enter your email"
                    control={control}
                    errMsg={errors?.email?.message as string}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <FormLabelComponent
                    htmlFor="password"
                    label="Password"
                    compulsory={true}
                  />

                  <FormInputComponent
                    type={InputTypeEnum.PASSWORD}
                    name="password"
                    placeholder="Enter your new password"
                    control={control}
                    errMsg={errors?.password?.message as string}
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <FormLabelComponent
                    htmlFor="confirmPassword"
                    label="Confirm Password"
                    compulsory={true}
                  />

                  <FormInputComponent
                    type={InputTypeEnum.PASSWORD}
                    name="confirmPassword"
                    placeholder="Re-Enter your password"
                    control={control}
                    errMsg={errors?.confirmPassword?.message as string}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <FormLabelComponent
                    htmlFor="role"
                    label="Role"
                    compulsory={true}
                  />

                  <FormSelectOptionComponent
                    name="role"
                    options={[
                      {
                        label: "Buyer",
                        value: "customer",
                      },
                      {
                        label: "Seller",
                        value: "seller",
                      },
                    ]}
                    control={control}
                    errMsg={errors?.role?.message as string}
                    // multiple={true}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <FormLabelComponent
                    htmlFor="phoneNumber"
                    label="Phone Number"
                    compulsory={true}
                  />

                  <FormInputComponent
                    type={InputTypeEnum.TEL}
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    control={control}
                    errMsg={errors?.phoneNumber?.message as string}
                  />
                </div>
                <div className="col-span-6 sm:col-span-6">
                  <FormLabelComponent
                    htmlFor="address"
                    label="Address"
                    compulsory={true}
                  />

                  <TextAreaComponent
                    name="address"
                    control={control}
                    rows={1}
                    errMsg={errors?.address?.message}
                    placeholder="Enter your address"
                  />
                </div>
                <div className="col-span-6">
                  <FormLabelComponent
                    htmlFor="image"
                    label="Image"
                    compulsory={true}
                  />

                  <FileInputComponent
                    name="image"
                    setValue={setValue}
                    multiple={false}
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
                  <FormSubmitBtnComponent
                    submitTitle="Create account"
                    loading={loading}
                  />

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
