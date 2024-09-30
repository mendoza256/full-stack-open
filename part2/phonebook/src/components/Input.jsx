import PropTypes from "prop-types";

const Input = ({ label, value, handler }) => {
  return (
    <div>
      {label}
      <input value={value} onChange={handler} />
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handler: PropTypes.func.isRequired,
};

export default Input;
