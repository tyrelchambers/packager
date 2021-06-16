import React from "react";
const InputWrapper = ({ labelFor, labelTitle, children }) => {
  return (
    <div className="mt-4 flex flex-col">
      <label htmlFor={labelFor} className="font-bold text-gray-700 mb-1">
        {labelTitle}
      </label>
      {children}
    </div>
  );
};

export default InputWrapper;
