import { servicesOptions as options } from "@/mock/mock-data";
export const loadOptions = (searchValue, callback) => {
  setTimeout(() => {
    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(searchValue.toLowerCase())
    );
    callback(filteredOptions);
  }, 1000);
};
// Styling selections

export const colorStyles = {
  control: (styles) => {
    return {
      ...styles,
      borderColor: "#FFFFFF80",

      backgroundColor:
        "linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)",
      borderRadius: "10px",
      "& input::placeholder": {
        color: "#fff",
        content: '"Your Custom Placeholder Text"', // Change the placeholder text here
      },
    };
  },
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      // backgroundColor: data.color,
      color: data.color,
      // ":hover": {
      //   backgroundColor: data.color,
      // },
    };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      background: "linear-gradient(90.21deg, #971864 -5.91%, #2f1797 111.58%)",
      scale: 1.1,
      color: "#fff",
      borderColor: "#fff",
    };
  },

  multiValueLabel: (styles, { data }) => {
    return {
      ...styles,
      color: "#fff",
    };
  },

  multiValueRemove: (styles, { data }) => {
    return {
      ...styles,
      color: "#fff",
      ":hover": {
        color: "#fff",
      },
    };
  },
};
