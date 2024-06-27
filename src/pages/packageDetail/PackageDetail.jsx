import { useNavigate, useParams } from "react-router-dom";
import useStore from "../../store/store";
import Destination from "../../components/Destination";
import { Button } from "../../components/ui/Button";
import { useEffect, useState } from "react";

export const PackageDetail = () => {
  const { id } = useParams();
  const store = useStore();
  const product = store.product.data;

  const navigate = useNavigate();

  const [selectedDate, setSelectedDate] = useState("");

  const handleBooking = () => {
    if (!selectedDate) {
      alert("Please select a date before booking.");
      return;
    }

    const bookingData = {
      productId: product.id,
      title: product.title,
      thumbnail: product.thumbnail,
      location: product.location,
      duration: product.duration,
      price: product.price,
      date: selectedDate,
    };

    store.setBookingData(bookingData);

    navigate(`/booking-progres`);
  };

  useEffect(() => {
    store.fetchDetailProduct(id);
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-7">
        <div className="flex flex-col gap-4 mt-32">
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="flex flex-col gap-3 max-w-5xl mx-auto px-4 py-12"
          >
            <h1 className="text-3xl lg:text-4xl font-bold text-center">
              {product?.title}
            </h1>
            <h1 className="text-l lg:text-xl text-center text-textGray">
              {product?.description}
            </h1>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="flex flex-row gap-4"
          >
            <img
              src={`http://localhost:3000/${product?.destinations[0]?.thumbnail}`}
              alt={product?.destinations[0]?.thumbnail}
              data-size="auto"
              className="lazyload lazyloaded rounded-xl object-cover w-2/3 max-h-[560px]"
            />
            <div className="flex flex-col gap-4 max-h-[560px]">
              <img
                src={`http://localhost:3000/${product?.destinations[1]?.thumbnail}`}
                data-size="auto"
                alt={product?.destinations[1]?.thumbnail}
                className="lazyload lazyloaded rounded-xl object-cover max-h-72"
              />
              <img
                src={`http://localhost:3000/${product?.destinations[2]?.thumbnail}`}
                data-size="auto"
                alt={product?.destinations[2]?.thumbnail}
                className="lazyload lazyloaded rounded-xl object-cover max-h-72"
              />
            </div>
          </div>
          <div className="flex flex-col gap-12">
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              className="flex flex-col lg:flex-row gap-7 justify-between py-7"
            >
              <div className="flex flex-col-reverse gap-4 lg:w-1/2">
                {product?.rundowns.map((rundown) => (
                  <div key={rundown.id}>
                    <h1 className="text-xl lg:text-2xl font-semibold">
                      {rundown?.title}
                    </h1>
                    <p className="text-sm lg:text-lg text-textGray">
                      {rundown?.agenda}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4 lg:w-1/3">
                <div
                  className=" flex flex-col gap-2 w-full  lg:w-[24rem] shadow-md p-12 border rounded-2xl bg-white aos-init aos-animate"
                  data-aos="fade-up"
                >
                  <h2 className="font-semibold text-xl lg:text-2xl">
                    Start Booking
                  </h2>
                  <h1 className="font-semibold text-xl text-secondary">
                    {product?.price}
                  </h1>
                  <div className="w-full mt-4 grid gap-2">
                    <input
                      type="date"
                      required
                      className="border-2 border-navy shadow p-3 rounded-xl"
                      placeholder="Select date"
                      onChange={(e) => setSelectedDate(e.target.value)}
                    />
                    <Button
                      style="bg-secondary hover:bg-primary text-white"
                      onClick={handleBooking}
                      title="Book Now"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              className="hidden lg:flex flex-col gap-4 py-7"
            >
              <h1 className="text-xl font-semibold">Popular Destinations</h1>
              <div className={`grid lg:grid-cols-4 gap-4`}>
                {product?.destinations.slice(0, 4).map((destination) => (
                  <div key={destination?.id}>
                    <Destination destination={destination} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
