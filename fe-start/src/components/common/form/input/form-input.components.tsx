import { useController } from "react-hook-form";

export type FormInputComponentProps = {
  type: string;
  name: string;
  placeholder: string;
  control: any;
  errMsg?: string | null | undefined;
};

const FormInputComponent = ({
  type,
  name,
  placeholder,
  control,
  errMsg,
}: FormInputComponentProps) => {
  const { field } = useController({
    name: name,
    control: control,
    defaultValue: "",
  });
  return (
    <>
      <input
        {...field}
        type={type}
        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
      />
      <span className="text-danger">{errMsg}</span>
    </>
  );
};

export default FormInputComponent;
