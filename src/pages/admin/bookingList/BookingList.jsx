import {Button} from "../../../components/ui/Button"

const BookingList = () => {
    return (
      <>
      <section className="mt-52 dark:bg-dark">
          <div className="container mx-auto px-4 lg:max-w-7xl flex items-center justify-center">
              <div className="text-center grid gap-4">
                  <h1>
                      <span className="block font-bold text-dark text-4xl lg:text-5xl dark:text-white aos-init aos-animate" data-aos="fade-down" data-aos-duration="1000">Booking List</span>
                  </h1>
                  <div className="relative overflow-x-auto">
                      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 shadow-lg">
                          <thead className="text-xs text-slate-800 uppercase bg-gray-100 dark:bg-gray-700 dark:text-white text-center">
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
                              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                      08-08-2024
                                  </td>
                                  <td className="px-6 py-4">
                                      Bali Good
                                  </td>
                                  <td className="px-6 py-4">
                                      BCX
                                  </td>
                                  <td className="px-6 py-4">
                                      Ilham
                                  </td>
                                  <td>
                                  <Button title="Show" style="rounded-lg py-2 px-3 text-sm bg-slate-200 hover:bg-[#00D4FF] border-slate-200 hover:border-[#00D4FF] text-slate-800 hover:text-white hover:shadow-lg hover:opacity-95 transition duration-300 ease-in-out"/>
                                  </td>
                                  <td className="px-6 py-4">
                                      <div className="flex items-center justify-center gap-2">
                                      <Button title="Approved" style="rounded-lg py-2 px-3 text-sm bg-slate-200 hover:bg-[#00D4FF] border-slate-200 hover:border-[#00D4FF] text-slate-800 hover:text-white hover:shadow-lg hover:opacity-95 transition duration-300 ease-in-out"/>
                                      <Button title="Decline" style="rounded-lg py-2 px-3 text-sm bg-slate-200 hover:bg-[#00D4FF] border-slate-200 hover:border-[#00D4FF] text-slate-800 hover:text-white hover:shadow-lg hover:opacity-95 transition duration-300 ease-in-out"/>
                                      </div>
                                  </td>
                                  <td className="px-6 py-4">
                                      <div className="flex items-center justify-center gap-2">
                                          <Button title="Update" style="rounded-lg py-2 px-3 text-sm bg-slate-200 hover:bg-[#00D4FF] border-slate-200 hover:border-[#00D4FF] text-slate-800 hover:text-white hover:shadow-lg hover:opacity-95 transition duration-300 ease-in-out"/>
                                          <Button title="Delete" style="rounded-lg py-2 px-3 text-sm bg-slate-200 hover:bg-[#00D4FF] border-slate-200 hover:border-[#00D4FF] text-slate-800 hover:text-white hover:shadow-lg hover:opacity-95 transition duration-300 ease-in-out"/>
                                      </div>
                                  </td>
                              </tr>
                              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                      10-10-2025
                                  </th>
                                  <td className="px-6 py-4">
                                      Bali Good
                                  </td>
                                  <td className="px-6 py-4">
                                      BRY
                                  </td>
                                  <td className="px-6 py-4">
                                      Zein
                                  </td>
                                  <td>
                                      <Button title="Show" style="rounded-lg py-2 px-3 text-sm bg-slate-200 hover:bg-[#00D4FF] border-slate-200 hover:border-[#00D4FF] text-slate-800 hover:text-white hover:shadow-lg hover:opacity-95 transition duration-300 ease-in-out"/>
                                  </td>
                                  <td className="px-6 py-4">
                                      <div className="flex items-center justify-center gap-2">
                                      <Button title="Approved" style="rounded-lg py-2 px-3 text-sm bg-slate-200 hover:bg-[#00D4FF] border-slate-200 hover:border-[#00D4FF] text-slate-800 hover:text-white hover:shadow-lg hover:opacity-95 transition duration-300 ease-in-out"/>
                                      <Button title="Decline" style="rounded-lg py-2 px-3 text-sm bg-slate-200 hover:bg-[#00D4FF] border-slate-200 hover:border-[#00D4FF] text-slate-800 hover:text-white hover:shadow-lg hover:opacity-95 transition duration-300 ease-in-out"/>
                                      </div>
                                  </td>
                                  <td className="px-6 py-4">
                                      <div className="flex items-center justify-center gap-2">
                                          <Button title="Update" style="rounded-lg py-2 px-3 text-sm bg-slate-200 hover:bg-[#00D4FF] border-slate-200 hover:border-[#00D4FF] text-slate-800 hover:text-white hover:shadow-lg hover:opacity-95 transition duration-300 ease-in-out"/>
                                          <Button title="Delete" style="rounded-lg py-2 px-3 text-sm bg-slate-200 hover:bg-[#00D4FF] border-slate-200 hover:border-[#00D4FF] text-slate-800 hover:text-white hover:shadow-lg hover:opacity-95 transition duration-300 ease-in-out"/>
                                      </div>
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
  
  export default BookingList