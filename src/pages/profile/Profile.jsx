import React, { useEffect, useState } from "react";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Textarea } from "../../components/ui/Textarea";
import Toast from "../../components/ui/Toast";
import { useAuthStore } from "../../store/useAuthStore";
import axios from "axios";

const Profile = () => {
  const { token } = useAuthStore((state) => state);

  const [isEdit, setIsEdit] = useState(false);
  const [error, setError] = useState(null);
  const [accountData, setAccountData] = useState({});
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  const getAccount = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/account`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAccountData(response.data.data);
      setFullname(response.data.data.fullname);
      setUsername(response.data.data.username);
      setPhone(response.data.data.phone);
      setAddress(response.data.data.address);
      setEmail(response.data.data.email);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAccount();
  }, []);
  
  const handleSubmit = async () => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/account`,
        {
          fullname: fullname,
          username: username,
          phone: phone,
          address: address,
          email: email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        alert("Update Success!");
        setIsEdit(false);
      }
    } catch (error) {
        setError(error.response.data.message);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-5 lg:gap-10 items-center px-6 min-h-screen">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="title flex flex-col justify-center items-center gap-2 mt-24"
        >
          <div className="flex flex-row gap-10 mb-4 mt-7"></div>
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
          {isEdit === false ? (
            <div className="flex flex-col px-4 py-1 lg:w-[60vw] border-2 border-slate-200 rounded-lg mb-12">
              <div className="flex flex-col lg:flex-row gap-5 lg:gap-0">
                <div
                  id="bookingForm"
                  className="flex flex-col gap-5 w-full lg:pe-20 px-4 py-6 "
                >
                  <div className="flex flex-col gap-3">
                    <label htmlFor="name">Full Name</label>
                    <p className="outline-dashed outline-gray-300 text-gray-600 outline-2 bg-white rounded-lg p-4 w-full focus:outline-secondary focus:ring-0 focus:bg-white transition-all duration-500">
                      {accountData.fullname}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="email">Email</label>
                    <p className="outline-dashed outline-gray-300 text-gray-600 outline-2 bg-white rounded-lg p-4 w-full focus:outline-secondary focus:ring-0 focus:bg-white transition-all duration-500">
                      {accountData.email}
                    </p>
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor="address">Address</label>
                    <p className="outline-dashed outline-gray-300 text-gray-600 outline-2 bg-white rounded-lg p-4 w-full focus:outline-secondary focus:ring-0 focus:bg-white transition-all duration-500">
                      {accountData.address}
                    </p>
                  </div>
                </div>
                <div
                  id="bookingInfo"
                  className="flex flex-col gap-5 w-full lg:ps-20 px-4 py-6 pb-10 lg:pb-auto border-b-2 lg:border-b-0 lg:border-s-2 border-pureGray "
                >
                  <div className="flex flex-col gap-3">
                    <label htmlFor="username">Username</label>
                    <p className="outline-dashed outline-gray-300 text-gray-600 outline-2 bg-white rounded-lg p-4 w-full focus:outline-secondary focus:ring-0 focus:bg-white transition-all duration-500">
                      {accountData.username}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="phone">Phone Number</label>
                    <p className="outline-dashed outline-gray-300 text-gray-600 outline-2 bg-white rounded-lg p-4 w-full focus:outline-secondary focus:ring-0 focus:bg-white transition-all duration-500">
                      {accountData.phone}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-center my-12">
                <div className="w-full lg:w-[320px]">
                  <Button
                    title="Edit Profile"
                    onClick={() => setIsEdit(true)}
                    style="bg-secondary text-white hover:bg-primary"
                  />
                </div>
              </div>
            </div>
          ) : (
            <form
              onSubmit={(e) => handleSubmit()}
              className="flex flex-col px-4 py-1 lg:w-[60vw] border-2 border-slate-200 rounded-lg mb-12"
            >
              <div className="flex flex-col lg:flex-row gap-5 lg:gap-0">
                <div
                  id="bookingForm"
                  className="flex flex-col gap-5 w-full lg:pe-20 px-4 py-6 "
                >
                  <div className="flex flex-col gap-3">
                    <label htmlFor="fullname">Full Name</label>
                    <Input
                      name="fullname"
                      type="text"
                      value={fullname}
                      placeholder="Input your fullname"
                      onChange={(e) => setFullname(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="email">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={email}
                      placeholder="Input your email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col gap-3">
                    <label htmlFor="address">Address</label>
                    <Input
                      name="address"
                      type="text"
                      value={address}
                      placeholder="Input your address"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
                <div
                  id="bookingInfo"
                  className="flex flex-col gap-5 w-full lg:ps-20 px-4 py-6 pb-10 lg:pb-auto border-b-2 lg:border-b-0 lg:border-s-2 border-pureGray "
                >
                  <div className="flex flex-col gap-3">
                    <label htmlFor="username">Username</label>
                    <Input
                      name="username"
                      type="text"
                      value={username}
                      placeholder="Input your username"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label htmlFor="phone">Phone Number</label>
                    <Input
                      name="phone"
                      type="text"
                      value={phone}
                      placeholder="Input your phone number"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6 items-center my-12">
                <div className="w-full lg:w-[320px]">
                  <Button
                    title="Save Profile"
                    type="submit"
                    style="bg-secondary text-white hover:bg-primary"
                  />
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
