import axios from "axios";
import dayjs from "dayjs";

import { useEffect } from "react";
import { useState } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";

const BookingHistory = () => {
  const navigate = useNavigate();

  const { token } = useAuthStore((state) => state);

  const [historyData, setHistoryData] = useState([]);
  const [selectedHistoryId, setSelectedHistoryId] = useState("");

  const getBookingHistory = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/booking/booking-history`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = response.data;

      console.log("response", response);
      setHistoryData(result.data);
    } catch (error) {
      console.log(error);
    }
  };

  const detailHistory = historyData?.filter((history) => {
    return history?.id === selectedHistoryId;
  });

  useEffect(() => {
    getBookingHistory();
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="flex flex-col gap-4 min-h-screen">
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            className="flex flex-col gap-3  px-4 py-12 mt-24"
          >
            <h1 className="text-2xl lg:text-3xl font-semibold ">
              Booking History
            </h1>
            <hr className="my-4" />
            <div className="space-y-4">
              <h3>Your booking history:</h3>
              <div className="flex flex-col lg:flex-row justify-between gap-4">
                <div className="max-h-[60vh] overflow-auto flex flex-col gap-4 lg:w-1/2">
                  {historyData?.map((history) => (
                    <div
                      key={history?.id}
                      onClick={() => setSelectedHistoryId(history?.id)}
                      className="border-2 p-4 cursor-pointer hover:shadow-lg"
                    >
                      <div className="flex justify-end">
                        <p className="text-sm text-gray-500">
                          {dayjs(history?.created_at).format("DD MMM YYYY")}
                        </p>
                      </div>
                      <ul>
                        <li>{history?.travel_packages?.title}</li>
                        <li>{dayjs(history?.date).format("DD MMM YYYY")}</li>
                        <div className="flex justify-between">
                          <li>{history?.travel_packages?.price}</li>
                          <li
                            className={`capitalize ${
                              history?.status === "unpaid"
                                ? "text-yellow-500"
                                : history?.status.toLowerCase() === "paid"
                                ? "text-green-500"
                                : history?.status.toLowerCase() === "pending"
                                ? "text-cyan-500"
                                : "text-red-500"
                            }`}
                          >
                            {history?.status}
                          </li>
                        </div>
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="order-first lg:order-last lg:w-1/2">
                  {detailHistory?.map((history) => (
                    <div
                      key={history?.id}
                      className="border-b-2 lg:border-none px-4 py-4 lg:py-0"
                    >
                      <div className="hidden lg:flex justify-center my-8 outline-dashed outline-2 outline-primary outline-offset-8">
                        <img
                          src={`http://localhost:3000/${history?.travel_packages?.thumbnail}`}
                          alt={history?.travel_packages?.title}
                          className="w-full h-[120px] object-cover "
                        />
                      </div>
                      <ul className="space-y-2">
                        <li>
                          <h3 className="text-lg font-bold">
                            {history?.travel_packages?.title}
                          </h3>
                        </li>
                        <li className="font-semibold">
                          IDR {history?.travel_packages?.price}
                        </li>
                        <li className="flex justify-between">
                          <h3>{dayjs(history?.date).format("DD MMM YYYY")}</h3>
                          <h3>{history?.travel_packages?.location}</h3>
                        </li>
                      </ul>
                      <div className="my-7">
                        {history?.status === "unpaid" ? (
                          <Button
                            title={"Pay Now"}
                            onClick={() =>
                              navigate(`/pembayaran/${history?.id}`)
                            }
                            style="bg-secondary hover:bg-primary text-white"
                          >
                            <p>Pay Now</p>
                          </Button>
                        ) : (
                          <Button
                            title={history?.status}
                            disabled
                            style={`capitalize cursor-default ${
                              history?.status.toLowerCase() === "paid"
                                ? "text-green-500 outline-dashed outline-2 outline-green-500 outline-offset-4"
                                : history?.status.toLowerCase() === "pending"
                                ? "text-cyan-500 outline-dashed outline-2 outline-cyan-500 outline-offset-4"
                                : "text-red-500 outline-dashed outline-2 outline-red-500 outline-offset-4"
                            }`}
                          >
                            <p>Detail</p>
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingHistory;
