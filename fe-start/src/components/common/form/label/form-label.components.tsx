const FormLabelComponent = ({
  htmlFor,
  label,
}: {
  htmlFor: string;
  label: string;
}) => {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className="block text-md font-medium text-gray-700"
      >
        {label}
      </label>
    </>
  );
};

export default FormLabelComponent;
