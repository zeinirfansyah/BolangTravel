import axios from "axios";
import { Button } from "../../../components/ui/Button";
import { useAuthStore } from "../../../store/useAuthStore";
import { useEffect, useState } from "react";
import { Input } from "../../../components/ui/Input";
import dayjs from "dayjs";

const BookingList = () => {
  const { token } = useAuthStore((state) => state);
  const [bookingList, setBookingList] = useState([]);
  const [displayedData, setDisplayedData] = useState(8);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const [set, setSet] = useState(false);

  const getBookingList = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/booking/table/${displayedData}&${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const result = response.data;

      console.log("response", response);
      setBookingList(result.data.rows);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookingList();
  }, [displayedData, page, search, set]);

  const bookingListData = bookingList.filter((booking) => {
    return (
      booking?.payer_name?.toLowerCase().includes(search.toLowerCase()) ||
      booking?.bank_name?.toLowerCase().includes(search.toLowerCase()) ||
      booking?.status?.toLowerCase().includes(search.toLowerCase())
    );
  });

  const handleApprove = async (bookingId) => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/booking/${bookingId}`,
        {
          status: "paid",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setSet(!set);
        confirm("Status updated successfully");
      }
    } catch (error) {
      setError(error.response.data.message);
      console.log(error);
    }
  };

  const handleDecline = async (bookingId) => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/booking/${bookingId}`,
        {
          status: "failed",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setSet(!set);
        confirm("Status updated successfully");
      }
    } catch (error) {
      setError(error.response.data.message);
      console.log(error);
    }
  };

  const handleDelete = async (bookingId) => {
    try {
      const response = await axios.delete(
        `http://localhost:3000/api/booking/${bookingId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setSet(!set);
        confirm("Booking deleted successfully");
      }
    } catch (error) {
      setError(error.response.data.message);
      console.log(error);
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center min-h-screen">
          <div className="flex flex-col text-center gap-12 mt-32">
            <h1
              data-aos="fade-down"
              data-aos-duration="1000"
              className="font-bold text-dark text-4xl lg:text-5xl aos-init aos-animate"
            >
              Booking List
            </h1>
            <Input
              name="search"
              type="text"
              placeholder="Find your favorite travel package"
              onChange={(event) => setSearch(event.target.value)}
              value={search}
              style="my-2"
            />
            <div className="max-h-[60vh] overflow-x-auto">
              <table className="min-w-full text-sm text-left text-gray-500  shadow-lg">
                <thead className=" text-slate-800 bg-gray-100 text-center">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Package
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Bank Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Payer Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Transfer Receipt
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {bookingListData?.map((booking) => (
                    <tr key={booking?.id} className="bg-white border-b ">
                      <td
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        {dayjs(booking?.date).format("DD MMM YYYY")}
                      </td>
                      <td className="px-6 py-4">
                        {booking?.travel_packages?.title}
                      </td>
                      <td className="px-6 py-4">{booking?.bank_name}</td>
                      <td className="px-6 py-4">{booking?.payer_name}</td>
                      <td className="flex justify-center">
                        {booking?.transfer_receipt && (
                          <img
                            src={`http://localhost:3000/${booking?.transfer_receipt}`}
                            alt="receipt"
                            className="w-20 h-20 object-cover"
                          />
                        )}
                      </td>
                      <td className="px-6 py-4">
                        {booking?.status === "pending" ? (
                          <div className="flex items-center justify-center gap-2">
                            <Button
                              onClick={() => handleApprove(booking?.id)}
                              title="Approve"
                              style="rounded-lg py-2 px-3 text-sm bg-slate-200 hover:bg-[#00D4FF] border-slate-200 hover:border-[#00D4FF] text-slate-800 hover:text-white hover:shadow-lg hover:opacity-95 transition duration-300 ease-in-out"
                            />
                            <Button
                              onClick={() => handleDecline(booking?.id)}
                              title="Decline"
                              style="rounded-lg py-2 px-3 text-sm bg-slate-200 hover:bg-[#00D4FF] border-slate-200 hover:border-[#00D4FF] text-slate-800 hover:text-white hover:shadow-lg hover:opacity-95 transition duration-300 ease-in-out"
                            />
                          </div>
                        ) : booking?.status === "paid" ? (
                          <div className="flex items-center justify-center gap-2 capitalize">
                            <p className="text-green-500 text-center">
                              {booking?.status}
                            </p>
                          </div>
                        ) : booking?.status === "unpaid" ? (
                          <div className="flex items-center justify-center gap-2 capitalize">
                            <p className="text-gray-600 text-center">
                              {booking?.status}
                            </p>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center gap-2 capitalize">
                            <p className="text-red-500 text-center">
                              {booking?.status}
                            </p>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <Button
                            onClick={() => handleDelete(booking?.id)}
                            title="Delete"
                            style="rounded-lg py-2 px-3 text-sm bg-slate-200 hover:bg-[#00D4FF] border-slate-200 hover:border-[#00D4FF] text-slate-800 hover:text-white hover:shadow-lg hover:opacity-95 transition duration-300 ease-in-out"
                          />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <hr className="my-6" />
            <div className="flex items-center justify-between my-8">
              <button
                onClick={() => setPage(page - 1)}
                disabled={page === 1}
                className="px-4 py-2 border rounded-xl shadow"
              >
                Previous
              </button>
              <span className="mx-4">Page: {page}</span>
              <button
                onClick={() => setPage(page + 1)}
                disabled={bookingListData.length < displayedData}
                className="px-4 py-2 border rounded-xl shadow"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingList;
