export type FormInputComponentProps = {
  type: string;
  id: string;
  placeholder: string;
};

const FormInputComponent = ({
  type,
  id,
  placeholder,
}: FormInputComponentProps) => {
  return (
    <>
      <input
        type={type}
        name={id}
        id={id}
        className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-teal-600 focus:border-teal-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
      />
    </>
  );
};

export default FormInputComponent;
