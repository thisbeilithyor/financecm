import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <header className="bg-gray-100 shadow sticky top-0 z-50">
        <div className="flex items-center justify-between px-6 py-4 w-full">
          
          {/* Logo (responsive) */}
         <div className="h-auto max-h-24">
            <img
                src="/logo-dunkel.webp"
                alt="Logo"
                className="h-auto max-h-24 w-auto object-contain"
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
              HOME
            </NavLink>
            <NavLink
              to="/immobilien"
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"
              }
            >
              IMMOBILIEN & PROJEKTE
            </NavLink>
            <NavLink
              to="/uberzypern"
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"
              }
            >
              ÜBER ZYPERN
            </NavLink>
            <NavLink
              to="/mediathek"
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"
              }
            >
              MEDIATHEK
            </NavLink>
            <NavLink
              to="/kontakt"
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"
              }
            >
              KONTAKT
            </NavLink>
            <NavLink
              to="/vermittlung"
              className={({ isActive }) =>
                isActive ? "underline underline-offset-4" : "hover:underline underline-offset-4"
              }
            >
              VERMITTLUNG
            </NavLink>
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
                    HOME
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/immobilien" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                    IMMOBILIEN & PROJEKTE
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/uberzypern" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                    ÜBER ZYPERN
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/mediathek" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                    MEDIATHEK
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/kontakt" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                    KONTAKT
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/vermittlung" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-100">
                    VERMITTLUNG
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