import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { toggleTheme } from "../../redux/theme/themeSlice";
import { logout } from "../../redux/usuario/usuarioSlice";
import { isTokenExpired } from "../../helpers/auth/TokenValido";
import { mensaje } from "../UI/Toast/mensaje";

// Menus
import NavbarIcons from "./NavbarIcons";
import NavbarMobileMenu from "./NavbarMobileMenu";
import NavbarDesktopMenu from "./NavbarDesktopMenu";

// Items menu
import menuItems from "../../data/menuItems.json";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mode = useSelector((state) => state.theme.mode);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // ✅ chequeo de token
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token && isTokenExpired(token)) {
      mensaje("⏳ Tu sesión expiró. Volvé a iniciar sesión.");

      setTimeout(() => {
        dispatch(logout());
        navigate("/login");
      }, 1200);
    }
  }, [dispatch, navigate]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-[var(--color-background-black)] text-[var(--p-blanco)] z-50 h-[60px] flex items-center shadow-md">
        <div className="w-[95%] max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <Link to="/">
            <img src="/logo.png" alt="Logo" className="h-[40px] w-auto" />
          </Link>

          {/* Menú desktop */}
          <NavbarDesktopMenu menuItems={menuItems} />

          <NavbarIcons
            navigate={navigate}
            mode={mode}
            toggleTheme={() => dispatch(toggleTheme())}
            isMenuOpen={isMenuOpen}
            toggleMenu={toggleMenu}
          />

          {/* Menú móvil */}
          {isMenuOpen && (
            <NavbarMobileMenu
              menuItems={menuItems}
              onClose={toggleMenu}
            />
          )}
        </div>
      </nav>

      <hr className="fixed top-[60px] left-0 w-full border border-[var(--p-negro)] z-40" />
    </>
  );
};

export default Navbar;
