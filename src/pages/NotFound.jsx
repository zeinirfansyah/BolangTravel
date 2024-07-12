import React from "react";
import NotfoundImage from "../assets/illustrations/404.svg"

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <img src={NotfoundImage} alt="not found" className="lg:w-[640px] w-full" />
      </div>
    </>
  );
};

export default NotFound;
