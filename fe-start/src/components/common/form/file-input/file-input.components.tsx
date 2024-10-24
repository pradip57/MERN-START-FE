export type FileInputComponentProps = {
  name: string;
  setValue: any;
  multiple?: boolean;
};

const FileInputComponent = ({
  name,
  setValue,
  multiple = false,
}: FileInputComponentProps) => {
  const handleChange = (e: any) => {
    if (multiple) {
      setValue(name, Object.values(e.target.files));
    } else {
      setValue(name, e.target.files[0]);
    }
  };
  return (
    <>
      <input
        onChange={handleChange}
        multiple={multiple}
        type="file"
        className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
      />
    </>
  );
};

export default FileInputComponent;
