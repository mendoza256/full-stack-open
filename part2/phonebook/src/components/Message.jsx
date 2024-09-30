import React from "react";

export const Message = ({ message }) => {
  if (message.text.length > 0) {
    return (
      <div className={message.type === "success" ? "success" : "error"}>
        {message.text}
      </div>
    );
  }
};
