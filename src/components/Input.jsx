import PropTypes from 'prop-types';

export const Input = ({ name, placeholder, onChange}) => {
  return (
    <>
      <input
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="border-none bg-[#F5F6F8] rounded-lg p-4 w-full focus:outline-secondary focus:ring-0 focus:bg-white transition-all duration-500"
      />
    </>
  );
};

Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
}
