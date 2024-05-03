export const PackageDetail = () => {
  return (
    <>
      <section className="pt-4">
        <div className="container mx-auto px-4 py-12 lg:max-w-7xl text-center flex justify-center items-center">
          <div className="w-full grid gap-4">
            <h1
              className="text-2xl lg:text-4xl text-dark font-bold capitalize aos-init aos-animate"
              data-aos="zoom-out"
            >
              blue origin fams
            </h1>
            <span
              className="text-sm lg:text-base text-slate-400 capitalize aos-init aos-animate"
              data-aos="zoom-out"
            >
              bali, indonesia
            </span>
            <div className="mt-10 grid grid-col-1 lg:flex overflow-hidden gap-2">
              <div className="w-full lg:w-2/3">
                <picture className="aos-init aos-animate" data-aos="fade-right">
                  <img
                    src="../assets/images/2.png"
                    data-size="auto"
                    alt="Foto Destinasi Hotel Koota"
                    className="lazyload rounded-xl object-cover h-fit w-full lazyloaded"
                  />
                </picture>
              </div>
              <div className="w-full lg:w-1/3 grid gap-2">
                <picture className="aos-init aos-animate" data-aos="fade-left">
                  <img
                    src="../assets/images/10.png"
                    data-size="auto"
                    alt="Foto Destinasi Perahu"
                    className="lazyload rounded-xl object-cover h-fit w-full lazyloaded"
                  />
                </picture>
                <picture className="aos-init aos-animate" data-aos="fade-up">
                  <img
                    src="../assets/images/4.png"
                    data-size="auto"
                    alt="Foto Destinasi Rumah White"
                    className="lazyload rounded-xl object-cover h-fit w-full lazyloaded"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-6">
        <div className="container flex flex-wrap justify-between mx-auto px-4 py-5 lg:max-w-7xl">
          <div className="w-full lg:w-1/2 grid gap-6 mb-16 lg:mb-0">
            <div className="day grid gap-3 aos-init aos-animate" data-aos="fade-up">
              <h1 className="font-bold text-dark text-2xl">Day 1</h1>
              <span className="text-slate-400 leading-relaxed">
                Penjemputan dibandara Ngurahrai pada jam kedatangan Langsung
                check-in Hotel di Kuta Sore, trip sunset ke Tanah Lot (jika
                arrival flight siang) Makan malam dan kembali ke Hotel.
                Overnight di Kuta.
              </span>
            </div>
            <div className="day grid gap-3 aos-init aos-animate" data-aos="fade-up">
              <h1 className="font-bold text-dark text-2xl">Day 2</h1>
              <span className="text-slate-400 leading-relaxed">
                Pagi, setelah sarapan, trip ke Tanjung Benoa. Lanjut trip ke
                Pantai Pandawa & Makan siang Setelah makan siang, trip santai ke
                Pantai Padang-padang Lanjut trip ke Pantai Dreamland dan Sunset
                di Uluwatu Dinner di seaafood jimbaran Kembali ke Hotel,
                Istirahat.
              </span>
            </div>
            <div className="day grid gap-3 aos-init aos-animate" data-aos="fade-up">
              <h1 className="font-bold text-dark text-2xl">Day 3</h1>
              <span className="text-slate-400 leading-relaxed">
                Setelah sarapan pagi langsung trip kepantai Sanur Lanjut trip ke
                Ubud Pasar tradisional Sukawati Makan siang di local restaurant
                Selesai trip drop ke Bandara
              </span>
            </div>
          </div>

          <div
            className=" w-full  lg:w-[24rem] shadow-md p-12 border rounded-2xl bg-white grid gap-4 right-40 aos-init aos-animate"
            data-aos="fade-up"
          >
            <h2 className="capitalize font-semibold text-2xl">start booking</h2>
            <h1 className="font-bold text-4xl text-[#00C0E6]">
              $280 <span className="font-semibold text-slate-900">USD</span>
            </h1>
            <form
              action="bookingInformation.html"
              className="w-full mt-4 grid gap-2"
            >
              <span className="mb-2 text-sm font-semibold text-gray-900 dark:text-white">
                Pick a Date
              </span>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6 mr-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                </div>
                <input
                  type="date"
                  required
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-12 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Select date"
                />
              </div>
              <button
                id="submit"
                type="submit"
                className="button bg-[#02CFEA] text-[#fff] px-6 py-2 rounded w-full text-center font-semibold transition-all duration-500 hover:bg-[#00D4FF] hover:text-[#fff] hover:border-[#02CFEA] border-2 border-[#00D4FF]"
              >
                Continue to Book
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="pt-6">
        <div className="container mx-auto px-4 py-12 lg:max-w-7xl flex justify-center items-center capitalize">
          <div className="w-full">
            <h1
              className="text-2xl text-dark font-bold mb-6 aos-init aos-animate"
              data-aos="fade-right"
            >
              destinasi wisata
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div
                className="grid gap-2 mb-6 lg:mb-0 aos-init aos-animate"
                data-aos="fade-up"
              >
                <picture>
                  <img
                    src="../assets/images/10.png"
                    data-size="auto"
                    alt="Foto Destinasi Tanjung Benoa"
                    className="mb-3 lazyload rounded-xl object-cover h-52 w-full lg:w-80 lazyloaded"
                  />
                </picture>
                <h3 className="text-dark font-medium text-lg lg:text-base text-center lg:text-left">
                  tanjung benoa
                </h3>
                <div className="text-slate-400 text-base lg:text-sm text-center lg:text-left">
                  pool
                </div>
              </div>
              <div
                className="grid gap-2 mb-6 lg:mb-0 aos-init aos-animate"
                data-aos="fade-up"
              >
                <picture>
                  <img
                    src="../assets/images/11.png"
                    data-size="auto"
                    alt="Foto Destinasi Hotel Koota"
                    className="mb-3 lazyload rounded-xl object-cover h-52 w-full lg:w-80 lazyloaded"
                  />
                </picture>
                <h3 className="text-dark font-medium text-lg lg:text-base text-center lg:text-left">
                  hotel koota
                </h3>
                <div className="text-slate-400 text-base lg:text-sm text-center lg:text-left">
                  shopping
                </div>
              </div>
              <div
                className="grid gap-2 mb-6 lg:mb-0 aos-init aos-animate"
                data-aos="fade-up"
              >
                <picture>
                  <img
                    src="../assets/images/12.png"
                    data-size="auto"
                    alt="Foto Destinasi labour and Wait"
                    className="mb-3 lazyload rounded-xl object-cover h-52 w-full lg:w-80 lazyloaded"
                  />
                </picture>
                <h3 className="text-dark font-medium text-lg lg:text-base text-center lg:text-left">
                  labour and wait
                </h3>
                <div className="text-slate-400 text-base lg:text-sm text-center lg:text-left">
                  nature
                </div>
              </div>
              <div
                className="grid gap-2 mb-6 lg:mb-0 aos-init aos-animate"
                data-aos="fade-up"
              >
                <picture>
                  <img
                    src="../assets/images/13.png"
                    data-size="auto"
                    alt="Foto Destinasi tanah lot"
                    className="mb-3 lazyload rounded-xl object-cover h-52 w-full lg:w-80 lazyloaded"
                  />
                </picture>
                <h3 className="text-dark font-medium text-lg lg:text-base text-center lg:text-left">
                  tanah lot
                </h3>
                <div className="text-slate-400 text-base lg:text-sm text-center lg:text-left">
                  beach
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
