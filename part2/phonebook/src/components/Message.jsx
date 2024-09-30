import PropTypes from "prop-types";

export const Message = ({ message }) => {
  if (message?.text?.length > 0) {
    return (
      <div className={`${message.type === "Error" ? "error" : "success"}`}>
        {message.text}
      </div>
    );
  }
};

Message.propTypes = {
  message: PropTypes.shape({
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }),
};

export default Message;
