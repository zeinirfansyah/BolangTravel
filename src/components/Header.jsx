import {
  Camera,
  History,
  LayoutDashboard,
  LogOut,
  PowerSquareIcon,
  User,
} from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import Dashboard from "../pages/admin/Home/Dashboard";

export const Header = () => {
  const { isAuthenticated, user, logout } = useAuthStore((state) => state);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-10 bg-white shadow">
      <div className="max-w-7xl mx-auto">
        <nav className="Navbar md:flex justify-between gap-20 items-center py-6 mx-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex items-center justify-between">
              <Link id="brand" to="/">
                <h1 className="text-xl font-semibold  transition-all duration-500">
                  <span className="text-secondary">Bolang</span>Travel.
                </h1>
              </Link>
              <div className="flex items-end justify-end gap-2">
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
            </ul>
          </div>
          <ul
            id="menu"
            className={`md:flex gap-5 ${isMenuOpen ? "" : "hidden"} text-navy`}
          >
            <li className="my-5 md:my-0">
              {isAuthenticated ? (
                <div className="flex md:items-center flex-col md:flex-row gap-4 md:gap-10">
                  {user.role === "admin" && (
                    <Link
                      to="/admin"
                      className="flex items-center gap-2 hover:text-secondary transition-all duration-500"
                    >
                      <LayoutDashboard size={20} />
                      Dashboard
                    </Link>
                  )}
                  <Link
                    to="/account/booking-history"
                    className="flex items-center gap-2 hover:text-secondary transition-all duration-500"
                  >
                    <History size={20} />
                    History Booking
                  </Link>
                  <Link
                    to="/account"
                    className="flex items-center gap-2 hover:text-secondary transition-all duration-500"
                  >
                    <User size={20} />
                    Profile
                  </Link>
                  <Link
                    onClick={handleLogout}
                    className="flex items-center gap-2 hover:text-secondary transition-all duration-500"
                  >
                    <LogOut size={20} />
                    Logout
                  </Link>
                </div>
              ) : (
                <div className="flex md:items-center flex-col md:flex-row gap-4 md:gap-10">
                  <Link
                    to="/login"
                    className="hover:text-secondary transition-all duration-500"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="hover:text-secondary transition-all duration-500"
                  >
                    Register
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
