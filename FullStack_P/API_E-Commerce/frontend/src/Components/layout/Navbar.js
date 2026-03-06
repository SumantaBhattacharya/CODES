import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Language_selector from "../Language_selector.js";
import Autocomplete from "./Autocomplete.js";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const items = useSelector((state) => state.cart);
  const products = useSelector((state) => state.product.data);

  const { t } = useTranslation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Navigate to a search results page (you'll need to create this page)
  const handleSearch = (query) => { // gets query parameter from the child Autocomplete component.
    if (!query.trim()) return;
    closeMenu();
    // The encodeURIComponent() function takes a string and replaces these special characters (and others) with a safe, encoded format that won't confuse the browser or the server. Each special character is replaced by a % followed by two hexadecimal digits representing its value.
    navigate(`/search?q=${encodeURIComponent(query)}`); // encodeURIComponent is a crucial security and reliability function that ensures any user-provided text can be safely transmitted as part of a URL without breaking its structure.
  };

  // When a user clicks a suggestion, navigate directly to the product page
  const handleSelect = (product) => {
    if (product && product.id) {
      closeMenu();
      navigate(`/product/${product.id}`);
    }
  };

  // handleResize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // Style constants
  const colors = {
    light: {
      text: "black",
      border: "rgba(0,0,0,0.5)",
      background: "transparent"
    },
    dark: {
      text: "white",
      border: "rgba(255,255,255,0.5)",
      background: "#282c34"
    }
  };

  const currentTheme = isMenuOpen ? colors.light : colors.dark;

  const baseLinkStyle = {
    textDecoration: "none",
    cursor: "pointer",
    color: "inherit",
    transition: "all 0.3s ease"
  };

  const mobileLinkStyle = {
    ...baseLinkStyle,
    fontSize: "10vw",
    textTransform: "uppercase",
    margin: "10px 0",
    display: "block",
    fontWeight: "700"
  };

  const navItems = [
    { path: "/", label: "home" },
    { path: "/cart", label: "cart" }
  ];

  return (
    <>
      <style>{`
        .nav-link-item {
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.2);
          padding: 10px 22px;
          cursor: pointer;
          border-radius: 50px;
          font-size: 16px;
          text-transform: capitalize;
          position: relative;
          transition: all 0.3s ease;
          overflow: hidden;
          display: inline-block;
        }

        .nav-link-item .link-text {
          text-decoration: none;
          color: white;
          transition: 0.3s;
        }

        .nav-link-item:not(#cart-items)::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: white;
          left: 0;
          bottom: -100%;
          border-radius: 50%;
          transition: all 0.4s ease;
          z-index: -1;
        }

        .nav-link-item:not(#cart-items):hover::after {
          bottom: 0;
          border-radius: 0;
        }

        .nav-link-item:not(#cart-items):hover .link-text {
          color: black;
        }

        @media (max-width: 768px) {
          .nav-part2 { display: none; }
          .menu-btn { display: block !important; }
          .logo-text { font-size: 26px !important; }
        }
      `}</style>

      {/* MOBILE MENU */}
      <div
        style={{
          position: "fixed",
          height: "100vh",
          width: "100%",
          backgroundColor: "#EFEAE3",
          zIndex: 999,
          top: isMenuOpen ? "0" : "-100%",
          transition: "all cubic-bezier(0.19,1,0.22,1) 0.8s",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "black"
        }}
      >
        {navItems.map(({ path, label }) => (
          <Link
            key={label}
            to={path}
            onClick={closeMenu}
            style={mobileLinkStyle}
          >
            {t(label)}
          </Link>
        ))}
      </div>

      {/* NAVBAR */}
      <nav
        style={{
          width: "100%",
          padding: "20px 5vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backgroundColor: currentTheme.background,
          borderBottom: isMenuOpen ? "none" : "1px solid rgba(255,255,255,0.1)",
          fontFamily: "Courier New"
        }}
      >
        {/* LOGO */}
        <Link
          to="/"
          className="logo-text"
          style={{
            fontSize: "32px",
            fontWeight: "700",
            textDecoration: "none",
            color: currentTheme.text
          }}
        >
          {t("logo")}
        </Link>

        {/* MOBILE MENU BUTTON */}
        <h3
          className="menu-btn"
          onClick={toggleMenu}
          style={{
            display: "none",
            padding: "8px 25px",
            borderRadius: "50px",
            fontSize: "16px",
            cursor: "pointer",
            border: `1px solid ${currentTheme.border}`,
            color: currentTheme.text
          }}
        >
          {isMenuOpen ? "CLOSE" : "MENU"}
        </h3>

        {/* DESKTOP NAV */}
        <div className="nav-part2">
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              gap: "15px",
              margin: 0,
              padding: 0,
              alignItems: "center"
            }}
          >
            {/* SEARCH BAR - CORRECT PROPS PASSING */}
            <li>
              <Autocomplete
                onSelect={handleSelect}
                onSearch={handleSearch} // onSearch is sending a function reference. means it passing the whole function.
                staticData={products} // Pass the full products array from Redux, which is an array of full product objects
                datakey="title" // This is a string that acts as an instruction, telling Autocomplete, "For each object you get, the string value stored inside title is to be used for searching and displaying.
                // Since datakey is "title", this becomes: item["title"]

                // When a parent component passes a prop, it overrides the default value defined in the child.
                placeholder="Search products..."
                customLoading={<>Loading Products...</>}
                customStyles={{
                  background: "#1f2937",
                  height: "45px",
                  borderRadius: "50px",
                  display: "flex",
                  alignItems: "center",
                  border: "2px solid #60a5fa",
                  transition: "width 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  overflow: "hidden",
                  marginLeft: "10px",
                  marginRight: "25px",
                }}
              />
            </li>

            {/* Navbar buttons */}
            {navItems.map(({ path, label }) => (
              <li key={label} className="nav-link-item">
                <Link to={path} className="link-text">
                  {t(label)}
                </Link>
              </li>
            ))}

            {/* Cart length */}
            <li className="nav-link-item" id="cart-items">
              <span className="link-text">
                {t("cartItems")}: {items.length}
              </span>
            </li>

            {/* Language selector */}
            <li style={{ display: "flex", alignItems: "center" }}>
              <Language_selector isMenuOpen={isMenuOpen} />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;