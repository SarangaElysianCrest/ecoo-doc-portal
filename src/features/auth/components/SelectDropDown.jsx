import { Field, FieldHookConfig, useField } from "formik";
import { useEffect, useState } from "react";
import { FunctionComponent, InputHTMLAttributes } from "react";
import Select from "react-select";


const customStyles = {
  option: (provided) => ({
    // borderBottom: "1px dotted #444",
    ...provided,
    padding: 10,
  }),
  control: () => ({
    display: "flex",
    borderWidth: 0,
    justifyContent: "center",
    padding: 2,
  }),
  menu: (base) => ({ ...base, width: 240, backgroundColor: "white" }),
};

const SelectionDropDown = ({
  onChange,
  ...props
}) => {

  const handleChange = (event) => {
    if (onChange) onChange(event);
  };

  return (
    <div>
      <Select
        className={`inputBaseInput   ${props.className}`}
        name={props.name}
        styles={customStyles}
        options={props.options}
        placeholder={props.placeholder}
        value={props.value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SelectionDropDown;
