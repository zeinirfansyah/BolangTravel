import { Link } from "react-router-dom";
import completed_illustration from "../../assets/illustrations/completed.svg";
import useStore from "../../store/store";

export const Completed = () => {
  const store = useStore();
  const { bookingData, checkoutData } = store;

  console.log(bookingData)
  console.log(checkoutData)
  return (
    <section
      data-aos="zoom-out"
      id="hero"
      className="bg-white transition-all duration-500 py-7"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-5 items-center px-6 mb-10">
          <div className="title flex flex-col justify-center items-center gap-2">
            <div className="flex flex-row gap-10 mb-4 mt-7">
              <span className="bg-secondary text-xl lg:text-3xl text-white rounded-xl px-4 py-1 transition-all duration-500">
                1
              </span>
              <span className="bg-secondary text-xl lg:text-3xl text-white rounded-xl px-4 py-1 transition-all duration-500">
                2
              </span>
            </div>
            <h1 className="text-2xl lg:text-3xl font-bold text-center">
              Selesai!
            </h1>
          </div>

          <div
            data-aos="zoom-in"
            className="w-full flex flex-col justify-center items-center gap-3"
          >
            <img
              src={completed_illustration}
              alt="completed"
              className="w-[300px] md:w-[300px]"
            />
            <h2 className="text-l lg:text-xl text-center text-darkGray">
              Kami akan melakukan validasi pembayaran anda! 
            </h2>
            <h2 className="text-l lg:text-xl text-center text-darkGray">
             Kami akan mengirimkan notifikasi ke email anda jika pembayaran telah diterima. 
            </h2>
          </div>
          <div className="flex justify-center items-center gap-3 w-full lg:w-1/4">
            <Link
              to="/"
              className="button bg-secondary text-white px-6 py-2 rounded w-full text-center font-semibold transition-all duration-500 hover:bg-white hover:text-secondary hover:border-secondary border-2 border-secondary"
            >
              Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
