import { useController } from "react-hook-form";
import Select from "react-select";

export type OptionType = {
  label: string;
  value: string;
};
export type FormSelectOptionProps = {
  name: string;
  options: OptionType[];
  control: any;
  errMsg: string | null | undefined;
  multiple?: boolean;
};

const FormSelectOptionComponent = ({
  name,
  options,
  control,
  errMsg,
  multiple = false,
}: FormSelectOptionProps) => {
  const { field } = useController({
    name: name,
    control: control,
  });
  return (
    <>
      <Select
        options={options}
        {...field}
        isMulti={multiple}
        isClearable={true}
        isSearchable={false}
        styles={{
          control: (base, state) => ({
            ...base,
            borderRadius: "0.5rem",
            minHeight: "42px",
            boxShadow: state.isFocused ? "0 0 0 1.5px #008080" : "none",
            borderColor: state.isFocused ? "#d1d5db" : base.borderColor,
            "&:hover": {
              borderColor: "#d1d5db",
            },
          }),
          menu: (base) => ({
            ...base,
            backgroundColor: "#ffffff", // Custom background color for the dropdown menu (dark background)
            borderRadius: "0.5rem", // Optional: rounded corners for the dropdown
          }),
          menuList: (base) => ({
            ...base,
            backgroundColor: "#ffffff", // Ensures the background of the menu items is consistent
          }),
          option: (base, state) => ({
            ...base,
            backgroundColor: state.isSelected
              ? "#14b8a6"
              : state.isFocused
              ? "#E2E8F0"
              : "#E2E8F0", // Highlight selected or focused options
          }),
        }}
        className="mt-1 block w-full"
      />
      <span className="text-red-800">{errMsg}</span>
    </>
  );
};

export default FormSelectOptionComponent;
