import PropTypes from 'prop-types';

export const Button = ({ style, onClick, title }) => {
  return (
    <button
      name="submit"
      id="submit"
      type="submit"
      className={`${style} font-medium rounded-lg py-2 px-3 shadow-md transition-all duration-500`}
      onClick={onClick}>
      {title}
    </button>
  );
};

Button.propTypes = {
  style: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
}
