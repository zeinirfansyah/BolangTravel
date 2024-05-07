import PropTypes from "prop-types";

const SelectOption = ({ options, value, onChange }) => {
  const allCategoriesOption = { value: "", label: "All Categories" };

  const combinedOptions = [allCategoriesOption, ...options];

  return (
    <>
      <select
        value={value}
        onChange={onChange}
        className={`border bg-white rounded-lg p-4 w-full focus:outline-secondary focus:ring-0 focus:bg-white transition-all duration-500 `}
      >
        {combinedOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </>
  );
};

SelectOption.propTypes = {
  options: PropTypes.array,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default SelectOption;
