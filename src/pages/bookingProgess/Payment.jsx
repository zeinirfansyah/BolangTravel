import { useState } from "react";
import bca_icon from "../../assets/icons/bca_bank.png";
import mandiri_icon from "../../assets/icons/mandiri_bank.png";
import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import useStore from "../../store/store";
import { useNavigate } from "react-router-dom";

export const Payment = () => {
  const store = useStore();
  const { bookingData, checkoutData, setCheckoutData } = store;
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    bank_name: "",
    transfer_receipt: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const checkout = {
      ...bookingData,
      ...formData,
    }

    const updateCheckoutData = {
      ...checkoutData,
      ...checkout
    };

    setCheckoutData(updateCheckoutData);
    navigate(`/booking-selesai`); // Navigate to payment page
  };

  const handleCancel = () => {
    navigate('booking-progres');
  };

  console.log(bookingData);
  return (
    <section
      data-aos="zoom-out"
      id="hero"
      className="bg-white transition-all duration-500 py-7"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-5 lg:gap-10 items-center px-6">
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
              Please fill up the blank fields below
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
                  <li>Travel Package : Blue Origin Fams</li>
                  <li>Price : $480 USD</li>
                  <li>Tax : 11%</li>
                  <li>Total : $510 USD</li>
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
                  <label htmlFor="name">Nama Pengirim</label>
                  <Input name="name" placeholder="Masukan nama pengirim" value={checkoutData.name} onChange={handleChange}/>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="bank_name">Nama Bank</label>
                  <Input name="bank_name" placeholder="Masukan nama bank" value={checkoutData.bank_name} onChange={handleChange}/>
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="transfer_receipt">
                    Upload Transfer Receipt
                  </label>
                  <Input
                    name="transfer_receipt"
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    value={checkoutData.transfer_receipt} onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 w-full lg:w-1/4">
              <Button
                title="Kirim"
                style="bg-secondary text-white hover:bg-primary"
                onClick={handleSubmit}
              />

              <Button
                title="Batal"
                style="bg-lightGray text-secondary border-2 border-secondary hover:border-pink hover:text-pink"
                onClick={handleCancel}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
