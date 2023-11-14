import { servicesOptions as options } from "@/data/services-data/our-services";

export const loadOptions = (searchValue, callback) => {
  setTimeout(() => {
    const filteredOptions = options?.filter((option) =>
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
      backgroundColor: `linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)`,
      borderRadius: "15px",
      padding: "3px 0px",
      color: "#fff",

      "& input::placeholder": {
        color: "#fff !important",
        content: '"Your Custom Placeholder Text"',
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
      color: "#fff",
      padding: "5px",
      paddingRight: "10px",
      borderRadius: "7px",
      borderLeft: "2px solid #eee",
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
      display: data.isFixed ? "none" : styles.display,
      color: "#fff",
      ":hover": {
        color: "#fff",
      },
    };
  },
};
