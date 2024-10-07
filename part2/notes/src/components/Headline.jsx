const Headline = ({ type, text }) => {
  if (type === "h3") {
    return <h3>{text}</h3>;
  }

  return <h2>{text}</h2>;
};

export default Headline;
