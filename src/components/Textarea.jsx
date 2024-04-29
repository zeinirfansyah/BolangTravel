import PropTypes from "prop-types";

export const Textarea = ({ name, placeholder, onChange }) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      className="border-none bg-[#F5F6F8] rounded-lg p-4 w-full focus:outline-secondary focus:ring-0 focus:bg-white transition-all duration-500"
      rows="2"
      cols="30"
    />
  );
};

Textarea.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}