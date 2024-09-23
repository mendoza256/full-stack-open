const Button = ({ setFeedback, children }) => {
  function handleClick() {
    setFeedback((prev) => prev + 1);
  }

  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
