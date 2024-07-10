import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-3xl font-bold">Page Not Found</h1>
        <p className="text-lg">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </>
  );
};

export default NotFound;
