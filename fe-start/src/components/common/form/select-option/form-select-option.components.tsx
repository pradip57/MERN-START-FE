import { useController } from "react-hook-form";

export type FormSelectOptionProps = {
  name: string;
  options: any;

  control: any;
  errMsg: string;
};

const FormSelectOptionComponent = ({
  name,

  options,
  control,
  errMsg,
}: FormSelectOptionProps) => {
  const { field } = useController({
    name: name,
    control: control,
  });
  return (
    <>
      <select
        {...field}
        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="">{}</option>
      </select>
    </>
  );
};

export default FormSelectOptionComponent;
