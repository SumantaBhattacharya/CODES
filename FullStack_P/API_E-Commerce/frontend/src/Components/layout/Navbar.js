import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Language_selector from "../Language_selector.js";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const items = useSelector((state) => state.cart);
  const { t } = useTranslation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Auto-close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    
    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  const mobileLinkStyle = {
    fontSize: "10vw",
    textTransform: "uppercase",
    cursor: "pointer",
    margin: "10px 0",
    textDecoration: "none",
    color: "inherit",
    display: "block",
    fontWeight: "700"
  };

  return (
    <>
      <style>{`
        .nav-link-item {
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 10px 22px;
          cursor: pointer;
          border-radius: 50px;
          font-size: 16px;
          text-transform: capitalize;
          position: relative;
          transition: all ease 0.3s;
          overflow: hidden;
          display: inline-block;
          z-index: 10;
        }

        .nav-link-item .link-text {
          text-decoration: none;
          color: white;
          position: relative;
          z-index: 11;
          transition: color 0.3s ease;
        }

        .nav-link-item:not(#cart-items)::after {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: white;
          left: 0;
          bottom: -100%;
          border-radius: 50%;
          transition: all ease 0.4s;
          z-index: 9;
        }

        .nav-link-item:not(#cart-items):hover::after {
          bottom: 0;
          border-radius: 0;
        }

        .nav-link-item:not(#cart-items):hover .link-text {
          color: black;
        }

        #cart-items.nav-link-item {
          cursor: default;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        #cart-items.nav-link-item .link-text {
          color: white;
        }

        #cart-items.nav-link-item::after {
          display: none;
        }

        #cart-items.nav-link-item:hover .link-text {
          color: white !important;
        }

        @media (max-width: 768px) {
          .nav-part2 { display: none; }
          .menu-btn { display: block !important; }
          .logo-text { font-size: 26px !important; }
        }
      `}</style>

      {/* Fullscreen Mobile Menu */}
      <div
        style={{
          position: "fixed",
          height: "100vh",
          width: "100%",
          backgroundColor: "#EFEAE3",
          zIndex: 999,
          top: isMenuOpen ? "0" : "-100%",
          transition: "all cubic-bezier(0.19, 1, 0.22, 1) 0.8s",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
        }}
      >
        <Link to="/" onClick={toggleMenu} style={mobileLinkStyle}>
          {t("home")}
        </Link>
        <Link to="/cart" onClick={toggleMenu} style={mobileLinkStyle}>
          {t("cart")}
        </Link>
      </div>

      {/* Navbar */}
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
          transition: "all 0.3s ease",
          backgroundColor: isMenuOpen ? "transparent" : "#282c34",
          borderBottom: isMenuOpen ? "none" : "1px solid rgba(255,255,255,0.1)",
          fontFamily: "Courier New",
        }}
      >
        {/* TEXT LOGO */}
        <Link
          to="/"
          className="logo-text"
          style={{
            fontSize: "32px",
            fontWeight: "700",
            letterSpacing: "1px",
            margin: 0,
            cursor: "pointer",
            zIndex: 1001,
            textDecoration: "none",
            color: isMenuOpen ? "black" : "white",
            fontFamily: "Courier New",
          }}
        >
          {t("logo")}
        </Link>

        {/* Mobile Menu Button */}
        <h3
          className="menu-btn"
          onClick={toggleMenu}
          style={{
            display: "none",
            padding: "8px 25px",
            borderRadius: "50px",
            fontWeight: "400",
            fontSize: "16px",
            cursor: "pointer",
            margin: 0,
            zIndex: 1001,
            border: isMenuOpen
              ? "1px solid rgba(0,0,0,0.5)"
              : "1px solid rgba(255,255,255,0.5)",
            color: isMenuOpen ? "black" : "white",
          }}
        >
          {isMenuOpen ? "CLOSE" : "MENU"}
        </h3>

        {/* Desktop Links */}
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
            <li className="nav-link-item">
              <Link to="/" className="link-text">
                {t("home")}
              </Link>
            </li>
            <li className="nav-link-item">
              <Link to="/cart" className="link-text">
                {t("cart")}
              </Link>
            </li>
            <li className="nav-link-item" id="cart-items" tabIndex={-1}>
              <span className="link-text" style={{ cursor: "default" }}>
                {t("cartItems")}: {items.length}
              </span>
            </li>
            <li style={{ marginLeft: "5px", display: "flex", alignItems: "center" }}>
              {/* Pass isMenuOpen to Language_selector so it can change colors too */}
              <Language_selector isMenuOpen={isMenuOpen} />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;