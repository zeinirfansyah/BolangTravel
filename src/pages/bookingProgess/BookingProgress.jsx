import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import useStore from "../../store/store";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthStore, useAuthenticatedUser } from "../../store/useAuthStore";

export const BookingProgress = () => {
  const { id, date } = useParams();
  const { product, bookingData, setBookingData, fetchDetailProduct } = useStore(
    (state) => state
  );
  const { user, token } = useAuthStore((state) => state);
  const { authenticatedUser } = useAuthenticatedUser((state) => state);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  console.log(bookingData);

  useEffect(() => {
    authenticatedUser(token);
    console.log("token", token);
  }, [token]);

  useEffect(() => {
    fetchDetailProduct(id);
  }, []);

  console.log(user);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const updatedBookingData = {
      ...bookingData,
      ...user,
    };

    setBookingData(updatedBookingData);
    console.log(bookingData);

    try {
      const response = await axios.post(
        `http://localhost:3000/api/booking?travel_package_id=${bookingData.productId}`,
        {
          date: bookingData.date,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("response: ", response);

      if (response.status === 201) {
        alert("Booking Success!");
        navigate(`/pembayaran/${response.data.data.id}`);
      }
    } catch (error) {
      setError(error?.response?.data?.message);
      console.log(error);
    }
  };

  const handleCancel = () => {
    navigate(`/`);
    setBookingData(null);
  };

  return (
    <>
      <div className="flex flex-col gap-5 lg:gap-10 items-center px-6 min-h-screen">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="title flex flex-col justify-center items-center gap-2 mt-32"
        >
          <div className="flex flex-row gap-10 mb-4 mt-7">
            <span className="bg-pureGray text-xl lg:text-3xl text-darkGray rounded-xl px-4 py-1 outline outline-pureGray outline-2 outline-offset-4 transition-all duration-500">
              1
            </span>
            <span className="bg-pureGray text-xl lg:text-3xl text-darkGray rounded-xl px-4 py-1 transition-all duration-500 ">
              2
            </span>
          </div>
          <h1 className="text-2xl lg:text-3xl font-bold text-center">
            Booking Information
          </h1>
          <h2 className="text-l lg:text-xl text-center text-darkGray">
            Please fill out the information below
          </h2>
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="flex flex-col gap-10 justify-end items-center"
        >
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-end items-center">
            <div
              id="bookingInfo"
              className="flex flex-col gap-5 w-full lg:pe-20 pb-10 lg:pb-auto border-b-2 lg:border-b-0 lg:border-r-2 border-pureGray "
            >
              <img
                src={`http://localhost:3000/${product.thumbnail}`}
                alt="bali"
                className="rounded-lg lg:rounded-[30px] w-[40rem] h-[17.5rem] object-cover"
              />
              <div className="text-info flex flex-row justify-between items-center w-full">
                <div className="title-info flex flex-col">
                  <h1 className="text-xl lg:text-2xl">{product.title}</h1>
                  <h1 className="text-l lg:text-xl text-darkGray">
                    {product.location} - {product.duration} Days
                  </h1>
                  <h1 className="text-l lg:text-xl text-darkGray"></h1>
                  <h1 className="text-l lg:text-xl text-darkGray">
                    Date: {date}
                  </h1>
                </div>
                <div className="price-info">
                  <h1 className="text-xl lg:text-2xl text-secondary">
                    {product.price}
                  </h1>
                </div>
              </div>
            </div>
            <div
              id="bookingForm"
              className="flex flex-col gap-5 w-full lg:ps-20"
            >
              <div className="flex flex-col gap-3">
                <label htmlFor="name">Full Name</label>
                <p className="outline-dashed outline-gray-300 text-gray-600 outline-2 bg-white rounded-lg p-4 w-full focus:outline-secondary focus:ring-0 focus:bg-white transition-all duration-500">{user?.fullname}</p>
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="email">Email</label>
                <p className="outline-dashed outline-gray-300 text-gray-600 outline-2 bg-white rounded-lg p-4 w-full focus:outline-secondary focus:ring-0 focus:bg-white transition-all duration-500">{user?.email}</p>
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="phone">Phone Number</label>
                <p className="outline-dashed outline-gray-300 text-gray-600 outline-2 bg-white rounded-lg p-4 w-full focus:outline-secondary focus:ring-0 focus:bg-white transition-all duration-500">{user?.phone}</p>
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="address">Address</label>
                <p className="outline-dashed outline-gray-300 text-gray-600 outline-2 bg-white rounded-lg p-4 w-full focus:outline-secondary focus:ring-0 focus:bg-white transition-all duration-500">{user?.address}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 w-full lg:w-1/4 my-5">
            <Button
              title="Book Now"
              style="bg-secondary text-white hover:bg-primary"
              onClick={handleSubmit}
            />

            <Button
              title="Cancel"
              style="bg-lightGray text-secondary border-2 border-secondary hover:border-pink hover:text-pink"
              onClick={handleCancel}
            />
          </div>
        </div>
      </div>
    </>
  );
};
