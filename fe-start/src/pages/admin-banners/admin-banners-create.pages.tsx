import { useForm } from "react-hook-form";
import FormLabelComponent from "../../components/common/form/label/form-label.components";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInputComponent, {
  InputTypeEnum,
} from "../../components/common/form/input/form-input.components";
import FormSubmitBtnComponent from "../../components/common/form/submit-button/form-submit-btn.components";
import FormCancelBtnComponent from "../../components/common/form/cancel-button/form-cancel-btn.components";
import * as Yup from "yup";
import FormSelectOptionComponent from "../../components/common/form/select-option/form-select-option.components";
import FileInputComponent from "../../components/common/form/file-input/file-input.components";
import { useState } from "react";
import { toast } from "react-toastify";
import { setErrorMsg } from "../../config/helper.config";
import adminBannerSvc from "./admin-banner.service";
import { useNavigate } from "react-router-dom";

const AdminBannerCreatePage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const bannerCreateDTO = Yup.object({
    title: Yup.string().required().min(3).max(50),
    link: Yup.string().url().default(null).required(),
    status: Yup.object({
      label: Yup.string()
        .matches(/^(Publish|Unpublish)$/)
        .required("Status label is required"),
      value: Yup.string()
        .matches(/^(active|inactive)$/)
        .required("Status value is required"),
    }).required("Status is required"),
    // start_date: Yup.date().required(),
    // end_date: Yup.date().required(),
    image: Yup.mixed().required(),
  });

  const {
    control,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm({ resolver: yupResolver(bannerCreateDTO) });

  const submitEvent = async (data: any) => {
    try {
      setLoading(true);
      const formattedData = {
        ...data,
        status: data.status.value,
        // start_date: formattoYMD(data.start_date),
        // end_date: formattoYMD(data.end_date),
      };

      await adminBannerSvc.createBanner(formattedData);

      toast.success("Banner Created Succesfully.");
      setLoading(false);
      navigate("/admin/banners");
    } catch (exception) {
      setErrorMsg(exception, setError);
      toast.error("Banner Cannot be added.");
    }
  };
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 p-3 sm:p-5">
        <h1 className="text-teal-600 text-2xl font-bold mb-5">
          Banner Create Page
        </h1>
        <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
          <section className="bg-white dark:bg-gray-900">
            <div className="py-4 px-4 mx-5  ">
              <form onSubmit={handleSubmit(submitEvent)}>
                <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                  <div className="sm:col-span-2">
                    <FormLabelComponent
                      label="Title"
                      htmlFor="title"
                      compulsory={true}
                    />
                    <FormInputComponent
                      name="title"
                      type={InputTypeEnum.TEXT}
                      placeholder="Add banner title"
                      control={control}
                      errMsg={errors?.title?.message as string}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <FormLabelComponent
                      label="Url"
                      htmlFor="link"
                      compulsory={true}
                    />
                    <FormInputComponent
                      name="link"
                      type={InputTypeEnum.LINK}
                      placeholder="Add banner's link"
                      control={control}
                      errMsg={errors?.link?.message as string}
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <FormLabelComponent
                      label="Status"
                      htmlFor="status"
                      compulsory={true}
                    />
                    <FormSelectOptionComponent
                      name="status"
                      options={[
                        {
                          label: "Publish",
                          value: "active",
                        },
                        {
                          label: "Unpublish",
                          value: "inactive",
                        },
                      ]}
                      control={control}
                      errMsg={errors?.status?.message as string}
                    />
                  </div>
                  {/* <div className="w-full">
                    <FormLabelComponent
                      label="Start Date"
                      htmlFor="start_date"
                    />
                    <FormInputComponent
                      name="start_date"
                      type={InputTypeEnum.DATE}
                      placeholder="Add start date"
                      control={control}
                      errMsg={errors?.start_date?.message as string}
                    />
                  </div>
                  <div className="w-full">
                    <FormLabelComponent label="End Date" htmlFor="end_date" />
                    <FormInputComponent
                      name="end_date"
                      type={InputTypeEnum.DATE}
                      placeholder="Add end date"
                      control={control}
                      errMsg={errors?.end_date?.message as string}
                    />
                  </div> */}

                  <div className="sm:col-span-2">
                    <FormLabelComponent
                      label="Banner Image"
                      htmlFor="image"
                      compulsory={true}
                    />
                    <FileInputComponent
                      name="image"
                      setValue={setValue}
                      thumbSize="w-full"
                      thumbClass=""
                      imagePlaceholderSrc="https://placehold.co/500x150?text=No Image"
                      // errMsg={errors?.image?.message as string}
                    />
                  </div>
                </div>
                <div className="flex  gap-5 mt-5">
                  <FormCancelBtnComponent
                    submitTitle="Cancel"
                    link="/admin/banners"
                    loading={loading}
                  />
                  <FormSubmitBtnComponent
                    submitTitle="Add Banner"
                    loading={loading}
                  />
                </div>
              </form>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default AdminBannerCreatePage;
