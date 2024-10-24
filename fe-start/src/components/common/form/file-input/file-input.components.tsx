import { useState } from "react";

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
  const [thumb, setThumb] = useState<any>();

  const handleChange = (e: any) => {
    if (multiple) {
      setValue(name, Object.values(e.target.files));
      setThumb(Object.values(e.target.files));
    } else {
      setValue(name, e.target.files[0]);
      setThumb(e.target.files[0]);
    }
  };
  return (
    <>
      <div className="flex">
        <input
          onChange={handleChange}
          multiple={multiple}
          type="file"
          className={`mt-1 block ${
            multiple ? "w-full" : "w-3/4"
          } text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400`}
        />
      </div>
      <div className="flex">
        {thumb && Array.isArray(thumb) ? (
          <>mulltiple images</>
        ) : typeof thumb === "object" ? (
          <>
            <img src={URL.createObjectURL(thumb)} />
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default FileInputComponent;
