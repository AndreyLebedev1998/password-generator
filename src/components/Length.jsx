import React from "react";

const Length = ({ passwordLength, isPasswordLength }) => {
  return (
    <div>
      <p>Длинна пароля</p>
      <p className="passwordLength">{isPasswordLength}</p>
      <input
        type="range"
        className="length"
        min="5"
        max="15"
        defaultValue="5"
        onChange={passwordLength}
      />
    </div>
  );
};

export default Length;
