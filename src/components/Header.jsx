import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuAccount, setisMenuAccount] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuAccount = () => {
    setisMenuAccount(!isMenuAccount);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-10 bg-white shadow">
      <div className="max-w-7xl mx-auto">
        <nav className="Navbar md:flex justify-between gap-20 items-center py-6 mx-4">
          <div className="flex items-center justify-between">
            <div className="items-start justify-start">
              <Link id="brand" to="/">
                <h1 className="text-xl font-semibold  transition-all duration-500">
                  <span className="text-secondary">Bolang</span>Travel.
                </h1>
              </Link>
            </div>
            <div className="flex items-end justify-end gap-2">
              <div className="flex sm:hidden">
                <button className="block h-8 w-8 lg:h-6 lg:w-6 scale-[.80] lg:scale-110 rounded-full overflow-hidden border-2 border-white focus:outline-none order-1" onClick={menuAccount}
              type="button">
                  <img className="h-full w-full object-cover" src="/src/assets/image/avatar.jpg" alt="Avatar" />
                </button>
                <div className={`py-2 w-40 bg-white text-sm font-medium rounded-lg absolute top-[5.6rem] right-[4rem] shadow-lg ${isMenuAccount ? "" : "hidden"} `}>
                    <Link to="/" className="block px-4 py-2 text-slate-800 hover:bg-gray-200">Data Booking</Link>
                    <Link to="/" className="block px-4 py-2 text-slate-800 hover:bg-gray-200">Data Package</Link>
                    <Link to="/destination" className="block px-4 py-2 text-slate-800 hover:bg-gray-200">Destination List</Link>
                    <hr className="my-2" />
                    <Link to="#" className="block px-4 py-2 text-slate-800 hover:bg-gray-200">Sign out</Link>
                </div>
              </div>
              <button
              className="sm:hidden hover:bg-white px-3 py-1 transition-all  duration-500 rounded-lg cursor-pointer shadow order-2"
              onClick={toggleMenu}
              type="button"
              >
                <span className="text-xl">&#9776;</span>
              </button>
            </div>
          </div>
          <ul
            id="menu"
            className={`md:flex gap-5 ${isMenuOpen ? "" : "hidden"} text-navy`}
          >
            <li className="my-5 md:my-0">
              <Link
                to="/"
                className="hover:text-secondary transition-all duration-500"
              >
                Home
              </Link>
            </li>
            <li className="my-5 md:my-0">
              <Link
                to="/paket-wisata"
                className="active hover:text-secondary transition-all duration-500"
              >
                Paket Wisata
              </Link>
            </li>
            <li className="my-5 md:my-0">
              <Link
                to="/tentang-kami"
                className="hover:text-secondary transition-all duration-500"
              >
                Tentang Kami
              </Link>
            </li>
          </ul>
          <div className="hidden md:flex">
            <button className="block h-8 w-8 lg:h-6 lg:w-6 scale-[.80] lg:scale-110 rounded-full overflow-hidden border-2 border-white focus:outline-none order-1" onClick={menuAccount}
              type="button">
              <img className="h-full w-full object-cover" src="/src/assets/image/avatar.jpg" alt="Avatar" />
            </button>
            <div className={`py-2 w-40 bg-white text-sm font-medium rounded-lg absolute md:top-[5.5rem] md:right-[1rem] shadow-lg ${isMenuAccount ? "" : "hidden"} `}>
                <Link to="/" className="block px-4 py-2 text-slate-800 hover:bg-gray-200">Data Booking</Link>
                <Link to="/" className="block px-4 py-2 text-slate-800 hover:bg-gray-200">Data Package</Link>
                <Link to="/destination" className="block px-4 py-2 text-slate-800 hover:bg-gray-200">Destination List</Link>
                <hr className="my-2" />
                <Link to="#" className="block px-4 py-2 text-slate-800 hover:bg-gray-200">Sign out</Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
