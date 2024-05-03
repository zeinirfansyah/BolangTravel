import { Button } from "../../components/ui/Button";
import { Input } from "../../components/ui/Input";
import { Textarea } from "../../components/ui/Textarea";

export const BookingProgress = () => {
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
        <form
          action="/pembayaran"
          className="flex flex-col gap-10 justify-end items-center"
        >
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-end items-center">
            <div
              id="bookingInfo"
              className="flex flex-col gap-5 w-full lg:pe-20 pb-10 lg:pb-auto border-b-2 lg:border-b-0 lg:border-r-2 border-pureGray "
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt="bali"
                className="rounded-lg lg:rounded-[30px] w-[40rem] h-[17.5rem] object-cover"
              />
              <div className="text-info flex flex-row justify-between items-center w-full">
                <div className="title-info flex flex-col">
                  <h1 className="text-xl lg:text-2xl">Blue Origin Fams</h1>
                  <h1 className="text-l lg:text-xl text-darkGray">
                    Bali, Indonesia
                  </h1>
                </div>
                <div className="price-info">
                  <h1 className="text-xl lg:text-2xl text-secondary">
                    $480 USD
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
                <Input name="name" placeholder="Please enter your name" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email</label>
                <Input name="email" placeholder="Please enter your email" />
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone">Phone Number</label>
                <Input
                  name="phone"
                  placeholder="Please enter your phone number"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="address">Address</label>
               <Textarea name="address" placeholder="Please enter your address" />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 w-full lg:w-1/4 my-5">
            <Button
              title="Bayar"
              style="bg-secondary text-white hover:bg-primary"
              onClick={() => alert("Bayar clicked!")}
            />

            <Button
              title="Batal"
              style="bg-lightGray text-secondary border-2 border-secondary hover:border-pink hover:text-pink"
              onClick={() => alert("Batal clicked!")}
            />
          </div>
        </form>
      </div>
    </>
  );
};
