import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Sprachauswahl } from "./Sprachauswahl.jsx";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const { t, i18n } = useTranslation();

  return (
    <>
      <header className="bg-gray-100 shadow sticky top-0 z-50 h-20">
        <div className="flex items-center justify-between px-6 w-full h-full">
          
          {/* Logo (responsive) */}
         <div className="!min-h-full flex items-center">
            <img
                src="/logo-dunkel.webp"
                alt="Logo"
                className="!border-none h-18 !w-auto object-contain !mt-0 !mb-0 !mr-0"
            />
        </div>


          {/* Navigation für große Bildschirme */}
          <nav className="hidden md:flex space-x-6 text-lg font-medium text-gray-900">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"
              }
            >
              {t("components.navbar.home")}
            </NavLink>
            <NavLink
              to="/immobilien"
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"
              }
            >
              {t("components.navbar.projects")}
            </NavLink>
            <NavLink
              to="/uberzypern"
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"
              }
            >
              {t("components.navbar.cyprus")}
            </NavLink>
            <NavLink
              to="/mediathek"
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"
              }
            >
              {t("components.navbar.mediathek")}
            </NavLink>
            <NavLink
              to="/kontakt"
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"
              }
            >
              {t("components.navbar.contact")}
            </NavLink>
            <NavLink
              to="/vermietung"
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"
              }
            >
              {t("components.navbar.renting")}
            </NavLink>
            <Sprachauswahl></Sprachauswahl>
          </nav>

          {/* Mobile: Hamburger Menü Button */}
          <div className="md:hidden relative">
            <button onClick={toggleMenu} className="flex flex-col justify-between w-8 h-6">
                <span className="block h-1 bg-green-900 rounded"></span>
                <span className="block h-1 bg-green-900 rounded"></span>
                <span className="block h-1 bg-green-900 rounded"></span>
            </button>

            {isMenuOpen && (
              <ul className="absolute right-0 mt-2 w-56 bg-white rounded shadow-lg z-50 text-gray-900 text-base">
                <li>
                  <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                    {t("components.navbar.home")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/immobilien" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                    {t("components.navbar.projects")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/uberzypern" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                    {t("components.navbar.cyprus")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/mediathek" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                    {t("components.navbar.mediathek")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/kontakt" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                    {t("components.navbar.contact")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/vermietung" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                    {t("components.navbar.renting")}
                  </NavLink>
                </li>
              </ul>
            )}
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
};

export default Navbar;