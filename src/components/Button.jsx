import React from "react";

const Button = ({ onClick }) => {
  return (
    <>
      <button className="generate" onClick={onClick}>
        Сгенерировать
      </button>
    </>
  );
};

export default Button;
