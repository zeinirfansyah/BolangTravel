import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Textarea } from "../../components/ui/Textarea";
import useStore from "../../store/store";
import { useState } from "react";

export const BookingProgress = () => {
  const store = useStore();
  const { bookingData, setBookingData } = store;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedBookingData = {
      ...bookingData,
      ...formData,
    };

    setBookingData(updatedBookingData);
    navigate(`/pembayaran`); // Navigate to payment page
  };

  const handleCancel = () => {
    navigate(`/`);
    store.setBookingData(null);
  };

  return (
    <>
      <div className="flex flex-col gap-5 lg:gap-10 items-center px-6">
        <div className="title flex flex-col justify-center items-center gap-2">
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
            Please fill up the blank fields below
          </h2>
        </div>
        <div className="flex flex-col gap-10 justify-end items-center">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-end items-center">
            <div
              id="bookingInfo"
              className="flex flex-col gap-5 w-full lg:pe-20 pb-10 lg:pb-auto border-b-2 lg:border-b-0 lg:border-r-2 border-pureGray "
            >
              <img
                src={bookingData.product_image}
                alt="bali"
                className="rounded-lg lg:rounded-[30px] w-[40rem] h-[17.5rem] object-cover"
              />
              <div className="text-info flex flex-row justify-between items-center w-full">
                <div className="title-info flex flex-col">
                  <h1 className="text-xl lg:text-2xl">{bookingData.title}</h1>
                  <h1 className="text-l lg:text-xl text-darkGray">
                    {bookingData.tour_location} - {bookingData.tour_duration}
                  </h1>
                  <h1 className="text-l lg:text-xl text-darkGray"></h1>
                  <h1 className="text-l lg:text-xl text-darkGray">
                    tanggal booking: {bookingData.date}
                  </h1>
                </div>
                <div className="price-info">
                  <h1 className="text-xl lg:text-2xl text-secondary">
                    {bookingData.price}
                  </h1>
                </div>
              </div>
            </div>
            <div
              id="bookingForm"
              className="flex flex-col gap-5 w-full lg:ps-20"
            >
              <div className="flex flex-col gap-1">
                <label htmlFor="name">Full Name</label>
                <Input
                  name="name"
                  placeholder="Please enter your name"
                  value={bookingData.name} onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <Input
                  name="email"
                  placeholder="Please enter your email"
                  value={bookingData.email} onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone">Phone Number</label>
                <Input
                  name="phone"
                  placeholder="Please enter your phone number"
                  value={bookingData.phone} onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="address">Address</label>
                <Textarea
                  name="address"
                  placeholder="Please enter your address"
                  value={bookingData.address} onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 w-full lg:w-1/4 my-5">
            <Button
              title="Bayar"
              style="bg-secondary text-white hover:bg-primary"
              onClick={handleSubmit}
            />

            <Button
              title="Batal"
              style="bg-lightGray text-secondary border-2 border-secondary hover:border-pink hover:text-pink"
              onClick={handleCancel}
            />
          </div>
        </div>
      </div>
    </>
  );
};
