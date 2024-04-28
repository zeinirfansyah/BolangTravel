import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer id="footer" className=" bg-[#fff] border-t-2 border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col justify-center items-center gap-2 text-center py-7">
            <div id="footer-title">
              <h1 className="text-xl font-semibold">
                <span className="text-[#00C0E6]">Bolang</span>Travel.
              </h1>
            </div>
            <ul id="footer-contact" className="flex flex-col gap-2">
              <li className="text-[#B0B0B0]">
                <Link
                  to=""
                  target="_blank"
                  className="hover:text-[#00C0E6] transition-all duration-500"
                >
                  support@bolangtravel.id
                </Link>
              </li>
              <li className="text-[#B0B0B0]">
                <Link
                  to=""
                  target="_blank"
                  className="hover:text-[#00C0E6] transition-all duration-500"
                >
                  620 1234 5678
                </Link>
              </li>
              <li className="text-[#B0B0B0]">
                © 2024 All rights reserved - BolangTravel
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};
