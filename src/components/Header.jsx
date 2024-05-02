import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-10 bg-white shadow">
      <div className="max-w-7xl mx-auto">
        <nav className="Navbar md:flex justify-start gap-20 items-center py-6 mx-4">
          <ul className="flex items-center justify-between">
            <li>
              <Link id="brand" to="index.html">
                <h1 className="text-xl font-semibold  transition-all duration-500">
                  <span className="text-secondary">Bolang</span>Travel.
                </h1>
              </Link>
            </li>
            <button
              className="sm:hidden hover:bg-white px-3 py-1 transition-all  duration-500 rounded-lg cursor-pointer shadow"
              onClick={toggleMenu}
              type="button"
            >
              <span className="text-xl">&#9776;</span>
            </button>
          </ul>
          <ul
            id="menu"
            className={`md:flex gap-5 ${
              isMenuOpen ? "" : "hidden"
            } text-navy`}
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
            <li className="my-5 md:my-0">
              <Link
                to="#footer"
                className="hover:text-secondary transition-all duration-500"
              >
                Kontak
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
