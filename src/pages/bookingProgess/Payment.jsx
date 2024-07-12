import { useEffect, useState } from "react";
import bca_icon from "../../assets/icons/bca_bank.png";
import mandiri_icon from "../../assets/icons/mandiri_bank.png";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import useStore from "../../store/store";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useAuthStore } from "../../store/useAuthStore";

export const Payment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuthStore((state) => state);
  const { bookingData } = useStore((state) => state);
  const [error, setError] = useState(null);
  const [bankName, setBankName] = useState("");
  const [payerName, setPayerName] = useState("");
  const [urlImage, setUrlImage] = useState("");
  const [image, setImage] = useState("");
  const [bookingDetail, setBookingDetail] = useState({});

  const getBookingDetail = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/booking/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = response.data;
      setBookingDetail(result.data);

      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBookingDetail();
  }, []);

  const fileUpload = (e) => {
    const file = e.target.files[0];
    setUrlImage(URL.createObjectURL(file));
    setImage(file);

    console.log("file", file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();

      formData.append("bank_name", bankName);
      formData.append("payer_name", payerName);
      formData.append("transfer_receipt", image);

      console.log("form data", formData);

      const response = await axios.put(
        `http://localhost:3000/api/booking/complete-booking/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("response", response);
      if (response.status === 200) {
        alert("Payment Success!");
        navigate(`/pembayaran/${id}/selesai`);
      }
    } catch (error) {
      setError(error?.response?.data?.message);
      console.log(error);
    }
  };

  console.log("bookingDetail", bookingDetail);
  return (
    <div
      data-aos="zoom-out"
      id="hero"
      className="bg-white transition-all duration-500 min-h-screen"
    >
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="max-w-7xl mx-auto"
      >
        <div className="flex flex-col gap-5 lg:gap-10 items-center px-6 mt-32">
          <div className="title flex flex-col justify-center items-center gap-2">
            <div className="flex flex-row gap-10 mb-4 mt-7">
              <span className="bg-secondary text-xl lg:text-3xl text-white rounded-xl px-4 py-1 transition-all duration-500">
                1
              </span>
              <span className="bg-pureGray text-xl lg:text-3xl text-darkGray rounded-xl px-4 py-1 outline outline-pureGrayoutline-2 outline-offset-4 transition-all duration-500 ">
                2
              </span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold text-center">
              Payment
            </h1>
            <h2 className="text-l lg:text-xl text-center text-darkGray">
              Please complete your payment
            </h2>
          </div>
          <form
            action="/booking-selesai"
            className="flex flex-col gap-10 justify-end items-center"
          >
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-end items-center">
              <div
                id="paymentInfo"
                className="flex flex-col gap-5 w-full lg:pe-20 pb-10 lg:pb-auto border-b-2 lg:border-b-0 lg:border-r-2 border-pureGray"
              >
                <h1 className="text-xl lg:text-2xl">Payment Information</h1>
                <ul className="flex flex-col gap-2">
                  <li>Package name : {bookingDetail?.travel_packages?.title}</li>
                  <li>Price : IDR {bookingDetail?.travel_packages?.price}</li>
                  <li>Tax : 11%</li>
                  <li>Total : IDR {Math.round(bookingDetail?.travel_packages?.price * 1.11)}</li>
                </ul>
                <div className="bank-card px-4 py-4 shadow flex flex-row gap-4 justify-between items-center">
                  <img src={bca_icon} alt="bank_bca" />
                  <div>
                    <p>Bank Central Asia</p>
                    <p>2208 4666</p>
                    <p>PT. Bolang Travel Indonesia</p>
                  </div>
                </div>
                <div className="bank-card px-4 py-4 shadow flex flex-row gap-4 justify-between items-center">
                  <img src={mandiri_icon} alt="bank_bca" />
                  <div>
                    <p>Bank Mandiri</p>
                    <p>7884 4666</p>
                    <p>PT. Bolang Travel Indonesia</p>
                  </div>
                </div>
              </div>
              <div
                id="paymentForm"
                className="flex flex-col gap-5 w-full lg:ps-20"
              >
                <div className="flex flex-col gap-1">
                  <label htmlFor="name">Payer Name</label>
                  <Input
                    name="name"
                    placeholder="Input your name"
                    value={payerName}
                    onChange={(e) => setPayerName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="bank_name">Bank Name</label>
                  <Input
                    name="bank_name"
                    placeholder="Input your bank name"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>

                <div className="flex justify-between gap-1">
                  <div>
                    <label htmlFor="transfer_receipt">
                      Transfer Receipt
                    </label>
                    <Input
                      name="transfer_receipt"
                      type="file"
                      accept=".jpg, .jpeg, .png"
                      onChange={fileUpload}
                    />
                  </div>
                  <div className="flex justify-center  w-1/2">
                    {urlImage && (
                      <img
                        src={urlImage}
                        alt=""
                        className="w-[100px] h-[100px] object-cover border shadow-md outline-dashed outline-2 outline-offset-4 outline-pureGray"
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-red-500">{error}</p>
                </div>

                <div className="flex justify-center"></div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 w-full lg:w-1/4 my-12">
              <Button
                title="Submit"
                style="bg-secondary text-white hover:bg-primary"
                onClick={handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
