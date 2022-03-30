import React, { useState } from "react";
import Select from "react-select";

const customStylesDesktop = {
  container: (provided, state) => ({
    //the list of options
    ...provided,
    borderRadius: "1vw",
    padding: "1vh",
    color: "#6e6e6e",
    width: "200px",
    textAlign: "center",
  }),
  menu: (provided, state) => ({
    //the list of options
    ...provided,
    borderRadius: "1vw",
    padding: "1vh",
    color: "#6e6e6e",
  }),

  indicatorSeparator: (provided, state) => ({
    //sperator between value and dropdown arrow
    ...provided,
    display: "none",
  }),

  valueContainer: (provided, state) => ({
    //the input box which shows selected value
    ...provided,
    fontWeight: "normal",
    fontSize: "18px",
    color: "#6e6e6e",
  }),

  control: (provided, state) => ({
    ...provided,
    border: "1px solid #6e6e6e",
    color: "#6e6e6e",
    backgroundColor: "#fff",
    borderRadius: "0.65em",
  }),

  option: (provided, state) => ({
    //styling each option
    ...provided,
    borderTop: "2px solid #E6EFFF",
    borderRadius: "5%",
    color: "#6e6e6e",
    fontSize: "16px",
    width: "90%",
    margin: "auto",
    backgroundColor: state.isSelected ? "rgba(116, 186, 255, 0.33)" : "#fff",
    backgroundColor: state.isFocused ? "rgba(116, 186, 255, 0.33)" : "#fff",
  }),
};

const CoustomSelect = (props) => {
  const [options, setOptions] = useState([
    { value: "1", label: "Class 1" },
    { value: "2", label: "Class 2" },
    { value: "3", label: "Class 3" },
    { value: "4", label: "Class 4" },
    { value: "5", label: "Class 5" },
    { value: "6", label: "Class 6" },
    { value: "7", label: "Class 7" },
    { value: "8", label: "Class 8" },
    { value: "9", label: "Class 9" },
    { value: "10", label: "Class 10" },
  ]);

  return (
    <Select
      options={options}
      styles={customStylesDesktop}
      isSearchable
      defaultValue={options[0]}
      placeholder={"Select Class"}
      onChange={props.onClassChange}
    />
  );
};

export default CoustomSelect;
