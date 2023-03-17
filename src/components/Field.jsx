import React from "react";
import { AiOutlineCopy } from "react-icons/ai";

const Field = ({ password, passwordCopy, copyText }) => {
  return (
    <div className="field">
      <input type="text" className="password" value={password} />
      <AiOutlineCopy className="copy" onClick={passwordCopy} />
      {copyText && <p className="copyText">Скопировано!</p>}
    </div>
  );
};

export default Field;
