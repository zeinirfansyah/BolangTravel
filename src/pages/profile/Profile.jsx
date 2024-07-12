import React from "react";

const Profile = () => {
  return (
    <>
      <div className="flex flex-col gap-5 lg:gap-10 items-center px-6 min-h-screen">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="title flex flex-col justify-center items-center gap-2 mt-32"
        >
          <div className="flex flex-row gap-10 mb-4 mt-7">
          
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold text-center">
            Account Information
          </h1>
          <h2 className="text-l lg:text-xl text-center text-darkGray">
            Here you can update your account information
          </h2>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="flex flex-col gap-10 justify-end items-center"
        >
          <h1>Account</h1>
        </div>
      </div>
    </>
  );
};

export default Profile;
