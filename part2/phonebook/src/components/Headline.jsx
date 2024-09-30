import PropTypes from "prop-types";

const Headline = ({ type, text }) => {
  if (type === "h3") {
    return <h3>{text}</h3>;
  }

  return <h2>{text}</h2>;
};

Headline.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Headline;
