import React from "react";

const Toast = ({text, backgroundColor}) => {
  return (
    <>
      <div className={`${backgroundColor} px-6 py-4 rounded-lg text-sm border-2 border-white shadow text-gray-600`}>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Toast;
