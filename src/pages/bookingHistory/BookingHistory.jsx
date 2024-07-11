const BookingHistory = () => {
    return (
      <>
      <section className="my-52 dark:bg-dark">
          <div className="container mx-auto px-4 lg:max-w-7xl flex items-center justify-center">
              <div className="text-center grid gap-10">
                  <h1 className="text-sm text-primary dark:text-primary">
                      <span className="block font-bold text-dark text-4xl lg:text-5xl dark:text-white aos-init aos-animate" data-aos="fade-down" data-aos-duration="1000">Booking History</span>
                  </h1>
                  <div className="relative overflow-x-auto">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 shadow-lg">
                          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white">
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
                                      Player Name
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                      Status
                                  </th>
                              </tr>
                          </thead>
                          <tbody>
                              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                      08-08-2024
                                  </td>
                                  <td className="px-6 py-4">
                                      Skypiea
                                  </td>
                                  <td className="px-6 py-4">
                                      ABC
                                  </td>
                                  <td className="px-6 py-4">
                                      Mugiwara
                                  </td>
                                  <td className="px-6 py-4 text-[#00C0E6] font-bold">
                                     Scucces
                                  </td>
                              </tr>
                              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                      16-05-2024
                                  </th>
                                  <td className="px-6 py-4">
                                      Wano
                                  </td>
                                  <td className="px-6 py-4">
                                      Sendiri
                                  </td>
                                  <td className="px-6 py-4">
                                      Sanji
                                  </td>
                                  <td className="px-6 py-4 text-yellow-500 font-bold">
                                      Pending
                                  </td>
                              </tr>
                              <tr className="bg-white dark:bg-gray-800">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                      20-09-2024
                                  </th>
                                  <td className="px-6 py-4">
                                      Punk Hazard
                                  </td>
                                  <td className="px-6 py-4">
                                      BUI
                                  </td>
                                  <td className="px-6 py-4">
                                      Zoro
                                  </td>
                                  <td className="px-6 py-4 text-red-500 font-bold">
                                      Unpaid
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </div>
      </section>
      </>
    )
  }
  
  export default BookingHistory